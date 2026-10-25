import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App