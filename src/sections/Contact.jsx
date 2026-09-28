import Section from '../components/layout/Section.jsx';
import { profile } from '../data/profile.js';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Section id="contact" title="Let’s talk">
      <p className={styles.lede}>
        If you’re hiring for an AI or full-stack engineering role, I’d like to hear about it. Email is
        the fastest way to reach me.
      </p>
      <a className={styles.email} href={`mailto:${profile.email}`}>{profile.email}</a>
      <ul className={styles.meta}>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinLabel}</a>
        </li>
        <li>{profile.location}</li>
        {profile.resumeUrl && (
          <li><a href={profile.resumeUrl} download>Download resume (PDF)</a></li>
        )}
      </ul>
    </Section>
  );
}
