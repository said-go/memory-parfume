import { X } from 'lucide-react';
import { dictionaries } from '../data/products.js';
import styles from './Controls.module.css';

const labels = {
  q: 'Поиск',
  gender: 'Пол',
  family: 'Семейство',
  brand: 'Бренд',
  season: 'Сезон',
  volume: 'Объем',
  note: 'Нота',
  availability: 'Наличие',
  maxPrice: 'До'
};

export default function ActiveFilters({ filters, onRemove, onReset }) {
  const entries = Object.entries(filters).filter(([, value]) => value);
  if (!entries.length) return null;
  const name = (key, value) => dictionaries[key]?.[value] || (key === 'maxPrice' ? `${value} ₽` : value);
  return (
    <div className={styles.active}>
      {entries.map(([key, value]) => (
        <button key={key} onClick={() => onRemove(key)}>{labels[key]}: {name(key, value)} <X size={14} /></button>
      ))}
      <button className={styles.reset} onClick={onReset}>Сбросить</button>
    </div>
  );
}
