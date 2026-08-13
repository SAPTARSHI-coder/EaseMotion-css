import React from 'react';
import './style.css';

export default function EaseInfiniteScrollMarquee({ children, speed = '20s', reverse = false }) {
  return (
    <div className="ease-marquee-wrapper">
      <div
        className={`ease-marquee-track ${reverse ? 'is-reverse' : ''}`}
        style={{ animationDuration: speed }}
      >
        <div className="ease-marquee-content">{children}</div>
        <div className="ease-marquee-content" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
