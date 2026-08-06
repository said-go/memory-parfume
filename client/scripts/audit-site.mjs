import { chromium } from 'playwright-core';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const baseUrl = process.env.AUDIT_URL || 'http://127.0.0.1:5173';
const widths = [320, 375, 465, 768, 1024, 1440];
const failures = [];

const browser = await chromium.launch({ executablePath: edgePath, headless: true });

async function check(condition, message) {
  if (!condition) failures.push(message);
}

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (error) => consoleErrors.push(error.message));

  await page.goto(`${baseUrl}/catalog?family=woody&gender=unisex&sort=price-asc`, { waitUntil: 'networkidle' });

  const metrics = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('article')].filter((item) => item.querySelector('a[href*="/product/"]'));
    const rects = cards.slice(0, 3).map((card) => {
      const rect = card.getBoundingClientRect();
      return { left: Math.round(rect.left), right: Math.round(rect.right), top: Math.round(rect.top), width: Math.round(rect.width) };
    });
    const priceRects = [...document.querySelectorAll('article strong')].slice(0, 6).map((node) => {
      const rect = node.getBoundingClientRect();
      return { width: rect.width, parentWidth: node.parentElement.getBoundingClientRect().width };
    });
    return {
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      cardCount: cards.length,
      rects,
      pricesFit: priceRects.every((rect) => rect.width <= rect.parentWidth + 1),
      title: document.title
    };
  });

  await check(metrics.scrollWidth <= metrics.innerWidth + 1, `Есть горизонтальная прокрутка на ${width}px: ${metrics.scrollWidth}/${metrics.innerWidth}`);
  await check(metrics.cardCount > 0, `Не найдены карточки каталога на ${width}px`);
  await check(metrics.pricesFit, `Цена выходит за контейнер на ${width}px`);

  if (width <= 375 && metrics.rects.length >= 2) {
    await check(metrics.rects[0].top === metrics.rects[1].top, `На ${width}px первые две карточки не стоят в одной строке`);
    await check(metrics.rects[0].right <= metrics.rects[1].left || metrics.rects[1].right <= metrics.rects[0].left, `На ${width}px карточки пересекаются`);
  }

  if (width <= 520) {
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    await page.getByLabel('Открыть меню').click();
    const menuMetrics = await page.evaluate(() => {
      const panel = document.querySelector('[aria-label="Мобильное меню"]');
      const rect = panel?.getBoundingClientRect();
      return {
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        left: Math.round(rect?.left ?? -1),
        right: Math.round(rect?.right ?? -1)
      };
    });
    await check(menuMetrics.scrollWidth <= menuMetrics.innerWidth + 1, `Мобильное меню создает горизонтальную прокрутку на ${width}px`);
    await check(menuMetrics.left >= 0 && menuMetrics.right <= menuMetrics.innerWidth + 1, `Мобильное меню выходит за экран на ${width}px`);

    await page.keyboard.press('Escape');
    await page.goto(`${baseUrl}/catalog`, { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Фильтры' }).click();
    const drawerMetrics = await page.evaluate(() => {
      const panel = document.querySelector('[aria-label="Фильтры каталога"]');
      const rect = panel?.getBoundingClientRect();
      return {
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        left: Math.round(rect?.left ?? -1),
        right: Math.round(rect?.right ?? -1)
      };
    });
    await check(drawerMetrics.scrollWidth <= drawerMetrics.innerWidth + 1, `Мобильные фильтры создают горизонтальную прокрутку на ${width}px`);
    await check(drawerMetrics.left >= 0 && drawerMetrics.right <= drawerMetrics.innerWidth + 1, `Мобильные фильтры выходят за экран на ${width}px`);
    await page.keyboard.press('Escape');
  }

  const firstCard = page.locator('article a[href*="/product/"]').first();
  await firstCard.click();
  await page.waitForLoadState('networkidle');
  await check(page.url().includes('/product/'), `Страница товара не открылась на ${width}px`);

  const initialPrice = await page.locator('text=/\\d+\\s?\\d* ₽/').first().textContent();
  const volumeButtons = page.locator('button', { hasText: '10 мл' });
  if (await volumeButtons.count()) {
    await volumeButtons.first().click();
    const changedPrice = await page.locator('text=/\\d+\\s?\\d* ₽/').first().textContent();
    await check(initialPrice !== changedPrice, `Цена не изменилась при выборе объема на ${width}px`);
  }

  await page.goto(`${baseUrl}/catalog?q=cedar&family=woody&sort=price-desc`, { waitUntil: 'networkidle' });
  const catalogState = await page.evaluate(() => ({
    url: location.href,
    foundText: document.body.innerText,
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth
  }));
  await check(catalogState.url.includes('q=cedar') && catalogState.url.includes('family=woody') && catalogState.url.includes('sort=price-desc'), `URL-фильтры не сохранились на ${width}px`);
  await check(catalogState.foundText.includes('Cedar Noir'), `Поиск+фильтр+сортировка не нашли ожидаемый товар на ${width}px`);
  await check(catalogState.scrollWidth <= catalogState.innerWidth + 1, `Горизонтальная прокрутка после фильтров на ${width}px`);
  await check(consoleErrors.length === 0, `Ошибки консоли на ${width}px: ${consoleErrors.join(' | ')}`);

  await page.close();
}

await browser.close();

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Audit passed');
