// submissions/react-toast-system-22923/ToastSystem.jsx
const { useState, useEffect, useCallback } = React;

// Individual Toast Component
const Toast = ({ id, message, type, duration = 3000, onRemove }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Auto-dismiss after the duration
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  // Handle the end of the exit animation before fully removing from DOM
  const handleAnimationEnd = (e) => {
    if (isExiting) {
      onRemove(id);
    }
  };

  // Map our toast types to EaseMotion color utilities
  const typeColors = {
    success: 'ease-bg-success',
    error: 'ease-bg-danger',
    info: 'ease-bg-primary',
    warning: 'ease-bg-secondary'
  };
  
  const bgColorClass = typeColors[type] || 'ease-bg-surface';

  return (
    <div 
      onAnimationEnd={handleAnimationEnd}
      className={`ease-card ease-card-glass ease-padding-4 ease-mt-4 ${
        // If exiting, reverse the animation. If entering, slide it in!
        isExiting ? 'ease-fade-out ease-duration-fast' : 'ease-slide-up ease-duration-normal'
      }`}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        minWidth: '280px',
        pointerEvents: 'auto',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className={bgColorClass} style={{ width: '12px', height: '12px', borderRadius: '50%' }} />
      <span className="ease-text-md ease-font-semibold" style={{ flexGrow: 1, color: 'white' }}>
        {message}
      </span>
      <button 
        onClick={() => setIsExiting(true)}
        className="ease-btn ease-hover-scale"
        style={{ 
          background: 'transparent', 
          border: 'none', 
          color: 'rgba(255,255,255,0.6)', 
          cursor: 'pointer',
          padding: '4px 8px'
        }}
      >
        ✕
      </button>
    </div>
  );
};

// Global Toast Container & Demo Runner
const App = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      <div className="ease-card ease-card-solid ease-padding-8 ease-fade-in ease-duration-slow" style={{ textAlign: 'center', background: '#1e293b' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text ease-mb-6">React Toast System</h1>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button 
            onClick={() => addToast('Data saved successfully!', 'success')}
            className="ease-btn ease-btn-primary ease-hover-glow"
          >
            Success Toast
          </button>
          
          <button 
            onClick={() => addToast('Connection to server lost.', 'error')}
            className="ease-btn ease-btn-secondary ease-hover-scale"
            style={{ background: '#ef4444' }}
          >
            Error Toast
          </button>
          
          <button 
            onClick={() => addToast('New update is available.', 'info')}
            className="ease-btn ease-btn-secondary ease-hover-scale"
            style={{ background: '#3b82f6' }}
          >
            Info Toast
          </button>
        </div>
      </div>

      {/* Fixed Toast Container */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        pointerEvents: 'none',
        zIndex: 9999
      }}>
        {toasts.map(toast => (
          <Toast 
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            onRemove={removeToast}
          />
        ))}
      </div>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
