import React, { useEffect, useState } from 'react';

/**
 * TerminalModal Component
 * 
 * A React Modal component utilizing a smooth Shimmer Pulse interaction 
 * transition, designed specifically for Retro Terminal Layouts.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility of the modal.
 * @param {function} props.onClose - Callback function to close the modal.
 * @param {React.ReactNode} props.children - The content to display inside the modal.
 * @param {string} [props.title] - Optional title for the terminal window.
 */
const TerminalModal = ({ isOpen, onClose, children, title = 'TERMINAL_OVERRIDE.EXE' }) => {
  const [render, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setRender(false);
    }
  };

  if (!render) return null;

  return (
    <>
      <style>{`
        /* Retro Terminal Variables */
        :root {
          --ease-term-bg: #050505;
          --ease-term-neon: #00ff41;
          --ease-term-neon-dim: rgba(0, 255, 65, 0.2);
          --ease-term-font: 'Courier New', Courier, monospace;
        }

        /* Modal Overlay */
        .ease-term-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          opacity: 0;
          animation: easeTermFadeIn 0.3s forwards;
        }

        .ease-term-overlay.is-closing {
          animation: easeTermFadeOut 0.3s forwards;
        }

        /* Modal Box */
        .ease-term-modal {
          background: var(--ease-term-bg);
          border: 2px solid var(--ease-term-neon);
          width: 90%;
          max-width: 600px;
          min-height: 200px;
          font-family: var(--ease-term-font);
          color: var(--ease-term-neon);
          text-shadow: 0 0 5px var(--ease-term-neon);
          position: relative;
          
          /* The Shimmer Pulse effect */
          animation: easeTermShimmerPulse 2s infinite alternate, easeTermGlitchIn 0.4s ease-out forwards;
        }

        .ease-term-overlay.is-closing .ease-term-modal {
          animation: easeTermGlitchOut 0.3s ease-in forwards;
        }

        /* Terminal Header */
        .ease-term-header {
          background: var(--ease-term-neon);
          color: var(--ease-term-bg);
          padding: 4px 10px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-shadow: none;
        }

        .ease-term-close {
          background: transparent;
          border: none;
          color: var(--ease-term-bg);
          font-family: var(--ease-term-font);
          font-weight: bold;
          cursor: pointer;
          font-size: 1.2rem;
          line-height: 1;
        }

        .ease-term-close:hover {
          color: #ffffff;
        }

        /* Terminal Content */
        .ease-term-content {
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .ease-term-content::before {
          content: '>';
          margin-right: 10px;
          animation: easeTermBlink 1s step-end infinite;
        }

        /* Scanline Overlay */
        .ease-term-scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
          pointer-events: none;
        }

        /* Keyframes */
        @keyframes easeTermShimmerPulse {
          0% {
            box-shadow: 0 0 5px var(--ease-term-neon), inset 0 0 10px var(--ease-term-neon-dim);
          }
          100% {
            box-shadow: 0 0 20px var(--ease-term-neon), inset 0 0 30px var(--ease-term-neon-dim);
          }
        }

        @keyframes easeTermBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes easeTermGlitchIn {
          0% { transform: scaleY(0.01) scaleX(0); opacity: 0; }
          50% { transform: scaleY(0.01) scaleX(1); opacity: 1; }
          100% { transform: scaleY(1) scaleX(1); }
        }

        @keyframes easeTermGlitchOut {
          0% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(0.01) scaleX(1); opacity: 1; }
          100% { transform: scaleY(0.01) scaleX(0); opacity: 0; }
        }

        @keyframes easeTermFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes easeTermFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>

      <div 
        className={`ease-term-overlay ${!isOpen ? 'is-closing' : ''}`} 
        onClick={onClose}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="ease-term-modal" onClick={(e) => e.stopPropagation()}>
          <div className="ease-term-scanline"></div>
          <div className="ease-term-header">
            <span>{title}</span>
            <button className="ease-term-close" onClick={onClose} aria-label="Close">
              [X]
            </button>
          </div>
          <div className="ease-term-content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminalModal;
