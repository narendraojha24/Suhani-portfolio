import React from 'react'
import './About.css'
import theme_pattern from '../../../../src/assets/theme_pattern.svg'
import profile_img from '../../../../src/assets/profile_img.svg'
const About = () => {
  return (
    <div  id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-section">
               <div className="about-left">
                <img src={profile_img} alt=""/>
               </div>
               <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate full-stack developer skilled in React, Node.js, and MongoDB. I enjoy building scalable and user-friendly web applications, from dynamic frontends to robust backends.</p>
                    <p>I love solving problems, optimizing performance, and ensuring smooth user experiences. Whether it's creating interactive UIs, developing efficient APIs, or managing databases, I strive for clean and maintainable code.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Node.js</p> <hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Mongodb</p> <hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>C++</p> <hr style={{width:"50%"}} /></div>
                </div>
               </div>
            </div>
        </div>
        
    </div>
  )
}

export default About;