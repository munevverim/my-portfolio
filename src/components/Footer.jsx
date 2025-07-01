// src/components/Footer.jsx
import styled from 'styled-components'

const Foot = styled.footer`
  background: #111827;
  color: #ccc;
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.9rem;
`

const Socials = styled.div`
  margin-bottom: 0.75rem;
  a {
    margin: 0 0.5rem;
    color: #805ad5;
    font-size: 1.25rem;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: #9f7aea; }
  }
`

export default function Footer() {
  return (
    <Foot>
      <Socials>
        <a href="https://github.com/munevverim" aria-label="GitHub">🐱</a>
        <a href="https://www.linkedin.com/in/m%C3%BCnevver-verim-b43aa422a/" aria-label="LinkedIn">🔗</a>
        <a href="mailto:munevverim@gmail.com" aria-label="Email">✉️</a>
      </Socials>
      © {new Date().getFullYear()} Münevver Verim. Tüm hakları saklıdır.
    </Foot>
  )
}

