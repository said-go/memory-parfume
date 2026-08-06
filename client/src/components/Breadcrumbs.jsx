import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({ items }) {
  return (
    <nav className={styles.crumbs} aria-label="Хлебные крошки">
      <Link to="/">Главная</Link>
      {items.map((item) => item.to ? <Link key={item.label} to={item.to}>{item.label}</Link> : <span key={item.label}>{item.label}</span>)}
    </nav>
  );
}
