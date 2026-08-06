import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { dictionaries } from '../data/products.js';
import { money, productPath } from '../utils.js';
import PerfumeVisual from './PerfumeVisual.jsx';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <Link to={productPath(product)} className={styles.image}>
        <PerfumeVisual palette={product.images} label={`${product.brand} ${product.name}`} compact />
        {product.isNew && <span className={styles.badge}><Sparkles size={13} />New</span>}
      </Link>
      <div className={styles.body}>
        <p>{product.brand}</p>
        <Link to={productPath(product)}>{product.name}</Link>
        <span>{dictionaries.gender[product.gender]} · {dictionaries.family[product.family]}</span>
        <strong>от {money(product.price)}</strong>
      </div>
    </article>
  );
}
