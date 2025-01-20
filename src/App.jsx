import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Project from './Components/Project'
import Contect from './Components/Contect'
import Footer from './Components/Footer'
import Experience from './Components/Experience'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />  
      <About />
      <Project />
      <Experience/>
      <Contect />
      <Footer />
    </main>
  )
}

export default App