import React, { useState } from 'react';
import './App.scss';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button 
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg 
          className={`icon ${isOpen ? 'rotated' : ''}`}
          width="20" height="20" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`accordion-content ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default function App() {
  const items = [
    {
      title: 'What is EaseMotion CSS?',
      content: 'EaseMotion CSS is a lightweight animation library for modern web applications.'
    },
    {
      title: 'How do I use this mixin?',
      content: 'Include the SCSS mixin in your stylesheet and apply it to the content container of your accordion. Toggle the "is-open" class to trigger the animation.'
    },
    {
      title: 'Is it accessible?',
      content: 'Yes! The accordion includes aria-expanded and aria-hidden attributes, keyboard navigation support via the button element, and respects the user\'s prefers-reduced-motion settings.'
    }
  ];

  return (
    <div className="accordion-container">
      <h2>EaseMotion Accordion Mixin</h2>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
