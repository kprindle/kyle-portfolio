import { profile } from '../data/profile.js';
import Icon from '../components/ui/Icon.jsx';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <div className="wrap">
        <div className={`${styles.panel} reveal`}>
          <div className={styles.backdrop} aria-hidden="true" />
          <h2 id="contact-heading" className={styles.title}>
            Let’s talk
          </h2>
          <p className={styles.lede}>
            If you’re hiring for a full-stack engineering role, I’d like to hear about it. Email is the fastest way to
            reach me.
          </p>

          <div className={styles.actions}>
            <a className="button" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={18} /> {profile.email}
            </a>
            <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel} <Icon name="external" size={16} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {profile.resumeUrl && (
              <a className="button secondary" href={profile.resumeUrl} download>
                <Icon name="download" size={16} /> Download resume (PDF)
              </a>
            )}
          </div>

          <p className={styles.location}>
            <Icon name="mapPin" size={16} /> {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
