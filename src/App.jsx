import React, {Suspense, useEffect, useState} from 'react'
import Loader from './components/Loader'
import Hero from './sections/Hero'
import About from './sections/About'
import Music from './sections/Music'
import Contact from './sections/Contact'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import Menu from './components/Menu'
import ScrollManager from './components/ScrollManager'
import Cursor from './components/Cursor'

function App() {

  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section])

  return (
    <Suspense fallback={null}>
      <div className='h-screen bg-gray-800'>
        <Canvas
          camera={{ position: [0, 10, 15], fov: 100 }}
        >
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} setSection={setSection} />
            <Scroll html>
              <Hero />
              <About />
              <Music />
              <Contact />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} setSection={setSection}/>
        <Cursor />
      </div>
    </Suspense>
  )
}

export default App
