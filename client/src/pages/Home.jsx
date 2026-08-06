import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Gift, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { products, dictionaries } from '../data/products.js';
import { boutique } from '../data/boutique.js';
import { getProductPhotos } from '../data/productPhotos.js';
import { productPath, setSeo } from '../utils.js';
import SectionTitle from '../components/SectionTitle.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import PerfumeVisual from '../components/PerfumeVisual.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import BoutiqueInfo from '../components/BoutiqueInfo.jsx';
import styles from './Pages.module.css';
import { useEffect } from 'react';

const families = ['fresh', 'sweet', 'woody', 'floral', 'citrus', 'oriental', 'leather', 'gourmand'];
const genders = [
  { key: 'male', title: 'Мужские', text: 'Собранные древесные, кожаные и свежие композиции.' },
  { key: 'female', title: 'Женские', text: 'Цветочные, пудровые, гурманские и сияющие ароматы.' },
  { key: 'unisex', title: 'Унисекс', text: 'Ноты, которые звучат свободно и зависят от кожи.' }
];

export default function Home() {
  useEffect(() => setSeo({
    title: 'Maison Memory | Премиальный каталог парфюмерии',
    description: 'Светлый каталог премиального парфюмерного бутика с подбором ароматов, распивом и консультацией менеджера.'
  }), []);

  return (
    <>
      <section className={`${styles.hero} section`}>
        <div className={styles.heroText}>
          <span>Премиальный парфюмерный бутик</span>
          <h1>Ароматы, которые остаются личной памятью</h1>
          <p>{boutique.tagline}. Помогаем выбрать флакон или небольшой объем для знакомства с композицией. Доступны распив и разлив.</p>
          <div className={styles.cta}>
            <Link className="btn primary" to="/catalog">Смотреть каталог <ArrowRight size={18} /></Link>
            <Link className="btn" to="/catalog?family=fresh">Подобрать аромат <Sparkles size={18} /></Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <PerfumeVisual palette={{ a: '#faf2e8', b: '#d8bd89', c: '#6a5c4b' }} imageSrc={getProductPhotos(products[2])[0]} label="Флакон парфюма Maison Memory" />
        </div>
      </section>

      <section className="section">
        <SectionTitle kicker="Выбор гостей" title="Популярные ароматы" text="Композиции, к которым чаще всего возвращаются после первого знакомства." />
        <ProductGrid products={products.slice().sort((a, b) => b.popularity - a.popularity).slice(0, 5)} />
      </section>

      <section className="section">
        <SectionTitle kicker="Настроение" title="Подбор по звучанию" />
        <div className={styles.chips}>
          {families.map((family) => <Link key={family} to={`/catalog?family=${family}`}>{dictionaries.family[family]}</Link>)}
        </div>
      </section>

      <section className="section">
        <SectionTitle kicker="Для кого" title="Выберите направление" />
        <div className={styles.three}>
          {genders.map((item) => (
            <Link key={item.key} to={`/catalog?gender=${item.key}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <ScrollReveal className="section">
        <div className={styles.split}>
          <div>
            <SectionTitle kicker="Распив" title="Оригинальный аромат в удобном объеме" text="Можно начать с 5 или 10 мл, спокойно носить аромат несколько дней и решить, нужен ли полный флакон." />
            <Link className="btn primary" to="/decant">Подробнее о распиве</Link>
          </div>
          <div className={styles.glassList}>
            {['Оригинальные флаконы', 'Чистые атомайзеры', 'Бережная упаковка', 'Подбор менеджера'].map((item) => <p key={item}><BadgeCheck size={18} />{item}</p>)}
          </div>
        </div>
      </ScrollReveal>

      <section className="section">
        <SectionTitle kicker="Бутик" title="Тихое место для выбора своего аромата" text="Мы работаем с оригинальной парфюмерией, помогаем сравнить ноты на коже и не торопим с решением." />
        <div className={styles.benefits}>
          {[ShieldCheck, Sparkles, Gift, MessageCircle].map((Icon, i) => {
            const text = ['Оригинальная продукция', 'Персональный подбор', 'Разные объемы', 'Удобная связь'][i];
            return <article key={text}><Icon size={22} /><h3>{text}</h3></article>;
          })}
        </div>
      </section>

      <section className="section">
        <SectionTitle kicker="Контакты" title="Адрес и связь" />
        <div className={styles.split}>
          <BoutiqueInfo />
          <div className={styles.map}>Карта: {boutique.mapCoords}</div>
        </div>
      </section>
    </>
  );
}
