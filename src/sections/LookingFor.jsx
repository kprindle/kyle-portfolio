import Section from '../components/layout/Section.jsx';
import Icon from '../components/ui/Icon.jsx';
import { lookingFor } from '../data/lookingFor.js';
import styles from './LookingFor.module.css';

export default function LookingFor() {
  return (
    <Section id="looking-for" tone="band" title="What I’m looking for" intro={lookingFor.summary}>
      <ul className={`${styles.roles} reveal-stagger`}>
        {lookingFor.roles.map((role, i) => (
          <li key={role.title} className={styles.role} style={{ '--i': i }}>
            <span className={styles.roleIcon}>
              <Icon name={role.icon} />
            </span>
            <h3>{role.title}</h3>
            <p>{role.note}</p>
          </li>
        ))}
      </ul>

      <dl className={`${styles.details} reveal-stagger`}>
        {lookingFor.details.map((item, i) => (
          <div key={item.label} className={styles.detail} style={{ '--i': i }}>
            <dt>
              <Icon name={item.icon} size={16} />
              {item.label}
            </dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
