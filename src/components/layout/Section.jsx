import styles from './Section.module.css';

/**
 * A page section. `tone` sets the background: 'plain' (page), 'tint' (a light band) or 'band' (the dark navy band).
 */
export default function Section({ id, title, intro, tone = 'plain', children }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${styles[tone]}`}>
      <div className="wrap">
        <header className={`${styles.header} reveal`}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
