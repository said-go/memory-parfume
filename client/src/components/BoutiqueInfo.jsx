import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { boutique } from '../data/boutique.js';
import ContactButtons from './ContactButtons.jsx';
import styles from './Info.module.css';

export default function BoutiqueInfo() {
  return (
    <div className={styles.info}>
      <p><MapPin size={18} />{boutique.address}</p>
      <p><Clock size={18} />{boutique.workHours}</p>
      <p><Phone size={18} />{boutique.phone}</p>
      <p><Mail size={18} />{boutique.email}</p>
      <ContactButtons />
    </div>
  );
}
