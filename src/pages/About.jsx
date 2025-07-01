// src/pages/About.jsx
import React from 'react'
import ExperienceTimeline from '../components/ExperienceTimeline'

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Hakkımda</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-700 dark:text-gray-300 mb-12 text-center">
          Merhaba, ben Münevver VERİM. Full‑stack developer olarak React, Next.js, Spring Boot ve .NET ekosisteminde 3+ yıllık tecrübem var.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Deneyimler</h2>
        <ExperienceTimeline />
      </div>
    </>
  )
}
