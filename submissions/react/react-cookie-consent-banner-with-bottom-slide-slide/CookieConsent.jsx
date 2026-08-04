import React, { useState } from 'react';
import './style.css';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="ease-slide-up cookie-banner">
      <p>We use cookies to improve your experience.</p>
      <button onClick={() => setIsVisible(false)} className="ease-hover-lift">Accept</button>
    </div>
  );
};

export default CookieConsentBanner;
