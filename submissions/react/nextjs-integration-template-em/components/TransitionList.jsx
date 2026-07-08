"use client";

import React, { useState } from 'react';

/**
 * TransitionList Component
 * Demonstrates EaseMotion entrance animations inside dynamic React state lists.
 * Shows that lightweight, pure CSS transitions can handle state updates without heavy JS libraries.
 */
export default function TransitionList() {
  const [items, setItems] = useState([
    { id: 1, text: '💡 Global layout bindings configured', type: 'success' },
    { id: 2, text: '⚡ Server-Side Rendering (SSR) compatibility verified', type: 'info' },
    { id: 3, text: '💧 Zero-CLS client hydration validated', type: 'warning' },
  ]);

  const [inputText, setInputText] = useState('');
  const [inputType, setInputType] = useState('success');

  const addItem = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newItem = {
      id: Date.now(),
      text: inputText.trim(),
      type: inputType,
    };

    setItems([newItem, ...items]);
    setInputText('');
  };

  const removeItem = (id) => {
    // Note: React key management forces a re-render. Items removed will unmount instantly.
    // New items will slide and fade in cleanly.
    setItems(items.filter(item => item.id !== id));
  };

  const getTypeStyles = (type) => {
    switch (type) {
      case 'success': return { borderLeft: '4px solid #10b981', background: 'rgba(16, 185, 129, 0.05)' };
      case 'info': return { borderLeft: '4px solid #0ea5e9', background: 'rgba(14, 165, 233, 0.05)' };
      case 'warning': return { borderLeft: '4px solid #f59e0b', background: 'rgba(245, 158, 11, 0.05)' };
      default: return { borderLeft: '4px solid var(--app-surface-border)', background: 'var(--app-surface)' };
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600 }}>
        Interactive Transition List
      </h3>
      <p style={{ margin: 0, color: 'var(--app-text-muted)', fontSize: '14px', lineHeight: 1.5 }}>
        Add and remove items to see EaseMotion entrance animations (`ease-fade-in` + `ease-slide-up`) in response to dynamic state changes.
      </p>

      {/* Form to add item */}
      <form onSubmit={addItem} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type an integration check..."
          style={{
            flex: 1,
            minWidth: '200px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--app-surface-border)',
            borderRadius: '8px',
            padding: '10px 14px',
            color: 'var(--app-text)',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color var(--ease-speed-fast) var(--ease-ease)'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--ease-color-primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--app-surface-border)'}
        />
        
        <select 
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            background: 'var(--app-bg)',
            border: '1px solid var(--app-surface-border)',
            borderRadius: '8px',
            padding: '10px 14px',
            color: 'var(--app-text)',
            fontSize: '14px',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="success">Success</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
        </select>

        <button 
          type="submit" 
          className="ease-hover-lift"
          style={{
            background: 'var(--ease-color-primary)',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Add Item
        </button>
      </form>

      {/* List container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        {items.length === 0 ? (
          <div 
            className="ease-fade-in"
            style={{ 
              padding: '24px', 
              textAlign: 'center', 
              color: 'var(--app-text-muted)',
              border: '1px dashed var(--app-surface-border)',
              borderRadius: '8px'
            }}
          >
            No items in list. Add some above!
          </div>
        ) : (
          items.map((item) => (
            <div 
              key={item.id}
              className="ease-fade-in ease-slide-up"
              style={{
                ...getTypeStyles(item.type),
                padding: '14px 18px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                animationDuration: '400ms'
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--app-text)' }}>
                {item.text}
              </span>
              <button 
                onClick={() => removeItem(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ef4444',
                  cursor: 'pointer',
                  fontSize: '18px',
                  lineHeight: 1,
                  padding: '4px 8px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background var(--ease-speed-fast) var(--ease-ease)'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.1)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
