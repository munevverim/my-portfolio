// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

export default function App({ toggleTheme, currentTheme }) {
  return (
    <BrowserRouter>
      <Layout toggleTheme={toggleTheme} currentTheme={currentTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
