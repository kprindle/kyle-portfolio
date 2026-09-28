import styles from './Section.module.css';

export default function Section({ id, title, intro, children }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <header className={styles.header}>
        <h2 id={headingId} className={styles.title}>{title}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </header>
      {children}
    </section>
  );
}
