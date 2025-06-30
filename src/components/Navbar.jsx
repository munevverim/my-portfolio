// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import profileImg from '../assets/profile.jpeg'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #805ad5;
  color: #fff;
`

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  a {
    color: #f3e8ff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
    &:hover { color: #e9d5ff; }
  }
`

const Profile = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default function Navbar() {
  return (
    <Nav>
      <Logo to="/">Münevver VERİM</Logo>
      <Menu>
        <MenuItem><Link to="/">Ana Sayfa</Link></MenuItem>
        <MenuItem><Link to="/projects">Projeler</Link></MenuItem>
        <MenuItem><Link to="/about">Hakkımda</Link></MenuItem>
        <MenuItem><Link to="/contact">İletişim</Link></MenuItem>
      </Menu>
      <Profile>
        <img src={profileImg} alt="Münevver VERİM" />
      </Profile>
    </Nav>
  )
}
