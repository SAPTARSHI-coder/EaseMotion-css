// submissions/react-animated-sidebar-22922/Sidebar.jsx
const { useState } = React;

const SidebarItem = ({ icon, label, index, isOpen }) => {
  // Stagger the animation of each link dynamically based on its index
  const delay = isOpen ? index * 100 : 0;
  
  // If the sidebar is closed, we hide the items instantly. 
  // When it opens, they trigger the ease-slide-up with their calculated delay!
  const visibilityClass = isOpen ? 'ease-slide-up ease-duration-normal' : 'hidden';

  return (
    <div 
      className={`sidebar-item ${visibilityClass} ease-hover-glow`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
        display: isOpen ? 'flex' : 'none',
        alignItems: 'center',
        padding: '12px 20px',
        margin: '8px 12px',
        borderRadius: '8px',
        cursor: 'pointer',
        color: 'white',
        transition: 'background 0.2s'
      }}
    >
      <span style={{ marginRight: '16px', fontSize: '1.2rem' }}>{icon}</span>
      <span className="ease-font-semibold">{label}</span>
    </div>
  );
};

const AnimatedSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: 'Dashboard', icon: '📊' },
    { id: 2, label: 'Analytics', icon: '📈' },
    { id: 3, label: 'Messages', icon: '💬' },
    { id: 4, label: 'Settings', icon: '⚙️' },
    { id: 5, label: 'Logout', icon: '🚪' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      
      {/* Sidebar Container */}
      <aside 
        className="ease-bg-surface"
        style={{
          width: isOpen ? '280px' : '80px',
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header / Toggle Button */}
        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: isOpen ? 'space-between' : 'center' }}>
          
          {isOpen && (
            <h2 className="ease-text-xl ease-font-bold ease-gradient-text ease-fade-in ease-duration-fast" style={{ margin: 0, whiteSpace: 'nowrap' }}>
              EaseMotion
            </h2>
          )}

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="ease-btn ease-btn-secondary ease-hover-scale"
            style={{ padding: '8px', minWidth: '40px', cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
            aria-label="Toggle Sidebar"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ marginTop: '20px', flexGrow: 1 }}>
          {menuItems.map((item, idx) => (
            <SidebarItem 
              key={item.id} 
              icon={item.icon} 
              label={item.label} 
              index={idx} 
              isOpen={isOpen} 
            />
          ))}

          {/* Collapsed state Icons (only show when closed) */}
          {!isOpen && menuItems.map((item) => (
            <div 
              key={`collapsed-${item.id}`}
              className="ease-hover-scale ease-fade-in ease-duration-fast"
              style={{ padding: '16px 0', textAlign: 'center', cursor: 'pointer', fontSize: '1.5rem' }}
              title={item.label}
            >
              {item.icon}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, padding: '40px' }}>
        <div className="ease-card ease-card-glass ease-padding-8 ease-fade-in ease-duration-slow">
          <h1 className="ease-text-4xl ease-font-bold ease-mb-4">Animated React Sidebar</h1>
          <p className="ease-text-muted ease-text-lg" style={{ lineHeight: 1.6, maxWidth: '600px' }}>
            Click the hamburger menu icon to toggle the sidebar. 
            Notice how the navigation links don't just appear—they dynamically stagger into view using EaseMotion's CSS utility classes orchestrated perfectly by React state!
          </p>
        </div>
      </main>

    </div>
  );
};

ReactDOM.render(<AnimatedSidebar />, document.getElementById('root'));
