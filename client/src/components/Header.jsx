import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, MessageCircle, Search, X } from 'lucide-react';
import { boutique, navItems } from '../data/boutique.js';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('lock-scroll', menuOpen);
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lock-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/catalog${query ? `?q=${encodeURIComponent(query)}` : ''}`);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Link className={styles.brand} to="/" onClick={() => setMenuOpen(false)}>
        <span>Бутик</span>
        <strong>{boutique.name}</strong>
      </Link>
      <nav className={styles.nav} aria-label="Основная навигация">
        {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
      </nav>
      <div className={styles.actions}>
        <button aria-label="Открыть поиск" title="Поиск" onClick={() => setSearchOpen(true)}><Search size={19} /></button>
        <a className={`${styles.contact} ${styles.whatsappLink}`} href={boutique.whatsapp} target="_blank" rel="noreferrer" aria-label="Написать в WhatsApp"><MessageCircle size={18} />Менеджер</a>
        <button className={styles.menuBtn} aria-label="Открыть меню" title="Меню" onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
      </div>
      {searchOpen && (
        <div className={styles.searchLayer} role="dialog" aria-label="Поиск по каталогу">
          <form onSubmit={submitSearch}>
            <Search size={20} />
            <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Название, бренд, ноты или настроение" />
            <button aria-label="Закрыть поиск" type="button" onClick={() => setSearchOpen(false)}><X size={20} /></button>
          </form>
        </div>
      )}
      {menuOpen && (
        <>
          <button className={styles.backdrop} aria-label="Закрыть меню" onClick={() => setMenuOpen(false)} />
          <div className={`${styles.mobilePanel} ${styles.open}`} role="dialog" aria-modal="true" aria-label="Мобильное меню">
            <button className={styles.close} aria-label="Закрыть меню" onClick={() => setMenuOpen(false)}><X size={22} /></button>
            {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}
            <a className={styles.whatsappLink} href={boutique.whatsapp} target="_blank" rel="noreferrer" aria-label="Написать в WhatsApp"><MessageCircle size={18} />Связаться с менеджером</a>
          </div>
        </>
      )}
    </header>
  );
}
