// src/components/ExperienceCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function ExperienceCard({ exp }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8"
    >
      {/* Timeline dot */}
      <div className="absolute -left-4 top-6 w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-gray-800" />
      {/* Content */}
      <h3 className="text-xl font-semibold mb-1 dark:text-white">{exp.company}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.role}</p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
        {exp.startDate} — {exp.endDate}
      </p>
      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
    </motion.div>
  )
}
