import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from '../src/components/About'
import Product from '../src/components/Product'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import WhatsApp from '../src/components/WhatsApp'

function App() {
  return (
    <>
    <div>
    <NavBar/>
    <Hero />
    <About/>
    <Product/>
    <Contact/>
    <Footer/>
    <WhatsApp/>
    </div>
    </>
  )
}

export default App
