import { useEffect } from 'react';
import { Navigation } from 'lucide-react';
import BoutiqueInfo from '../components/BoutiqueInfo.jsx';
import ContactForm from '../components/ContactForm.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { boutique } from '../data/boutique.js';
import { setSeo } from '../utils.js';
import styles from './Pages.module.css';

export default function Contacts() {
  useEffect(() => setSeo({
    title: 'Контакты | Maison Memory',
    description: 'Адрес, телефон, мессенджеры, почта и форма обращения бутика Maison Memory.'
  }), []);

  return (
    <section className="section pageTop">
      <SectionTitle kicker="Контакты" title="Свяжитесь с менеджером или приезжайте в бутик" />
      <div className={styles.contactGrid}>
        <div>
          <BoutiqueInfo />
          <a className="btn primary" href={boutique.routeUrl} target="_blank" rel="noreferrer"><Navigation size={18} />Построить маршрут</a>
        </div>
        <ContactForm />
      </div>
      <div className={styles.map}>Интерактивная карта: {boutique.address}. Координаты для замены: {boutique.mapCoords}</div>
    </section>
  );
}
