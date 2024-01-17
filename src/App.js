import React from 'react';
import Header from './Components/Header';
import HowitWork from './Components/HowitWork';
import About from './Components/About';
import Agents from './Components/Agents';
import Properties from './Components/Properties';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <HowitWork />
      <About />
      <Agents />
      <Properties />
      <Contact />
    </div>
  );
}

export default App;
