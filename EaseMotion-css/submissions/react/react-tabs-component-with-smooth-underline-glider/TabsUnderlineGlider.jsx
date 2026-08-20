import React, { useState, useRef, useEffect } from 'react';

/**
 * Tabs Component with Smooth Underline Glider
 *
 * @param {Array} tabs - Array of tab objects { label, value }
 * @param {String} defaultActive - Value of the tab active on initial render
 * @param {Function} onChange - Called with the new active tab's value
 */
const TabsUnderlineGlider = ({ tabs = [], defaultActive, onChange }) => {
  const [active, setActive] = useState(defaultActive || (tabs[0] && tabs[0].value));
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  useEffect(() => {
    const node = tabRefs.current[active];
    if (node) {
      setUnderlineStyle({
        left: node.offsetLeft,
        width: node.offsetWidth,
      });
    }
  }, [active, tabs]);

  const handleClick = (value) => {
    setActive(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="ease-tabs-container">
      <div className="ease-tabs-list" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            ref={(el) => (tabRefs.current[tab.value] = el)}
            className={`ease-tabs-tab ${active === tab.value ? 'is-active' : ''}`}
            role="tab"
            aria-selected={active === tab.value}
            onClick={() => handleClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
        <span
          className="ease-tabs-underline"
          style={{ transform: `translateX(${underlineStyle.left}px)`, width: underlineStyle.width }}
        />
      </div>
    </div>
  );
};

export default TabsUnderlineGlider;