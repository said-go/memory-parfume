import styles from './SectionTitle.module.css';

export default function SectionTitle({ kicker, title, text }) {
  return (
    <div className={styles.titleBlock}>
      {kicker && <span>{kicker}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
