import React from 'react';
import './Hero.css';  // ✅ Corrected CSS import

const Hero = () => {
  return (
    <div className="hero">
//<img src="" alt="Profile" />
      <h1>Hi, I'm Suhani Pal</h1>
      <h2>🚀 Tech Stack</h2>
      <div className="tech-stack">
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="React"
        />
        <img
          src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
          alt="Node.js"
        />
        <img
          src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
          alt="MongoDB"
        />
        <img
          src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
          alt="Postman"
        />
        <img
          src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
          alt="C++"
        />
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
