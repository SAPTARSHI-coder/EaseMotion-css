"use client";

import React, { useState } from 'react';
import './style.css';

/**
 * A Next.js App Router compatible Timeline Showcase Component.
 * This component demonstrates hydration stability and CSS static extraction
 * by using standard EaseMotion classes without causing CLS.
 */
const TimelineNode = ({ title, description, index, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`timeline-node ease-fade-in ease-hover-lift ${isExpanded ? 'expanded' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="timeline-icon-container">
        <div className={`timeline-icon ${isExpanded ? 'ease-pulse active' : ''}`}>
          {icon}
        </div>
        <div className="timeline-connector"></div>
      </div>
      
      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
        
        {isExpanded && (
          <div className="timeline-extra ease-slide-down">
            <p>Extra interactive details loaded via client component state. No CLS occurred because hydration perfectly preserved the structure.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function NextjsTimelineShowcase({ data }) {
  // Fallback data if none provided
  const timelineData = data || [
    { id: 1, title: 'Project Initialization', description: 'Server-side rendering begins without blocking the main thread.', icon: '🚀' },
    { id: 2, title: 'Static Styles Applied', description: 'EaseMotion CSS is loaded as a pure static asset with zero JS overhead.', icon: '⚡' },
    { id: 3, title: 'Client Hydration', description: 'Interactive React state kicks in smoothly, preserving layout integrity.', icon: '💧' },
    { id: 4, title: 'Animations Ready', description: 'Hover and click to see 60fps hardware-accelerated animations.', icon: '✨' },
  ];

  return (
    <div className="nextjs-showcase-container">
      <header className="showcase-header ease-slide-down">
        <h1 className="showcase-title">
          EaseMotion <span className="highlight">SSR</span> Showcase
        </h1>
        <p className="showcase-subtitle">
          A hybrid Server/Client Next.js compatible component demonstrating seamless zero-CLS animations using pure static CSS utilities.
        </p>
      </header>

      <section className="timeline-section">
        {timelineData.map((item, index) => (
          <TimelineNode 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            index={index} 
            icon={item.icon}
          />
        ))}
      </section>
      
      <footer className="showcase-footer ease-fade-in" style={{ animationDelay: '1s' }}>
        <p>Powered by Next.js App Router + EaseMotion CSS</p>
      </footer>
    </div>
  );
}
