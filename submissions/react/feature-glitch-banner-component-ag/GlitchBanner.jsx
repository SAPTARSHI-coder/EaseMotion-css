import React from 'react';

const GlitchBanner = ({ 
  text = "SYSTEM FAILURE", 
  children,
  className = ""
}) => {
  // Use children if provided, otherwise fallback to text prop
  const content = children || text;

  const styles = `
    /* Base wrapper with unique identifier 'ag' (Anisha Garg) */
    .glitch-container-ag {
      position: relative;
      width: 100%;
      max-width: 800px;
      padding: 4rem 2rem;
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      box-shadow: 0 0 30px rgba(0, 255, 255, 0.03);
      font-family: 'Courier New', Courier, monospace;
      margin: 0 auto;
    }

    /* CRT Scanline Overlay */
    .glitch-container-ag::after {
      content: " ";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
      z-index: 2;
      background-size: 100% 2px, 3px 100%;
      pointer-events: none;
    }

    /* Main Text Styling */
    .glitch-text-ag {
      position: relative;
      color: #ffffff;
      font-size: clamp(2rem, 5vw, 4rem);
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 0;
      z-index: 1;
    }

    /* Pseudo-elements for the color offset layers */
    .glitch-text-ag::before,
    .glitch-text-ag::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #18181b;
    }

    /* Cyan Glitch Layer */
    .glitch-text-ag::before {
      left: 4px;
      text-shadow: -2px 0 #0ff;
      clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
      animation: glitch-anim-1-ag 2.5s infinite linear alternate-reverse;
      z-index: -1;
    }

    /* Magenta Glitch Layer */
    .glitch-text-ag::after {
      left: -4px;
      text-shadow: -2px 0 #f0f;
      clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
      animation: glitch-anim-2-ag 3s infinite linear alternate-reverse;
      z-index: -2;
    }

    @keyframes glitch-anim-1-ag {
      0% { clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%); }
      20% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
      40% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
      50% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
      60% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
      100% { clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%); }
    }

    @keyframes glitch-anim-2-ag {
      0% { clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); }
      25% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
      50% { clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%); }
      75% { clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); }
      100% { clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
    }

    @media (prefers-reduced-motion: reduce) {
      .glitch-text-ag::before,
      .glitch-text-ag::after {
        animation: none !important;
        clip-path: none !important;
        text-shadow: none !important;
        left: 0 !important;
        display: none !important;
      }
      .glitch-container-ag::after {
        display: none !important;
      }
    }
  `;

  return (
    <div 
      className={`glitch-container-ag ${className}`}
      role="banner" 
      aria-label="Glitch effect banner"
    >
      <style>{styles}</style>
      
      {/* 
        Crucial: data-text attribute is used by CSS pseudo-elements to duplicate 
        the text for the glitch color splitting effect. aria-hidden is used on the 
        pseudo elements inherently, keeping the main text accessible.
      */}
      <h1 
        className="glitch-text-ag" 
        data-text={typeof content === 'string' ? content : "GLITCH"}
      >
        {content}
      </h1>
    </div>
  );
};

export default GlitchBanner;
