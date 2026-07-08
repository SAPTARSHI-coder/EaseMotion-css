'use client';

import React, { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  title: string;
  description: string;
  delayMs: number;
}

export default function TimelineItem({ title, description, delayMs }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${isVisible ? 'ease-slide-up' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        animationDelay: `${delayMs}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <div className="timeline-marker ease-hover-glow">
        ✨
      </div>
      <div className="timeline-content ease-hover-lift">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
