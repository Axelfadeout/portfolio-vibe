import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

import ParticlesBackground from './components/ParticlesBackground';

import Timeline from './components/Timeline';

import Services from './components/Services';

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
