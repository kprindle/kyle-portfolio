import { profile } from '../data/profile.js';
import ReadingToggle from '../components/ui/ReadingToggle.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className={styles.hero}>
      <p className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        {profile.availability}, based in {profile.location}
      </p>

      <h1 id="intro-heading" className={styles.headline}>{profile.headline}</h1>
      <p className={styles.intro}>{profile.intro}</p>

      <div className={styles.actions}>
        <a className={styles.primary} href={`mailto:${profile.email}`}>Email me</a>
        <a className={styles.secondary} href={profile.linkedin} target="_blank" rel="noreferrer">
          View LinkedIn
        </a>
        {profile.resumeUrl && (
          <a className={styles.secondary} href={profile.resumeUrl} download>Download resume</a>
        )}
      </div>

      <ul className={styles.proof}>
        {profile.proofPoints.map((point) => (
          <li key={point.label}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.reader}>
        <p className={styles.readerText}>
          Recruiter or engineer? Pick how much technical detail you want. It changes the experience and project
          write-ups below.
        </p>
        <ReadingToggle label="Show me" />
      </div>
    </section>
  );
}
