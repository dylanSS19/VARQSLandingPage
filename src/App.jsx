import './App.css'
import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IntroScreen from './Animation/IntroScreen'

function App() {

  const [showIntro, setShowIntro] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const handleIntroFinish = useCallback(() => setShowIntro(false), [])

  return (
    <>
      {showIntro && <IntroScreen onFinish={handleIntroFinish} />}
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutUs />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
