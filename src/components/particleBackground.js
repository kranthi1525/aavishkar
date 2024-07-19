import React, { useEffect } from 'react';
import './bg.css';

const ParticleBackground = () => {
  const icons = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>', // Plant
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', // Leaf
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 12h-6"/><path d="M12 16V8"/></svg>', // Circuit
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>', // Microchip
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>', // Tractor
  ];

  useEffect(() => {
    const particleContainer = document.querySelector('.particles');

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomly select an icon
      const icon = icons[Math.floor(Math.random() * icons.length)];
      particle.innerHTML = icon;
      
      particle.style.bottom = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.5}`;
      
      // Add subtle rotation
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      particleContainer.appendChild(particle);
    }

    // Clean up
    return () => {
      particleContainer.innerHTML = '';
    };
  }, []);

  return (
    <div className="background">
      <div className="particles"></div>
    </div>
  );
};

export default ParticleBackground;