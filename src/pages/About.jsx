// src/pages/About.jsx
import React from 'react';
import experience from '../data/experience.json';

export default function About() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">Hakkımda</h1>
     
<p className="text-gray-700 mb-6 text-center">
  Merhaba, ben Münevver VERİM. Full‑stack developer olarak React, Next.js, Spring Boot ve .NET ekosisteminde 3+ yıllık tecrübem var.
</p>

  
      <h2 className="text-2xl font-semibold mb-4">Deneyimler</h2>
      <ul className="space-y-4">
        {experience.map(exp => (
          <li key={exp.id} className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">
              {exp.company} — {exp.role}
            </h3>
            <p className="text-sm text-gray-500">
              {exp.startDate} — {exp.endDate}
            </p>
            <p className="text-gray-700 mt-1">{exp.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
