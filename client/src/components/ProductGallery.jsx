import { useState } from 'react';
import PerfumeVisual from './PerfumeVisual.jsx';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ product }) {
  const palettes = [
    product.images,
    { a: product.images.b, b: product.images.a, c: product.images.c },
    { a: '#ffffff', b: product.images.b, c: product.images.a }
  ];
  const [active, setActive] = useState(0);
  return (
    <div className={styles.gallery}>
      <PerfumeVisual palette={palettes[active]} label={`${product.brand} ${product.name}`} />
      <div className={styles.thumbs}>
        {palettes.map((palette, index) => (
          <button key={palette.a + index} className={active === index ? styles.active : ''} onClick={() => setActive(index)} aria-label={`Фото ${index + 1}`}>
            <span style={{ background: `linear-gradient(135deg, ${palette.a}, ${palette.b})` }} />
          </button>
        ))}
      </div>
    </div>
  );
}
