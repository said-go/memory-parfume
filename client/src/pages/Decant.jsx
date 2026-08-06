import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DecantExplanation from '../components/DecantExplanation.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { setSeo } from '../utils.js';
import styles from './Pages.module.css';

export default function Decant() {
  useEffect(() => setSeo({
    title: 'Распив и разлив | Maison Memory',
    description: 'Чем распив оригинальной парфюмерии отличается от разлива и как выбрать небольшой объем аромата.'
  }), []);

  return (
    <section className="section pageTop">
      <SectionTitle kicker="Распив и разлив" title="Небольшой объем без потери качества выбора" text="Распив помогает понять аромат в обычной жизни: утром, вечером, в помещении и на улице." />
      <DecantExplanation />
      <div className={styles.steps}>
        {['Выберите аромат в каталоге', 'Отметьте удобный объем', 'Напишите менеджеру', 'Получите аккуратно подписанный атомайзер'].map((item, index) => (
          <article key={item}><span>{index + 1}</span><h3>{item}</h3></article>
        ))}
      </div>
      <Link className="btn primary" to="/catalog">Перейти к ароматам</Link>
    </section>
  );
}
