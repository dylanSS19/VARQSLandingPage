import './App.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutUs />
        <Projects />
        <Services />
        <Contact />
      </main>
    </>
  )
}

export default App
