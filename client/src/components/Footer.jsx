import { Link } from 'react-router-dom';
import { boutique, navItems } from '../data/boutique.js';
import ContactButtons from './ContactButtons.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>{boutique.name}</h2>
        <p>{boutique.tagline}. Подбор ароматов, распив оригинальной парфюмерии и спокойная консультация без спешки.</p>
      </div>
      <nav>
        {navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
      </nav>
      <div>
        <p>{boutique.address}</p>
        <p>{boutique.workHours}</p>
        <p><a href={`tel:${boutique.phoneLink}`}>{boutique.phoneDisplay}</a></p>
        <ContactButtons />
      </div>
      <small>© 2026 {boutique.name}. Юридическая информация и политика конфиденциальности: демонстрационные разделы.</small>
    </footer>
  );
}
