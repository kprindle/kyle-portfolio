import { profile } from '../../data/profile.js';
import NavLinks from './NavLinks.jsx';
import ReadingToggle from '../ui/ReadingToggle.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import ContactLinks from '../ui/ContactLinks.jsx';
import styles from './Sidebar.module.css';

export default function Sidebar({ activeId }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <a href="#intro" className={styles.name}>{profile.name}</a>
          <p className={styles.title}>{profile.title}</p>
        </div>
        <nav aria-label="Sections" className={styles.nav}>
          <NavLinks activeId={activeId} />
        </nav>
        <ReadingToggle compact />
        <ThemeToggle compact />
        <div className={styles.contact}>
          <ContactLinks />
        </div>
      </div>
    </aside>
  );
}
