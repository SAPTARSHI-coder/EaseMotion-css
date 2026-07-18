import React from 'react';

export default function App() {
  return (
    <div className="ease-slide-down duration-500ms hover:ease-lift">
      <p className={`ease-fade-in delay-200ms ${true ? 'ease-bounce' : ''}`}>
        Dynamic classes work too!
      </p>
    </div>
  );
}
