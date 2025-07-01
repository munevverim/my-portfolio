// src/components/Layout.jsx
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
