import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle.jsx';
import BoutiqueInfo from '../components/BoutiqueInfo.jsx';
import ContactButtons from '../components/ContactButtons.jsx';
import PerfumeVisual from '../components/PerfumeVisual.jsx';
import { boutique } from '../data/boutique.js';
import { setSeo } from '../utils.js';
import styles from './Pages.module.css';

export default function About() {
  useEffect(() => setSeo({
    title: 'О бутике | Maison Memory',
    description: 'История и философия премиального парфюмерного бутика Maison Memory.'
  }), []);

  return (
    <section className="section pageTop">
      <div className={styles.split}>
        <div>
          <SectionTitle kicker="О бутике" title="Парфюмерия без спешки и случайных решений" />
          <p className={styles.lead}>Maison Memory задуман как тихий салон, где аромат выбирают на коже, в своем темпе и с вниманием к деталям. Мы работаем с оригинальными флаконами, аккуратно знакомим с редкими композициями и помогаем отличить красивую идею от аромата, который действительно станет вашим.</p>
          <p className={styles.lead}>Владелец может заменить этот текст на реальную историю бутика, команду, документы об оригинальности и фотографии интерьера.</p>
          <ContactButtons />
        </div>
        <PerfumeVisual palette={{ a: '#f7f1ea', b: '#cfb78f', c: '#6f6254' }} label="Интерьер парфюмерного бутика" />
      </div>
      <div className={styles.benefits}>
        {['Оригинальная парфюмерия', 'Личная консультация', 'Знакомство с ароматами', 'Бережная упаковка', 'Уютный адрес', 'Связь в мессенджерах'].map((item) => <article key={item}><h3>{item}</h3><p>Демонстрационный блок для быстрой замены на реальные детали бутика.</p></article>)}
      </div>
      <BoutiqueInfo />
    </section>
  );
}
