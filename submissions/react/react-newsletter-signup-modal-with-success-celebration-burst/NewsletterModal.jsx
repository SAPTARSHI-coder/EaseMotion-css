import React, { useState, useEffect } from 'react';
import './style.css';

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [burstParticles, setBurstParticles] = useState([]);

  // Generate particle coordinate maps for the success celebration burst
  const triggerCelebrationBurst = () => {
    const particleCount = 36;
    const items = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i * 360) / particleCount;
      const distance = 80 + Math.random() * 60; // Randomize blast radius distance
      const delay = Math.random() * 150; // Staggered explosion offsets
      const hue = Math.floor(Math.random() * 360); // Full spectrum colors
      
      items.push({
        id: i,
        style: {
          '--ease-angle': `${angle}deg`,
          '--ease-distance': `${distance}px`,
          '--ease-delay': `${delay}ms`,
          '--ease-color': `hsla(${hue}, 95%, 60%, 1)`,
        }
      });
    }
    setBurstParticles(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Advance lifecycle states and kick off animation sequences
    setIsSubscribed(true);
    triggerCelebrationBurst();
  };

  const handleResetModal = () => {
    setIsSubscribed(false);
    setEmail('');
    setBurstParticles([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="ease-modal-overlay" onClick={handleResetModal}>
      <div 
        className={`ease-modal-content ${isSubscribed ? 'ease-modal-success-state' : 'ease-modal-zoom-in'}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button Trigger Control */}
        <button 
          className="ease-modal-close-btn" 
          onClick={handleResetModal}
          aria-label="Close modal subscription form"
        >
          ✕
        </button>

        {!isSubscribed ? (
          /* View State 1: Active Submission Channel Form */
          <div className="form-view-container">
            <div className="modal-icon-header">📩</div>
            <h2 id="modal-headline" className="modal-title">Join Our Developer Newsletter</h2>
            <p className="modal-description">
              Get modular animation code fragments, UI optimization techniques, and framework release notes directly in your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="modal-form-element">
              <input
                type="email"
                className="ease-modal-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email subscription input field"
              />
              <button type="submit" className="ease-modal-submit-btn">
                Subscribe Now
              </button>
            </form>
          </div>
        ) : (
          /* View State 2: Success State Celebration Burst Container */
          <div className="success-view-container ease-success-pop">
            {/* Embedded Celebration Explosive Particles */}
            <div className="celebration-burst-emitter" aria-hidden="true">
              {burstParticles.map((particle) => (
                <span 
                  key={particle.id} 
                  className="celebration-particle" 
                  style={particle.style}
                />
              ))}
            </div>

            <div className="success-icon-badge">🎉</div>
            <h2 id="modal-headline" className="modal-title">You're on the list!</h2>
            <p className="modal-description">
              Thank you for subscribing. We've sent a verification link to <strong className="user-email-tag">{email}</strong>. See you in the next edition!
            </p>
            <button className="ease-modal-done-btn" onClick={handleResetModal}>
              Awesome, thanks!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
