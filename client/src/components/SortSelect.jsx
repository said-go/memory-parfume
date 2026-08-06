import styles from './Controls.module.css';

export default function SortSelect({ value, onChange }) {
  return (
    <label className={styles.selectLabel}>
      <span>Сортировка</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="popular">По популярности</option>
        <option value="new">Новинки</option>
        <option value="price-asc">Сначала дешевле</option>
        <option value="price-desc">Сначала дороже</option>
      </select>
    </label>
  );
}
