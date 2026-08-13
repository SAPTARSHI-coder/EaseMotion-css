import React from 'react';
import './style.css';

const EaseRichTextToolbar = ({ onCommand }) => {
  const tools = [
    { cmd: 'bold', label: 'B', style: 'bold' },
    { cmd: 'italic', label: 'I', style: 'italic' },
    { cmd: 'underline', label: 'U', style: 'underline' },
    { cmd: 'h1', label: 'H1', style: 'h1' },
    { cmd: 'h2', label: 'H2', style: 'h2' },
    { cmd: 'quote', label: '""', style: 'quote' }
  ];

  return (
    <div className="ease-rte-toolbar">
      {tools.map(tool => (
        <button
          key={tool.cmd}
          className={`ease-rte-btn ease-rte-${tool.style}`}
          onClick={() => onCommand(tool.cmd)}
        >
          {tool.label}
        </button>
      ))}
    </div>
  );
};

export default EaseRichTextToolbar;
