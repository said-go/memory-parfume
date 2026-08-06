import { useState } from 'react';
import { money } from '../utils.js';
import styles from './VolumeSelector.module.css';

export default function VolumeSelector({ product }) {
  const [volume, setVolume] = useState(product.volumes[0]);
  return (
    <div className={styles.wrap}>
      <div className={styles.options}>
        {product.volumes.map((item) => (
          <button key={item} className={volume === item ? styles.active : ''} onClick={() => setVolume(item)}>{item}</button>
        ))}
      </div>
      <strong>{money(product.pricesByVolume[volume])}</strong>
    </div>
  );
}
