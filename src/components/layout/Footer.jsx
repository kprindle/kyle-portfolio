import { profile } from '../../data/profile.js';
import ContactLinks from '../ui/ContactLinks.jsx';
import Monogram from '../ui/Monogram.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.identity}>
          <Monogram size={26} />
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.title}
          </p>
        </div>
        <ContactLinks layout="row" />
      </div>
    </footer>
  );
}
