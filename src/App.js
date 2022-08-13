import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Resume from './components/Resume';

import './App.css';

function App() {

  return (
    <div className="App">
      <div>Hello World</div>
      <About />
      <Header />
      <Navigation />
      <Contact />
      <Portfolio />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;