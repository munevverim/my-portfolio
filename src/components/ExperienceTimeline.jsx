// src/components/ExperienceTimeline.jsx
import React from 'react'
import ExperienceCard from './ExperienceCard'
import experience from '../data/experience.json'

export default function ExperienceTimeline() {
  return (
    <div className="relative pl-6 before:absolute before:top-0 before:left-3 before:h-full before:border-l-2 before:border-primary dark:before:border-primary">
      {experience.map(exp => (
        <ExperienceCard key={exp.id} exp={exp} />
      ))}
    </div>
  )
}
