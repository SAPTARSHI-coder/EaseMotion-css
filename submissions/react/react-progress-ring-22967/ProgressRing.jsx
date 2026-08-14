import React, { useEffect, useState } from 'react';
import { Animate } from 'easemotion-react';

export default function ProgressRing({ percentage = 0 }) {
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    // Circumference calculation: 2 * pi * radius (approx 100 for r=16)
    const newOffset = 100 - (percentage / 100) * 100;
    setOffset(newOffset);
  }, [percentage]);

  return (
    <Animate type="zoom-in" duration="medium" className="relative flex items-center justify-center w-32 h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
        {/* Background Track */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="3"
        />
        {/* Progress Arc */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeDasharray="100"
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <Animate type="fade-in" delay={300} className="text-2xl font-bold text-gray-800">
          {percentage}%
        </Animate>
      </div>
    </Animate>
  );
}
