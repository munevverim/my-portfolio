import { motion } from 'framer-motion'
import styled from 'styled-components'
import heroImg from '../assets/profile.jpeg'

const Section = styled(motion.section)`
  background: #000;
  color: #fff;
  padding: 5rem 1rem;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width:768px){ flex-direction: row; }
`
const TextBlock = styled(motion.div)`
  flex:1;
  text-align: center;
  @media(min-width:768px){ text-align: left; }
`
const Title = styled.h1`
  font-size: 2.5rem;
  color: #805ad5;
  margin-bottom: 1rem;
`
const Button = styled.a`
  background: #805ad5;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  &:hover { background: #6b46c1; }
`
const ImageWrapper = styled(motion.div)`
  flex:1;
  margin-top: 2rem;
  @media(min-width:768px){ margin-top: 0; }
  display: flex;
  justify-content: center;
`
const CircleImage = styled.img`
  width: 16rem; height: 16rem;
  border-radius: 50%;
  border: 4px solid #805ad5;
  object-fit: cover;
`

export default function Hero() {
  return (
    <Section initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1 }}>
      <Container>
        <TextBlock initial={{ x:-100, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ delay:0.5, duration:0.8 }}>
          <Title>Merhaba, Ben Münevver VERİM</Title>
          <p>Flutter, React ve Node.js ile dinamik uygulamalar geliştiriyorum.</p>
          <Button href="/projects">Projelerime Göz At</Button>
        </TextBlock>
        <ImageWrapper initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ delay:1, duration:0.8 }}>
          <CircleImage src={heroImg} alt="Münevver VERİM" />
        </ImageWrapper>
      </Container>
    </Section>
  )
}
