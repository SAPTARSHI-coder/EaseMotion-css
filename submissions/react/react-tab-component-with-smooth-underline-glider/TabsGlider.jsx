import React, { useState, useRef, useLayoutEffect, useEffect, useCallback, useId } from 'react';

/**
 * React Component Track: Tabs with Smooth Underline Glider
 * Production grade component adhering to strict design system standards and full keyboard compliance.
 */
export default function TabsGlider({ tabs = [], componentId, onChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [gliderStyle, setGliderStyle] = useState({ transform: 'translateX(0)', width: '0px' });
  const tabsRef = useRef([]);

  // React standard useId hook to completely avoid DOM duplicate ID collisions
  const uniqueReactId = useId();
  const idBase = componentId || `ease-tabs-${uniqueReactId}`;

  // Reset safely if layout shrinks dynamically downstream
  useEffect(() => {
    if (tabs.length > 0 && activeIndex >= tabs.length) {
      setActiveIndex(tabs.length - 1);
    }
  }, [tabs, activeIndex]);

  // Memoized glider bounds manager to save resource cycles
  const updateGliderPosition = useCallback(() => {
    const activeTab = tabsRef.current[activeIndex];
    if (activeTab) {
      const { offsetLeft, offsetWidth } = activeTab;
      setGliderStyle({
        transform: `translateX(${offsetLeft}px)`,
        width: `${offsetWidth}px`
      });
    }
  }, [activeIndex]);

  useLayoutEffect(() => {
    updateGliderPosition();
  }, [updateGliderPosition, tabs]);

  // Handle responsive layout resizes seamlessly with stabilized dependency tracks
  useEffect(() => {
    window.addEventListener('resize', updateGliderPosition);
    return () => window.removeEventListener('resize', updateGliderPosition);
  }, [updateGliderPosition]);

  const handleTabClick = (index, tab) => {
    setActiveIndex(index);
    if (onChange) onChange(tab, index);
  };

  // Keyboard navigation controller handling key inputs natively
  const handleKeyDown = (e, index) => {
    let targetIndex = null;

    if (e.key === 'ArrowRight') {
      targetIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      targetIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      targetIndex = 0;
    } else if (e.key === 'End') {
      targetIndex = tabs.length - 1;
    }

    if (targetIndex !== null) {
      e.preventDefault();
      tabsRef.current[targetIndex]?.focus();
      handleTabClick(targetIndex, tabs[targetIndex]);
    }
  };

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="ease-tabs-container">
      {/* ─── 🧭 ACCESSIBLE TAB LIST TRACK ─── */}
      <div className="ease-tab-list" role="tablist" aria-label="Navigation Tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={`${idBase}-tab-${index}`}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => handleTabClick(index, tab)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="ease-tab-trigger"
            aria-selected={activeIndex === index}
            aria-controls={`${idBase}-panel-${index}`}
            role="tab"
            tabIndex={activeIndex === index ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}

        {/* Dynamic Indicator */}
        <div className="ease-tab-glider" style={gliderStyle} aria-hidden="true" />
      </div>

      {/* ─── 📂 LINKED ARIA PANEL VIEWPORTS ─── */}
      {tabs.map((tab, index) => (
        <div
          key={index}
          id={`${idBase}-panel-${index}`}
          aria-labelledby={`${idBase}-tab-${index}`}
          className="ease-tab-panel"
          role="tabpanel"
          hidden={activeIndex !== index}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}