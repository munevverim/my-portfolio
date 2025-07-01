// src/components/Skills.jsx
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts'

const data = [
  { subject: 'React', A: 95 },
  { subject: 'Next.js', A: 90 },
  { subject: 'Spring Boot', A: 85 },
  { subject: '.NET', A: 80 },
  { subject: 'Flutter', A: 85 },
  { subject: 'DevOps', A: 75 },
  { subject: 'Database', A: 80 }
]

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;
  padding: 2rem;
  max-width: 800px;
  margin: 4rem auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
`

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
`

export default function Skills() {
  return (
    <Card
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Title>Yeteneklerim</Title>
      <div style={{ width: '100%', height: 450 }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
            <PolarGrid stroke="#ddd" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: theme => theme.text }}
              style={{ fontSize: '0.9rem' }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tickCount={6} 
              axisLine={false} 
              tick={{ fill: '#aaa', fontSize: '0.75rem' }}
            />
            <Radar
              name="Seviye"
              dataKey="A"
              stroke="#805ad5"
              fill="url(#colorSkill)"
              fillOpacity={0.7}
              isAnimationActive
            />
            <defs>
              <linearGradient id="colorSkill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#805ad5" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#805ad5" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Legend 
              verticalAlign="top" 
              wrapperStyle={{ color: '#555', fontSize: '1rem' }} 
            />
            <Tooltip 
              formatter={(value) => [`${value}%`]} 
              itemStyle={{ color: '#805ad5' }} 
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
