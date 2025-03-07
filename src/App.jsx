import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/NavBar/Hero/Hero'
import About from './Components/NavBar/About/About'
import MyWork from './Components/NavBar/MyWork/MyWork'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <MyWork/>
    </div>
  )
}

export default App