import styles from './PerfumeVisual.module.css';

export default function PerfumeVisual({ palette, label, compact = false }) {
  return (
    <div className={`${styles.visual} ${compact ? styles.compact : ''}`} style={{
      '--tone-a': palette?.a,
      '--tone-b': palette?.b,
      '--tone-c': palette?.c
    }} role="img" aria-label={label}>
      <span className={styles.glow} />
      <span className={styles.cap} />
      <span className={styles.neck} />
      <span className={styles.bottle}>
        <span />
      </span>
      <span className={styles.shadow} />
    </div>
  );
}
