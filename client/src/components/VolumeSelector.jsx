import { money } from '../utils.js';
import styles from './VolumeSelector.module.css';

export default function VolumeSelector({ product, volume, onChange }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.options}>
        {product.volumes.map((item) => (
          <button key={item} className={volume === item ? styles.active : ''} onClick={() => onChange(item)}>{item}</button>
        ))}
      </div>
      <strong>{money(product.pricesByVolume[volume])}</strong>
    </div>
  );
}
