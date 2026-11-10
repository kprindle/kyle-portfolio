import Section from '../components/layout/Section.jsx';
import Icon from '../components/ui/Icon.jsx';
import ExperienceItem from './experience/ExperienceItem.jsx';
import { experience, earlierExperience, education } from '../data/experience.js';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Section
      id="experience"
      tone="band"
      title="Experience"
      intro="Most recent first. Use the detail toggle to switch between a plain summary and the technical version."
    >
      <ol className={styles.list}>
        {experience.map((job) => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </ol>

      <div className={`${styles.earlier} reveal-stagger`}>
        <div className={`card ${styles.earlierCard}`} style={{ '--i': 0 }}>
          <span className="icon-tile">
            <Icon name="briefcase" />
          </span>
          <div>
            <h3 className="eyebrow">Before software</h3>
            <p className={styles.earlierMeta}>
              <strong>{earlierExperience.title}</strong>, {earlierExperience.company}, {earlierExperience.location}
            </p>
            <p className={styles.dates}>{earlierExperience.dates}</p>
            <p className={styles.earlierText}>{earlierExperience.summary}</p>
          </div>
        </div>

        <div className={`card ${styles.earlierCard}`} style={{ '--i': 1 }}>
          <span className="icon-tile">
            <Icon name="graduation" />
          </span>
          <div>
            <h3 className="eyebrow">Education</h3>
            <p className={styles.earlierMeta}>
              <strong>{education.degree}</strong>, {education.school}
            </p>
            <p className={styles.dates}>{education.dates}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
