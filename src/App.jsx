import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
