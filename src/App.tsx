import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import GalleryPage from './components/GalleryPage'; // Import the new GalleryPage component
import './index.css'; // Global styles, including Tailwind

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> {/* Add route for GalleryPage */}
      </Routes>
    </Router>
  );
}

export default App;
