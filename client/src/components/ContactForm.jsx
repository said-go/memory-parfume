import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className={styles.form} onSubmit={(event) => {
      event.preventDefault();
      // TODO: connect this form to the future backend or CRM endpoint.
      setSent(true);
      event.currentTarget.reset();
    }}>
      <label>Имя<input required name="name" placeholder="Ваше имя" /></label>
      <label>Телефон или мессенджер<input required name="contact" placeholder="+7 или @username" /></label>
      <label>Сообщение<textarea name="message" rows="4" placeholder="Расскажите, какой аромат ищете" /></label>
      <button type="submit">Отправить обращение</button>
      {sent && <p role="status">Спасибо, сообщение принято. Менеджер свяжется с вами в демонстрационном сценарии.</p>}
    </form>
  );
}
