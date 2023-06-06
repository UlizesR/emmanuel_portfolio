import { useState } from 'react'
import Scene from './components/scene/Scene'
import About from './components/About'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Music from './components/Music'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Scene />
      <Navbar/>
      <Hero />
      <About />
      <Tech />
      <Music />
      <Contact />
    </>
  )
}

export default App
