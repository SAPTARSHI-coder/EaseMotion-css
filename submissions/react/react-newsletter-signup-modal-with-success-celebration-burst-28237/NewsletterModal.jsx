import React, { useState, useEffect } from 'react';

/**
 * Newsletter Signup Modal with Success Celebration Burst
 * 
 * @param {Boolean} isOpen - Whether the modal is currently visible
 * @param {Function} onClose - Callback to close the modal
 */
const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  // Reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setStatus('idle');
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      
      // Auto-close after success celebration
      setTimeout(() => {
        onClose();
      }, 2500);
    }, 1200);
  };

  // If not open and not animating out (handled by simple CSS for now), return null.
  // We use a CSS class to handle the visibility so the exit animation can play.
  return (
    <div className={`ease-modal-overlay ${isOpen ? 'is-open' : ''}`}>
      <div className="ease-modal-backdrop" onClick={status !== 'success' ? onClose : undefined}></div>
      
      <div className={`ease-modal-container ${isOpen ? 'is-open' : ''}`}>
        
        {/* Close button (hidden on success) */}
        {status !== 'success' && (
          <button className="ease-modal-close" onClick={onClose} aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}

        <div className={`ease-modal-content-wrapper ${status === 'success' ? 'is-success' : ''}`}>
          
          {/* Default Form State */}
          <div className="ease-modal-form-view">
            <div className="ease-modal-icon-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            
            <h2 className="ease-modal-title">Join our Newsletter</h2>
            <p className="ease-modal-desc">Get the latest UI patterns and animation tips delivered straight to your inbox.</p>
            
            <form className="ease-modal-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="ease-modal-input" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status !== 'idle'}
                required
              />
              <button 
                type="submit" 
                className={`ease-modal-submit ${status === 'submitting' ? 'is-loading' : ''}`}
                disabled={status !== 'idle'}
              >
                <span className="ease-submit-text">Subscribe</span>
                <span className="ease-submit-loader"></span>
              </button>
            </form>
          </div>

          {/* Success State */}
          <div className="ease-modal-success-view">
            <div className="ease-modal-celebration-burst">
              {/* Confetti particles */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`ease-confetti-particle p-${i}`}></div>
              ))}
              
              <div className="ease-modal-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            
            <h2 className="ease-modal-title">You're In!</h2>
            <p className="ease-modal-desc">Thanks for subscribing. Keep an eye on your inbox.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
