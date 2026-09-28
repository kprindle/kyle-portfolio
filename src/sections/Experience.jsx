import Section from '../components/layout/Section.jsx';
import ExperienceItem from './experience/ExperienceItem.jsx';
import { experience, earlierExperience, education } from '../data/experience.js';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Most recent first. Use the detail toggle to switch between a plain summary and the technical version."
    >
      <ol className={styles.timeline}>
        {experience.map((job) => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </ol>

      <div className={styles.earlier}>
        <div className={styles.earlierBlock}>
          <h3 className={styles.subhead}>Before software</h3>
          <p className={styles.earlierMeta}>
            <strong>{earlierExperience.title}</strong>, {earlierExperience.company}, {earlierExperience.location}
            <span className={styles.dates}>{earlierExperience.dates}</span>
          </p>
          <p className={styles.earlierText}>{earlierExperience.summary}</p>
        </div>

        <div className={styles.earlierBlock}>
          <h3 className={styles.subhead}>Education</h3>
          <p className={styles.earlierMeta}>
            <strong>{education.degree}</strong>, {education.school}
            <span className={styles.dates}>{education.dates}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
