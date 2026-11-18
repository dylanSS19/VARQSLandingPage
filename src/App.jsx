import './App.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import AboutUs from './components/AboutUs'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutUs />
        <Services />
      </main>
    </>
  )
}

export default App
