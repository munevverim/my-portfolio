// src/components/ProjectCard.jsx
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{project.title}</h3>
      <p className={styles.card__desc}>{project.description}</p>
      <p className={styles.card__tech}>
        {project.techStack.join(' · ')}
      </p>
      {project.url && (
        <a
          href={project.url}
          className={styles.card__link}
          target="_blank"
          rel="noopener noreferrer"
        >
          İncele →
        </a>
      )}
    </div>
  );
}
