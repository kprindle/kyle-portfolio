import { navItems } from '../../data/navigation.js';
import styles from './NavLinks.module.css';

export default function NavLinks({ activeId, onNavigate }) {
  return (
    <ul className={styles.list}>
      {navItems.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={styles.link}
            aria-current={activeId === item.id ? 'location' : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
