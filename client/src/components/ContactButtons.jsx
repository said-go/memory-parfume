import { Camera, MessageCircle } from 'lucide-react';
import { boutique } from '../data/boutique.js';
import styles from './ContactButtons.module.css';

export default function ContactButtons({ productName, volume }) {
  const text = productName
    ? `Здравствуйте! Меня интересует аромат ${productName}${volume ? `, объём ${volume}` : ''}.`
    : 'Здравствуйте! Помогите подобрать аромат.';
  const whatsappUrl = `${boutique.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <div className={styles.buttons}>
      <a className={styles.whatsapp} href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Написать в WhatsApp"><MessageCircle size={18} />WhatsApp</a>
      <a className={styles.instagram} href={boutique.instagram} target="_blank" rel="noreferrer" aria-label="Открыть Instagram"><Camera size={18} />Instagram</a>
    </div>
  );
}
