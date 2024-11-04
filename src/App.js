import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/projects';
import SEOExperience from './Components/SEOExperience/SeoExperience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <SEOExperience />
            <Contact />
            <Footer />
    </div>
  );
}

export default App;
