import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../css/home.css';
import {Link, Outlet } from 'react-router-dom';
import IntroductionComponent from './IntroductionComponent';
import VariablesComponent from './VariablesComponent';

function HomeComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible , setIsVisible] = useState(false);
  const [opacity,setOpacity] = useState(1);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleList =() =>{
    setIsVisible(!isVisible);
  }

    const handleVisibility = (visible, duration = 300) => {
        if (visible) {
          setIsVisible(true);
          setOpacity(1); // Fully visible
        } else {
          // Gradually reduce opacity
          const fadeOutInterval = 3000; // Time between opacity changes
          const fadeOutSteps = duration / fadeOutInterval; // Total steps for fading out
          let currentStep = 0;
    
          const timer = setInterval(() => {
            currentStep += 1;
            const newOpacity = 1 - currentStep / fadeOutSteps; // Calculate new opacity
            setOpacity(newOpacity);
    
            // Clear interval when fade out is complete
            if (currentStep >= fadeOutSteps) {
              clearInterval(timer);
              setIsVisible(false); // Finally set isVisible to false
            }
          }, fadeOutInterval);
        }
      };
  

  return (
    <div>
      {/* Dropdown button for mobile view with icon */}
      <div className="dropdown-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      <div className="tutorial-container">
        {/* Tutorial TOC (Table of Contents) */}
        <div className={`tutorial-toc ${menuOpen ? 'mobile-active' : ''}`}>
          <h1>Tutorial Menu</h1>
          <ul>
            <li id='concept4' onClick={toggleList} 
                    onMouseEnter={(()=>handleVisibility(true))} 
                    onMouseLeave={()=>handleVisibility(false)} 
                    style={{cursor:'pointer'}}> OOP 4 Concepts
                <ul className={`sublist ${isVisible ? 'visible' : 'hidden'}`}
                    style={{ opacity: opacity, transition: 'opacity 0.3s ease' }}>
                        <li><a href="#encapsulation">Encapsulation</a></li>
                        <li><a href="#inheritance">Inheritance</a></li>
                        <li><a href="#polymorphism">Polymorphism</a></li>
                        <li><a href="#abstraction">Abstraction</a></li>
                </ul>
            </li>
            <li><Link to='variables'>Variables</Link></li>
            <li><a href="#section3">Blocks and Constructors</a></li>
            <li><a href="#section4">Class vs Object</a></li>
            <li><a href="section5">This vs Super</a></li>
            <li><a href="section6">Garbage Collector</a></li>
            <li><a href="section7">Access Modifiers</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="tutorial-content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
