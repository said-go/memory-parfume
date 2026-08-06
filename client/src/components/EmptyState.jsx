import { SearchX } from 'lucide-react';
import styles from './Controls.module.css';

export default function EmptyState({ onReset }) {
  return (
    <div className={styles.empty}>
      <SearchX size={34} />
      <h2>Ароматы не найдены</h2>
      <p>Попробуйте убрать часть фильтров или изменить поисковый запрос.</p>
      <button onClick={onReset}>Сбросить фильтры</button>
    </div>
  );
}
