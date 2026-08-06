import { Search } from 'lucide-react';
import styles from './Controls.module.css';

export default function SearchBar({ value, onChange }) {
  return (
    <label className={styles.search}>
      <Search size={19} />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Искать по названию, бренду, нотам" />
    </label>
  );
}
