import { profile } from '../data/profile.js';
import ReadingToggle from '../components/ui/ReadingToggle.jsx';
import Icon from '../components/ui/Icon.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={`wrap ${styles.grid}`}>
        <div className={`${styles.copy} load-in`}>
          <p className={styles.status} style={{ '--i': 0 }}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability} · {profile.location}
          </p>

          <h1 id="intro-heading" className={styles.headline} style={{ '--i': 1 }}>
            {profile.headline}
          </h1>
          <p className={styles.intro} style={{ '--i': 2 }}>
            {profile.intro}
          </p>

          <div className={styles.actions} style={{ '--i': 3 }}>
            <a className="button" href={`mailto:${profile.email}`}>
              Email me <Icon name="arrowRight" size={18} className="arrow" />
            </a>
            <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Icon name="external" size={16} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {profile.resumeUrl && (
              <a className="button secondary" href={profile.resumeUrl} download>
                <Icon name="download" size={16} /> Resume
              </a>
            )}
          </div>
        </div>

        <ul className={`${styles.stats} load-in`} aria-label="Highlights">
          {profile.proofPoints.map((point, i) => (
            <li key={point.label} className={`card ${styles.stat}`} style={{ '--i': i + 3 }}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap">
        <div className={`card ${styles.reader} reveal`}>
          <div>
            <p className={styles.readerTitle}>Recruiter or engineer?</p>
            <p className={styles.readerText}>
              Pick how much technical detail you want. It changes the experience and project write-ups below.
            </p>
          </div>
          <ReadingToggle label="Show me" />
        </div>
      </div>
    </section>
  );
}
