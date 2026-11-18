import './App.css'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutUs />
      </main>
    </>
  )
}

export default App
