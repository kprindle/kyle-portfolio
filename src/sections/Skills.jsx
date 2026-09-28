import Section from '../components/layout/Section.jsx';
import TagList from '../components/ui/TagList.jsx';
import { skillGroups } from '../data/skills.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="What I work with, grouped by what it’s for.">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.name} className={styles.group}>
            <h3 className={styles.name}>{group.name}</h3>
            <p className={styles.description}>{group.description}</p>
            <TagList items={group.skills} label={`${group.name} skills`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
