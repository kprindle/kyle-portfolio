import Section from '../components/layout/Section.jsx';
import { lookingFor } from '../data/lookingFor.js';
import styles from './LookingFor.module.css';

export default function LookingFor() {
  return (
    <Section id="looking-for" title="What I’m looking for" intro={lookingFor.summary}>
      <ul className={styles.roles}>
        {lookingFor.roles.map((role) => (
          <li key={role.title} className={styles.role}>
            <h3>{role.title}</h3>
            <p>{role.note}</p>
          </li>
        ))}
      </ul>

      <dl className={styles.details}>
        {lookingFor.details.map((item) => (
          <div key={item.label} className={styles.row}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
