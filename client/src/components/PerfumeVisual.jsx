import styles from './PerfumeVisual.module.css';

export default function PerfumeVisual({ palette, label, compact = false, imageSrc }) {
  return (
    <div className={`${styles.visual} ${compact ? styles.compact : ''}`} style={{
      '--tone-a': palette?.a,
      '--tone-b': palette?.b,
      '--tone-c': palette?.c
    }} role="img" aria-label={label}>
      {imageSrc ? (
        <img className={styles.photo} src={imageSrc} alt={label} loading={compact ? 'lazy' : 'eager'} />
      ) : (
        <>
          <span className={styles.glow} />
          <span className={styles.cap} />
          <span className={styles.neck} />
          <span className={styles.bottle}>
            <span />
          </span>
          <span className={styles.shadow} />
        </>
      )}
    </div>
  );
}
