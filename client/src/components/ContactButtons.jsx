import { Camera, MessageCircle, Send } from 'lucide-react';
import { boutique } from '../data/boutique.js';
import styles from './ContactButtons.module.css';

export default function ContactButtons({ productName }) {
  const text = productName ? `Здравствуйте! Хочу уточнить наличие ${productName}.` : 'Здравствуйте! Помогите подобрать аромат.';
  return (
    <div className={styles.buttons}>
      <a href={`${boutique.whatsapp}?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp</a>
      <a href={boutique.telegram} target="_blank" rel="noreferrer"><Send size={18} />Telegram</a>
      <a href={boutique.instagram} target="_blank" rel="noreferrer"><Camera size={18} />Instagram</a>
    </div>
  );
}
