import { getProductPhotos } from '../data/productPhotos.js';
import PerfumeVisual from './PerfumeVisual.jsx';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ product }) {
  const [photo] = getProductPhotos(product);

  return (
    <div className={styles.gallery}>
      <PerfumeVisual palette={product.images} imageSrc={photo} label={`${product.brand} ${product.name}`} />
    </div>
  );
}
