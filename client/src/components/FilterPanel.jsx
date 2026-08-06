import { dictionaries, products } from '../data/products.js';
import styles from './Controls.module.css';

const brands = [...new Set(products.map((item) => item.brand))];
const notes = [...new Set(products.flatMap((item) => item.notes))].slice(0, 16);
const volumes = [...new Set(products.flatMap((item) => item.volumes))];

export default function FilterPanel({ filters, onChange }) {
  const field = (name, value) => onChange({ ...filters, [name]: value });
  return (
    <aside className={styles.panel}>
      <FilterSelect label="Пол" value={filters.gender} onChange={(v) => field('gender', v)} options={dictionaries.gender} />
      <FilterSelect label="Семейство" value={filters.family} onChange={(v) => field('family', v)} options={dictionaries.family} />
      <FilterSelect label="Бренд" value={filters.brand} onChange={(v) => field('brand', v)} array={brands} />
      <FilterSelect label="Сезон" value={filters.season} onChange={(v) => field('season', v)} options={dictionaries.season} />
      <FilterSelect label="Объем" value={filters.volume} onChange={(v) => field('volume', v)} array={volumes} />
      <FilterSelect label="Нота" value={filters.note} onChange={(v) => field('note', v)} array={notes} />
      <FilterSelect label="Наличие" value={filters.availability} onChange={(v) => field('availability', v)} options={dictionaries.availability} />
      <label className={styles.selectLabel}>
        <span>Цена до</span>
        <select value={filters.maxPrice} onChange={(event) => field('maxPrice', event.target.value)}>
          <option value="">Любая</option>
          <option value="4000">4 000 ₽</option>
          <option value="5000">5 000 ₽</option>
          <option value="6000">6 000 ₽</option>
        </select>
      </label>
    </aside>
  );
}

function FilterSelect({ label, value, onChange, options, array }) {
  const entries = options ? Object.entries(options) : array.map((item) => [item, item]);
  return (
    <label className={styles.selectLabel}>
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Все</option>
        {entries.map(([key, title]) => <option key={key} value={key}>{title}</option>)}
      </select>
    </label>
  );
}
