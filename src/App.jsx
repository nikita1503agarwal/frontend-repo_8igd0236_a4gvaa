import React from 'react'
import Hero from './components/Hero'
import { About, Services, Portfolio, Contact, Footer } from './components/Sections'

function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
