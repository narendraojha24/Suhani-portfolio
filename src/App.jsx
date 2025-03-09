import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/NavBar/Hero/Hero'
import About from './Components/NavBar/About/About'
import MyWork from './Components/NavBar/MyWork/MyWork'
import Contact from './Components/NavBar/Contact/Contact'
import Footer from './Components/NavBar/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App