import React, { useState } from 'react';
import './style.css';

const NewsletterSignupModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="ease-fade-in newsletter-modal">
      <h2>Subscribe to our Newsletter</h2>
      <button onClick={() => setIsOpen(false)} className="ease-hover-lift">Close</button>
    </div>
  );
};

export default NewsletterSignupModal;
