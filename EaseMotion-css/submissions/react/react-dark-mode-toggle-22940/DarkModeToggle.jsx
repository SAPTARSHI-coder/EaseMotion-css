import React, { useState, useEffect } from 'react';

const SunIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`theme-icon ${className}`}
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`theme-icon ${className}`}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const DarkModeToggle = ({ 
  initialTheme = 'light',
  onToggle,
  size = 'md'
}) => {
  const [isDark, setIsDark] = useState(initialTheme === 'dark');
  const [animationKey, setAnimationKey] = useState(0);

  // Sync state if initialTheme prop changes
  useEffect(() => {
    setIsDark(initialTheme === 'dark');
  }, [initialTheme]);

  const handleToggle = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Update animation key to force re-render of the icon wrapper for fresh animation
    setAnimationKey(prev => prev + 1);
    
    if (onToggle) {
      onToggle(newIsDark ? 'dark' : 'light');
    }
  };

  return (
    <button 
      className={`theme-toggle-btn size-${size} ease-hover-scale`} 
      onClick={handleToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div 
        className="icon-wrapper ease-zoom-in" 
        key={animationKey} // Forces React to unmount and remount, re-triggering the CSS animation
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
};

export default DarkModeToggle;
