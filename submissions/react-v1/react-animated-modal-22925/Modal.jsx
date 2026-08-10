// submissions/react-animated-modal-22925/Modal.jsx
const { useState } = React;

const AnimatedModal = ({ isOpen, onClose, title, children }) => {
  const [isExiting, setIsExiting] = useState(false);

  // If the modal isn't open and isn't currently exiting, don't render it at all.
  if (!isOpen && !isExiting) return null;

  // Intercept the close request to trigger the exit animation first!
  const triggerClose = () => {
    setIsExiting(true);
  };

  // Wait for the exit animation to finish, then finally tell the parent to fully unmount.
  const handleAnimationEnd = (e) => {
    // Ensure we only trigger on the backdrop's animation end to prevent duplicate events
    if (isExiting && e.target === e.currentTarget) {
      setIsExiting(false);
      onClose();
    }
  };

  const animationClass = isExiting ? 'ease-fade-out ease-duration-fast' : 'ease-fade-in ease-duration-normal';
  const modalAnimationClass = isExiting ? 'ease-fade-out ease-duration-fast' : 'ease-slide-up ease-duration-normal';

  return (
    <div 
      className={animationClass}
      onAnimationEnd={handleAnimationEnd}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={triggerClose} // Clicking the backdrop closes the modal
    >
      {/* Modal Dialog Box */}
      <div 
        className={`ease-card ease-card-solid ease-padding-8 ${modalAnimationClass}`}
        style={{
          background: '#1e293b',
          maxWidth: '500px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 className="ease-text-2xl ease-font-bold text-white" style={{ margin: 0 }}>{title}</h2>
          <button 
            onClick={triggerClose}
            className="ease-btn ease-hover-scale"
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'rgba(255,255,255,0.6)', 
              cursor: 'pointer',
              fontSize: '1.5rem',
              padding: '0 8px'
            }}
          >
            ✕
          </button>
        </div>
        
        <div className="ease-text-muted" style={{ lineHeight: 1.6, marginBottom: '24px' }}>
          {children}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={triggerClose} className="ease-btn ease-btn-secondary ease-hover-scale">
            Cancel
          </button>
          <button onClick={triggerClose} className="ease-btn ease-btn-primary ease-hover-glow">
            Confirm Action
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      <div className="ease-card ease-card-glass ease-padding-8 ease-fade-in ease-duration-slow" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 className="ease-text-4xl ease-font-bold ease-gradient-text ease-mb-4">React Animated Modal</h1>
        <p className="ease-text-muted ease-mb-8" style={{ lineHeight: 1.6 }}>
          Click the button below to launch the modal. Notice the gorgeous background blur entry and the perfectly synchronized slide-up dialog animation!
        </p>
        
        <button 
          onClick={() => setModalOpen(true)}
          className="ease-btn ease-btn-primary ease-btn-lg ease-hover-scale ease-hover-glow"
        >
          Open Dialog
        </button>
      </div>

      <AnimatedModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Delete Repository?"
      >
        <p>
          Are you sure you want to permanently delete this repository? 
          This action cannot be undone and all data will be lost.
        </p>
        <p style={{ marginTop: '12px' }}>
          <strong>Notice:</strong> Try clicking the backdrop or the 'X' button to see the perfectly intercepted exit animation!
        </p>
      </AnimatedModal>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
