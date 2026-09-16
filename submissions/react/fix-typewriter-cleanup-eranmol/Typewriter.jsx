import React, { useState, useEffect, useRef } from 'react';
import { Animate } from 'easemotion-react';

export default function Typewriter({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      timerRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [index, text, speed]);

  return (
    <div className="flex items-center text-3xl font-mono text-gray-800">
      <Animate type="fade-in" duration="fast">
        {displayedText}
      </Animate>
      <Animate type="pulse" duration="fast" className="ml-1 w-3 h-8 bg-blue-600 inline-block" />
    </div>
  );
}