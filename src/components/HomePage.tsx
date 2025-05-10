import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const heartsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = heartsContainerRef.current;
    if (!container) return;

    const createFloatingHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.style.left = Math.random() * 100 + 'vw'; // Spread across viewport width
      heart.style.animationDuration = Math.random() * 5 + 8 + 's'; // Random duration between 8-13 seconds
      heart.style.setProperty('--random-x', (Math.random() - 0.5).toString()); // For horizontal drift
      heart.style.setProperty('--random-r', (Math.random() - 0.5).toString()); // For random rotation

      container.appendChild(heart);

      // Remove heart after animation finishes to prevent too many elements
      setTimeout(() => {
        heart.remove();
      }, 13000); // Should be greater than max animation duration
    };

    // Create a few hearts initially
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingHeart, Math.random() * 2000); // Stagger initial hearts
    }

    const intervalId = setInterval(createFloatingHeart, 1500); // Create a new heart every 1.5 seconds

    return () => {
      clearInterval(intervalId);
      // Clean up hearts if component unmounts
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="home-page-container">
      <div className="animated-gradient-background"></div>
      <div class="spot-background"></div>
      <div className="floating-hearts-container" ref={heartsContainerRef}></div>
      <div className="content-center">
        <h1 className="main-title">Happy Mother's Day</h1>
        <h2 className="sub-title">To the best mom in the world</h2>
        <Link to="/second-page" className="nav-button">
          A Special Message For  Mommy ❤️
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

