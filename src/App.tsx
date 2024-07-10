import React from 'react';
import SectionOne from './components/Section1';
import SectionTwo from './components/Section2';
import SectionThree from './components/Section3';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="root">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
