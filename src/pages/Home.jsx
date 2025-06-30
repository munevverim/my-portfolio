// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import Skills from '../components/Skills'      
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import projects from '../data/projects.json'

export default function Home() {
  const featured = projects.slice(0, 3)
  return (
    <>
      <Hero />
     <Skills />                               
      <h2 className="text-2xl font-semibold mb-4 mt-12 text-center">
        Öne Çıkan Projeler
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featured.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div className="text-center mb-12">
        <Link
          to="/projects"
          className="inline-block text-primary hover:underline font-medium"
        >
          Tüm Projelere Git →
        </Link>
      </div>
    </>
  )
}
