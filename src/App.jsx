import './App.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
        <Footer />
      </main>
    </>
  )
}

export default App
