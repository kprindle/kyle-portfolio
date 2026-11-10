import { useId } from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import Icon from './Icon.jsx';
import styles from './ThemeToggle.module.css';

const OPTIONS = [
  { value: 'system', label: 'System', icon: 'monitor' },
  { value: 'light', label: 'Light', icon: 'sun' },
  { value: 'dark', label: 'Dark', icon: 'moon' },
];

/** System / light / dark, as icon buttons. `withLabel` shows the "Theme" label above. */
export default function ThemeToggle({ withLabel = false }) {
  const { theme, setTheme } = useTheme();
  const labelId = useId();

  return (
    <div className={styles.wrap}>
      <span className={withLabel ? styles.label : 'sr-only'} id={labelId}>
        Theme
      </span>
      <div className={styles.track} role="group" aria-labelledby={labelId}>
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={styles.option}
            aria-pressed={theme === option.value}
            aria-label={option.label}
            title={option.label}
            onClick={() => setTheme(option.value)}
          >
            <Icon name={option.icon} size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}
