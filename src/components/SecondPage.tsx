import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SecondPage.css';


const shortSweetMessages = [
  { id: 1, text: "Your love brightens my days." },
  { id: 2, text: "You are my world, Mom!" },
  { id: 3, text: "Your strength inspires me." },
  { id: 4, text: "Endless patience & love." },
  { id: 5, text: "My hero, my guide, my Mom." },
  { id: 6, text: "Thank you for everything." },
  { id: 7, text: "Home is wherever you are." },
  { id: 8, text: "You make life beautiful." },
  { id: 9, text: "Forever grateful for you." },
  { id: 10, text: "A mother's love is magic." },
  { id: 11, text: "You're my heart's first home." },
  { id: 12, text: "You lift me higher, Mom." },
  { id: 13, text: "The queen of my world." },
  { id: 14, text: "Your love is my strength." },
  { id: 15, text: "Always my safe place." },
  { id: 16, text: "You're my greatest blessing." },

];

const SecondPage: React.FC = () => {
  const heartsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = heartsContainerRef.current;
    if (!container) return;

    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 5 + 8 + 's'; // 8-13 seconds
      heart.style.setProperty('--random-x-float', (Math.random() - 0.5).toString());
      heart.style.setProperty('--random-r-float', (Math.random() - 0.5).toString());
      container.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 13000); // Remove after animation
    };

    const intervalId = setInterval(createHeart, 700); // Slower heart creation

    // Clear audio element if it exists from previous version
    const existingAudio = document.querySelector('audio');
    if (existingAudio) {
      existingAudio.remove();
    }

    return () => {
      clearInterval(intervalId);
      if (container) {
        container.innerHTML = ''; // Clear hearts on unmount
      }
    };
  }, []);

  return (
    <div className="second-page-container">
      <div className="hearts-container" ref={heartsContainerRef}></div>
      <div className="second-page-content-wrapper">
        <h2 className="second-page-title">A Few Words From My Heart...</h2>
        <div className="sweet-messages-grid">
          {shortSweetMessages.map((message, index) => (
            <div key={message.id} className="sweet-message-card" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <Link to="/gallery" className="gallery-link-button">
          View Our Special Memories 📸
        </Link>
      </div>
      <div className="gallery-audio-player">
        <audio src="/assets/music/mothers_day_song.mp3" controls autoPlay loop>
        </audio>
      </div>
    </div>
  );
};

export default SecondPage;

