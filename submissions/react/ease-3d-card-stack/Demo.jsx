import React from 'react';
import CardStack from './CardStack';
import './style.css';

/**
 * ============================================================================
 * EaseMotion 3D Card Stack Demo
 * ============================================================================
 */

export const Demo = () => {
  
  // The data for our cards
  const cardsData = [
    {
      title: "Discover",
      description: "Scroll down to see the magic. Notice how the first card is already docked and waiting in the center.",
      color: "#0f172a" // Slate
    },
    {
      title: "Design",
      description: "As you scroll, the second card drops in from the top, while the first card subtly scales down in the background to create 3D depth.",
      color: "#1e1b4b" // Indigo
    },
    {
      title: "Deploy",
      description: "By bypassing heavy JS animation libraries like GSAP, we achieve flawless 60fps scrolling performance natively.",
      color: "#312e81" // Lighter Indigo
    },
    {
      title: "Scale",
      description: "Keep scrolling! When the stack is complete, the sticky container unlocks and you continue down the page.",
      color: "#831843" // Pink/Rose
    }
  ];

  return (
    <main>
      
      <div className="demo-intro">
        <h1>Scroll-Linked 3D Stack</h1>
        <p>Scroll down to initiate the parallax sequence.</p>
      </div>
      
      {/* 
        The Card Stack handles its own sticky spacing. 
        We just pass it the array of cards!
      */}
      <CardStack cards={cardsData} />
      
      <div className="demo-outro">
        <h2>Sequence Complete.</h2>
        <p style={{ color: '#94a3b8' }}>Scroll back up to reverse the physics!</p>
      </div>

    </main>
  );
};

export default Demo;
