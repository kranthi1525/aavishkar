import React from 'react';
import './App.css';
import Roadmap from './components/roadmap';
import Home from './components/home';
import About from './components/about';
import ParticleBackground from './components/particleBackground';

import Cards from './components/cards';
import Fourth from './components/Fourth';
import Footer from './components/footer';
import Sponsors from './components/sponsers';
import Marquee from './components/gallery';
import Guest from './components/cguests';
import FAQ from './components/faq';





function App() {
  

  return (
    <>
    <div id="A"><Home/></div>
    <div id="V"><About/></div>
    <div id="I"><Cards/></div>
    <div id="S"> 
      <Roadmap/></div>
    <div id="H"><Sponsors/></div>
    
    <div id="l">
    <h1>SEASON 1 HIGHLIGHTS</h1>
    <Guest/>
    <h2>Gallery</h2>
    
    <Marquee/>
    </div>
   
    
    
     
    
    
   
    
    
    <div id="K"> <Fourth/></div> 

<div id="f"><FAQ/></div>
   

<div id="foot">
<Footer/>
</div>
    
    </>
  );
}

export default App;
