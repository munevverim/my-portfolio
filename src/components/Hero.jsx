// src/components/Hero.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import heroImg from '../assets/profile.jpeg'

// Animated gradient keyframes
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const Section = styled(motion.section)`
  position: relative;
  width: 100vw;
  left: 50%;
  /* Üstteki 2rem padding’i ve yanlardaki boşluğu iptal edelim */
  margin: -2rem -50vw 0 -50vw;
  overflow-x: hidden;

  /* Animated gradient background */
  background: linear-gradient(-45deg, #805ad5, #6b46c1, #000000, #4c1d95);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;

  color: #fff;
  padding: 8rem 2rem 6rem;

  @media (min-width: 768px) {
    padding: 10rem 4rem 8rem;
  }
`

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`

const TextBlock = styled(motion.div)`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  margin-bottom: 1rem;
  min-height: 3rem; /* Tip‑writer yer değişimi önlemek için */

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const SubTitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #ddd;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const Button = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  transition: transform 0.2s, background 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.primaryDark};
  }
`

const ImageBlock = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Circle = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: 0 6px 18px rgba(0,0,0,0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default function Hero() {
  const fullText = 'Merhaba, Ben Münevver VERİM'
  const [text, setText] = useState('')
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, ++index))
      if (index === fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Inner>
        <TextBlock
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Title>{text}</Title>
          <SubTitle>
            React ve Spring Boot & .NET ile dinamik uygulamalar geliştiriyorum; Flutter da uzmanlık alanım.
          </SubTitle>
          <Button href="/projects">Projelerime Göz At</Button>
        </TextBlock>

        <ImageBlock
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Circle>
            <img src={heroImg} alt="Münevver VERİM" />
          </Circle>
        </ImageBlock>
      </Inner>
    </Section>
  )
}
