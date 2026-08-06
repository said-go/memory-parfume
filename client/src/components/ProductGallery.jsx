import { useState } from 'react';
import { getProductPhotos } from '../data/productPhotos.js';
import PerfumeVisual from './PerfumeVisual.jsx';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ product }) {
  const palettes = [
    product.images,
    { a: product.images.b, b: product.images.a, c: product.images.c },
    { a: '#ffffff', b: product.images.b, c: product.images.a }
  ];
  const photos = getProductPhotos(product);
  const [active, setActive] = useState(0);
  return (
    <div className={styles.gallery}>
      <PerfumeVisual palette={palettes[active]} imageSrc={photos[active]} label={`${product.brand} ${product.name}`} />
      <div className={styles.thumbs}>
        {photos.map((photo, index) => (
          <button key={photo} className={active === index ? styles.active : ''} onClick={() => setActive(index)} aria-label={`Фото ${index + 1}`}>
            <img src={photo} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
