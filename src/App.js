import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from '/components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
