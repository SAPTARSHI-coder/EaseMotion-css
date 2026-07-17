import React, { useState } from 'react';
import './App.scss';

function App() {
  const [toasts, setToasts] = useState([
    { id: 1, type: 'success', icon: '✓', message: 'Action completed successfully.' },
    { id: 2, type: 'error', icon: '✗', message: 'Failed to save the document.' },
    { id: 3, type: 'warning', icon: '⚠', message: 'Your session is about to expire.' },
    { id: 4, type: 'info', icon: 'i', message: 'A new update is available.' },
    { id: 5, type: 'neutral', icon: '•', message: 'System maintenance scheduled.' }
  ]);

  const removeToast = (id) => {
    setToasts(toasts.filter(t => t.id !== id));
  };

  return (
    <div className="App">
      <header className="demo-header">
        <h1>EaseMotion CSS - Toast Mixin</h1>
        <p>Reusable SCSS mixin for responsive, animated toast notifications.</p>
      </header>

      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast-${toast.type}`} role="alert">
            <div className="toast-icon" aria-hidden="true">{toast.icon}</div>
            <div className="toast-content">{toast.message}</div>
            <button 
              className="toast-close" 
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        ))}
        {toasts.length === 0 && (
          <p style={{color: '#64748b'}}>All notifications dismissed. Refresh to see them again.</p>
        )}
      </div>
    </div>
  );
}

export default App;
