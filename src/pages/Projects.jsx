// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

export default function Projects() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Projelerim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
