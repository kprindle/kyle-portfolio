import Section from '../components/layout/Section.jsx';
import ProjectCard from './projects/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Selected projects"
      intro="The code for these is private client and company work, so I can’t link to it publicly. I’m happy to walk through any of them in an interview."
    >
      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
