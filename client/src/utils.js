import { products } from './data/products.js';

export const money = (value) => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';

export function productPath(product) {
  return `/product/${product.slug || product.id}`;
}

export function findProduct(id) {
  return products.find((item) => item.id === id || item.slug === id);
}

export function setSeo({ title, description }) {
  document.title = title;
  const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
  meta.name = 'description';
  meta.content = description;
  document.head.appendChild(meta);

  const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.content = title;
  document.head.appendChild(ogTitle);

  const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.content = description;
  document.head.appendChild(ogDescription);
}

export function filterProducts(items, filters) {
  const query = filters.q.trim().toLowerCase();
  return items.filter((product) => {
    const haystack = [
      product.name,
      product.brand,
      product.family,
      product.description,
      product.fullDescription,
      ...product.notes,
      ...product.topNotes,
      ...product.heartNotes,
      ...product.baseNotes
    ].join(' ').toLowerCase();

    const byQuery = !query || haystack.includes(query);
    const byGender = !filters.gender || product.gender === filters.gender;
    const byFamily = !filters.family || product.family === filters.family;
    const byBrand = !filters.brand || product.brand === filters.brand;
    const bySeason = !filters.season || product.season.includes(filters.season);
    const byAvailability = !filters.availability || product.availability === filters.availability;
    const byVolume = !filters.volume || product.volumes.includes(filters.volume);
    const byNote = !filters.note || product.notes.some((note) => note.toLowerCase().includes(filters.note.toLowerCase()));
    const byPrice = !filters.maxPrice || product.price <= Number(filters.maxPrice);

    return byQuery && byGender && byFamily && byBrand && bySeason && byAvailability && byVolume && byNote && byPrice;
  });
}

export function sortProducts(items, sort) {
  return [...items].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'new') return Number(b.isNew) - Number(a.isNew);
    return b.popularity - a.popularity;
  });
}
