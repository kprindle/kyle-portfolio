import { useTheme } from '../../context/ThemeContext.jsx';
import styles from './ThemeToggle.module.css';

const OPTIONS = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

export default function ThemeToggle({ label = 'Theme', compact = false }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={compact ? `${styles.wrap} ${styles.compact}` : styles.wrap}>
      <span className={styles.label} id={`theme-toggle-label-${compact ? 'c' : 'f'}`}>{label}</span>
      <div className={styles.track} role="group" aria-labelledby={`theme-toggle-label-${compact ? 'c' : 'f'}`}>
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={styles.option}
            aria-pressed={theme === option.value}
            onClick={() => setTheme(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
