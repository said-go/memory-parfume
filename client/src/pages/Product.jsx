import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dictionaries, products } from '../data/products.js';
import { boutique } from '../data/boutique.js';
import { findProduct, money, productPath, setSeo } from '../utils.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ContactButtons from '../components/ContactButtons.jsx';
import ProductGallery from '../components/ProductGallery.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import VolumeSelector from '../components/VolumeSelector.jsx';
import styles from './Pages.module.css';

export default function Product() {
  const { id } = useParams();
  const product = findProduct(id);
  const [volume, setVolume] = useState('');

  useEffect(() => {
    if (product) setSeo({
      title: `${product.brand} ${product.name} | ${boutique.name}`,
      description: product.description
    });
  }, [product]);

  useEffect(() => {
    if (product) setVolume(product.volumes[0]);
  }, [product]);

  if (!product) return <section className="section pageTop"><h1>Аромат не найден</h1><Link className="btn primary" to="/catalog">Вернуться в каталог</Link></section>;

  const related = products.filter((item) => item.id !== product.id && (item.family === product.family || item.gender === product.gender)).slice(0, 4);

  return (
    <section className="section pageTop">
      <Breadcrumbs items={[{ label: 'Каталог', to: '/catalog' }, { label: product.name }]} />
      <div className={styles.product}>
        <ProductGallery product={product} />
        <div className={styles.productInfo}>
          <span>{product.brand}</span>
          <h1>{product.name}</h1>
          <p>{product.fullDescription}</p>
          <div className={styles.meta}>
            <b>{dictionaries.gender[product.gender]}</b>
            <b>{dictionaries.family[product.family]}</b>
            <b>{dictionaries.availability[product.availability]}</b>
          </div>
          <VolumeSelector product={product} volume={volume || product.volumes[0]} onChange={setVolume} />
          <ContactButtons productName={`${product.brand} ${product.name}`} volume={volume || product.volumes[0]} />
        </div>
      </div>
      <div className={styles.notes}>
        <article><h2>Верхние ноты</h2><p>{product.topNotes.join(', ')}</p></article>
        <article><h2>Сердце</h2><p>{product.heartNotes.join(', ')}</p></article>
        <article><h2>База</h2><p>{product.baseNotes.join(', ')}</p></article>
        <article><h2>Стойкость</h2><p>{product.longevity}, шлейф: {product.sillage}</p></article>
      </div>
      <h2 className={styles.inlineTitle}>Похожие ароматы</h2>
      <ProductGrid products={related} />
    </section>
  );
}
