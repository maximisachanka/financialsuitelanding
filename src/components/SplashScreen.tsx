import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import logo from '../assets/fb623f6b059b888cf4155f7c95166d688f80915a.png';

interface SplashScreenProps {
  isLoaded?: boolean;
}

export function SplashScreen({ isLoaded = false }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Start fade out animation
      setFadeOut(true);
    }
  }, [isLoaded]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-screen__content">
        {/* Logo with pulse animation */}
        <div className="splash-screen__logo-container">
          <img
            src={logo}
            alt="FinancialSuite Logo"
            className="splash-screen__logo"
          />
        </div>

        {/* Brand name */}
        <h1 className="splash-screen__brand">FinancialSuite</h1>

        {/* Loading spinner */}
        <div className="splash-screen__loader">
          <div className="splash-screen__spinner"></div>
        </div>

        {/* Loading text */}
        <p className="splash-screen__text">Loading...</p>
      </div>

      {/* Background gradient circles */}
      <div className="splash-screen__bg-circle splash-screen__bg-circle--1"></div>
      <div className="splash-screen__bg-circle splash-screen__bg-circle--2"></div>
    </div>
  );
}
