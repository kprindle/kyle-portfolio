import { profile } from '../../data/profile.js';
import styles from './ContactLinks.module.css';

export default function ContactLinks({ layout = 'stack' }) {
  return (
    <ul className={`${styles.list} ${styles[layout]}`}>
      <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
      <li>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn<span className={styles.hint}> (opens in a new tab)</span>
        </a>
      </li>
      {profile.resumeUrl && (
        <li><a href={profile.resumeUrl} download>Download resume (PDF)</a></li>
      )}
    </ul>
  );
}
