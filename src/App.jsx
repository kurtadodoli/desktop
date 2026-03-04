import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Links from './components/Links'
import Work from './components/Work'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app-container">
      {currentPage === 'home' && <Hero onNavigate={setCurrentPage} />}
      {currentPage === 'about' && <About onBack={() => setCurrentPage('home')} />}
      {currentPage === 'links' && <Links onBack={() => setCurrentPage('home')} />}
      {currentPage === 'work' && <Work onBack={() => setCurrentPage('home')} />}
      {currentPage === 'faq' && <FAQ onBack={() => setCurrentPage('home')} />}
      {currentPage === 'contact' && <Contact onBack={() => setCurrentPage('home')} />}
    </div>
  )
}

export default App
