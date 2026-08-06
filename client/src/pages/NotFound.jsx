import { Link } from 'react-router-dom';
import { setSeo } from '../utils.js';
import { useEffect } from 'react';
import { boutique } from '../data/boutique.js';
import styles from './Pages.module.css';

export default function NotFound() {
  useEffect(() => setSeo({
    title: `Страница не найдена | ${boutique.name}`,
    description: `404 страница премиального парфюмерного бутика ${boutique.name}.`
  }), []);
  return (
    <section className={`${styles.notFound} section pageTop`}>
      <span>404</span>
      <h1>Эта нота не найдена</h1>
      <p>Вернитесь в каталог или на главную, чтобы продолжить выбор аромата.</p>
      <Link className="btn primary" to="/catalog">Открыть каталог</Link>
    </section>
  );
}
