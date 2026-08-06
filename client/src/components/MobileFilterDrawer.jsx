import { SlidersHorizontal, X } from 'lucide-react';
import { useEffect } from 'react';
import FilterPanel from './FilterPanel.jsx';
import styles from './Controls.module.css';

export default function MobileFilterDrawer({ open, setOpen, filters, onChange }) {
  useEffect(() => {
    document.body.classList.toggle('lock-scroll', open);
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lock-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [open, setOpen]);

  return (
    <>
      <button className={styles.filterButton} onClick={() => setOpen(true)}><SlidersHorizontal size={18} />Фильтры</button>
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <button className={styles.drawerClose} aria-label="Закрыть фильтры" onClick={() => setOpen(false)}><X size={21} /></button>
        <h2>Фильтры</h2>
        <FilterPanel filters={filters} onChange={onChange} />
      </div>
    </>
  );
}
