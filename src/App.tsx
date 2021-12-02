import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Nft from './components/Nft';
import Partners from './components/Partners';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Roadmap />
      <Nft />
      <Partners />
    </div>
  );
}

export default App;
