// src/components/ProjectCard.jsx
import React from 'react'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>{project.title}</h3>
      <p className={styles.card__desc}>{project.description}</p>
      <div className={styles.card__tech}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.card__tag}>
            {tech}
          </span>
        ))}
      </div>
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
  )
}
