import { useEffect, useState } from 'react';
import { profile } from '../../data/profile.js';
import { navItems } from '../../data/navigation.js';
import ReadingToggle from '../ui/ReadingToggle.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import ContactLinks from '../ui/ContactLinks.jsx';
import Icon from '../ui/Icon.jsx';
import Monogram from '../ui/Monogram.jsx';
import styles from './SiteHeader.module.css';

const sections = navItems.filter((item) => item.id !== 'intro');

/** Sticky, frosted header. Full nav at 1024px and up; a menu panel below that. */
export default function SiteHeader({ activeId }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <a href="#intro" className={styles.brand}>
          <Monogram />
          <span>{profile.name}</span>
        </a>

        <nav aria-label="Sections" className={styles.nav}>
          <ul>
            {sections.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>
                  {item.shortLabel ?? item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.tools}>
          <ReadingToggle compact hideLabel />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} size={18} />
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="mobile-nav" className={styles.panel} hidden={!open}>
        <div className="wrap">
          <nav aria-label="Sections (menu)">
            <ul className={styles.panelNav}>
              {sections.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? 'location' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.panelTools}>
            <ReadingToggle compact />
            <ThemeToggle withLabel />
          </div>
          <div className={styles.panelContact}>
            <ContactLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
