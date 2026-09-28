import { useEffect, useState } from 'react';
import { profile } from '../../data/profile.js';
import NavLinks from './NavLinks.jsx';
import ReadingToggle from '../ui/ReadingToggle.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import ContactLinks from '../ui/ContactLinks.jsx';
import styles from './MobileHeader.module.css';

export default function MobileHeader({ activeId }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#intro" className={styles.name}>{profile.name}</a>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <div id="mobile-nav" className={styles.panel} hidden={!open}>
        <nav aria-label="Sections">
          <NavLinks activeId={activeId} onNavigate={() => setOpen(false)} />
        </nav>
        <ReadingToggle compact />
        <ThemeToggle compact />
        <div className={styles.contact}>
          <ContactLinks />
        </div>
      </div>
    </header>
  );
}
