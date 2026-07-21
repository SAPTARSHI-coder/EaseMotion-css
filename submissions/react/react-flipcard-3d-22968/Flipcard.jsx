import React, { useState } from 'react';
import { Animate } from 'easemotion-react';
import './flipcard.css'; // Assuming developers use a tiny CSS file for the preserve-3d property

export default function Flipcard({ frontContent, backContent }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Animate 
      tag="div" 
      type="zoom-in" 
      hover="lift"
      className="relative w-64 h-96 cursor-pointer group perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`w-full h-full transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center p-6">
          <Animate type="fade-in" delay={100}>
            {frontContent || <h2 className="text-xl font-bold">Front Side</h2>}
          </Animate>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-600 text-white rounded-xl shadow-lg flex items-center justify-center p-6">
          <Animate type="fade-in" delay={flipped ? 300 : 0}>
            {backContent || <h2 className="text-xl font-bold">Back Side</h2>}
          </Animate>
        </div>

      </div>
    </Animate>
  );
}
