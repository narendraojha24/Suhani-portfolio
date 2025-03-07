import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/NavBar/Hero/Hero'
import About from './Components/NavBar/About/About'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
    </div>
  )
}

export default App