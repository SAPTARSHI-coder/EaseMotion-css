import React, { createContext, useContext, useState, useEffect } from 'react';
import './dark-theme.scss';

// Create a Context for the theme
const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

/**
 * ThemeProvider
 * Wrap your app with this provider to enable a global dark‑mode toggle.
 * It injects CSS custom properties defined in dark‑theme.scss.
 */
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = typeof window !== 'undefined' && window.localStorage.getItem('darkMode');
    return saved === 'true' || false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    window.localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
