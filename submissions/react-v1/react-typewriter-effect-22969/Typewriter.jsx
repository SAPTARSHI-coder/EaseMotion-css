import React, { useState, useEffect } from 'react';
import { Animate } from 'easemotion-react';

export default function Typewriter({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="flex items-center text-3xl font-mono text-gray-800">
      <Animate type="fade-in" duration="fast">
        {displayedText}
      </Animate>
      {/* Blinking Cursor */}
      <Animate type="pulse" duration="fast" className="ml-1 w-3 h-8 bg-blue-600 inline-block" />
    </div>
  );
}
