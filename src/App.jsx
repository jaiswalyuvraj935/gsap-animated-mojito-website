import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section2 from './components/Section2';
// Register plugins once outside the component
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='h-dvh bg-black'></div>

    </main>
  );
};  

export default App;