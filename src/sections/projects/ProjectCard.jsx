import { useReadingMode } from '../../context/ReadingModeContext.jsx';
import TagList from '../../components/ui/TagList.jsx';
import styles from './ProjectCard.module.css';

function PlainView({ plain }) {
  return (
    <dl className={styles.story}>
      <div>
        <dt>The problem</dt>
        <dd>{plain.problem}</dd>
      </div>
      <div>
        <dt>What I built</dt>
        <dd>{plain.solution}</dd>
      </div>
      <div className={styles.result}>
        <dt>The result</dt>
        <dd>{plain.result}</dd>
      </div>
    </dl>
  );
}

function TechnicalView({ technical, name }) {
  return (
    <div className={styles.tech}>
      <ul className={styles.points}>
        {technical.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
      <TagList items={technical.stack} label={`${name} tech stack`} />
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { isTechnical } = useReadingMode();

  return (
    <article className={styles.card} aria-labelledby={`${project.id}-title`}>
      <header className={styles.header}>
        <h3 id={`${project.id}-title`} className={styles.name}>{project.name}</h3>
        <p className={styles.context}>{project.context}</p>
      </header>
      {isTechnical
        ? <TechnicalView technical={project.technical} name={project.name} />
        : <PlainView plain={project.plain} />}
    </article>
  );
}
