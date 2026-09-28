import { useReadingMode } from '../../context/ReadingModeContext.jsx';
import styles from './ExperienceItem.module.css';

export default function ExperienceItem({ job }) {
  const { isTechnical } = useReadingMode();

  return (
    <li className={styles.item}>
      <div className={styles.head}>
        <h3 className={styles.company}>{job.company}</h3>
        <p className={styles.meta}>{job.engagement}, {job.location}</p>
      </div>

      <ol className={styles.roles}>
        {job.roles.map((role) => (
          <li key={role.title} className={styles.role}>
            <span className={styles.roleTitle}>{role.title}</span>
            <span className={styles.roleDates}>{role.dates}</span>
          </li>
        ))}
      </ol>

      <p className={styles.summary}>{job.summary}</p>

      <ul className={styles.highlights}>
        {job.highlights.map((highlight) => (
          <li key={highlight.plain}>{isTechnical ? highlight.technical : highlight.plain}</li>
        ))}
      </ul>
    </li>
  );
}
