import { useReadingMode } from '../../context/ReadingModeContext.jsx';
import styles from './ReadingToggle.module.css';

const OPTIONS = [
  { value: 'plain', label: 'Plain English' },
  { value: 'technical', label: 'Technical detail' },
];

export default function ReadingToggle({ label = 'Detail level', compact = false }) {
  const { mode, setMode } = useReadingMode();

  return (
    <div className={compact ? `${styles.wrap} ${styles.compact}` : styles.wrap}>
      <span className={styles.label} id={`toggle-label-${compact ? 'c' : 'f'}`}>{label}</span>
      <div className={styles.track} role="group" aria-labelledby={`toggle-label-${compact ? 'c' : 'f'}`}>
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={styles.option}
            aria-pressed={mode === option.value}
            onClick={() => setMode(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
