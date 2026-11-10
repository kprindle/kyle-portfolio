import Section from '../components/layout/Section.jsx';
import TagList from '../components/ui/TagList.jsx';
import Icon from '../components/ui/Icon.jsx';
import { skillGroups } from '../data/skills.js';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="What I work with, grouped by what it’s for.">
      <div className={`${styles.grid} reveal-stagger`}>
        {skillGroups.map((group, i) => (
          <div key={group.name} className={`card lift ${styles.group}`} style={{ '--i': i % 3 }}>
            <div className={styles.head}>
              <span className="icon-tile">
                <Icon name={group.icon} />
              </span>
              <h3 className={styles.name}>{group.name}</h3>
            </div>
            <p className={styles.description}>{group.description}</p>
            <TagList items={group.skills} label={`${group.name} skills`} />
          </div>
        ))}
      </div>
    </Section>
  );
}
