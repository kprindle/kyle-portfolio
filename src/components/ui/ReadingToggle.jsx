import { useId } from 'react';
import { useReadingMode } from '../../context/ReadingModeContext.jsx';
import styles from './ReadingToggle.module.css';

const OPTIONS = [
  { value: 'plain', label: 'Plain English', short: 'Plain' },
  { value: 'technical', label: 'Technical detail', short: 'Technical' },
];

/** Plain / technical switch. `compact` uses short labels; `hideLabel` keeps the label for screen readers only. */
export default function ReadingToggle({ label = 'Detail level', compact = false, hideLabel = false }) {
  const { mode, setMode } = useReadingMode();
  const labelId = useId();

  return (
    <div className={`${styles.wrap} ${compact ? styles.compact : ''}`}>
      <span className={hideLabel ? 'sr-only' : styles.label} id={labelId}>
        {label}
      </span>
      <div className={styles.track} role="group" aria-labelledby={labelId}>
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={styles.option}
            aria-pressed={mode === option.value}
            onClick={() => setMode(option.value)}
          >
            {compact ? option.short : option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
