import React, { useState, useRef, useCallback, useLayoutEffect } from 'react';

/**
 * Tabs Component with Smooth Underline Glider
 *
 * A horizontal tab list where the active indicator physically slides and
 * resizes to match whichever tab is selected, instead of jumping between
 * fixed-width slots.
 *
 * @param {Array} tabs - Tab objects: { id, label, content }
 * @param {String} defaultActiveTab - id of the tab selected on mount (defaults to the first tab)
 * @param {Function} onTabChange - Called with the new active tab id whenever the selection changes
 */
const Tabs = ({ tabs = [], defaultActiveTab, onTabChange }) => {
  const [activeId, setActiveId] = useState(defaultActiveTab || (tabs[0] && tabs[0].id));

  const tabRefs = useRef({});
  const underlineRef = useRef(null);

  // Measures the active tab button and moves/resizes the underline to match it.
  const glideToActiveTab = useCallback(() => {
    const activeTabEl = tabRefs.current[activeId];
    const underlineEl = underlineRef.current;
    if (!activeTabEl || !underlineEl) return;

    underlineEl.style.width = `${activeTabEl.offsetWidth}px`;
    underlineEl.style.transform = `translateX(${activeTabEl.offsetLeft}px)`;
  }, [activeId]);

  // Reposition on mount, whenever the active tab changes, and on viewport
  // resize (labels can reflow at smaller widths).
  useLayoutEffect(() => {
    glideToActiveTab();
    window.addEventListener('resize', glideToActiveTab);
    return () => window.removeEventListener('resize', glideToActiveTab);
  }, [glideToActiveTab]);

  const selectTab = (id) => {
    if (id === activeId) return;
    setActiveId(id);
    if (onTabChange) onTabChange(id);
  };

  // Roving-tabindex keyboard support, per the WAI-ARIA Tabs pattern.
  const handleKeyDown = (event, index) => {
    const lastIndex = tabs.length - 1;
    let nextIndex = null;

    if (event.key === 'ArrowRight') nextIndex = index === lastIndex ? 0 : index + 1;
    else if (event.key === 'ArrowLeft') nextIndex = index === 0 ? lastIndex : index - 1;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = lastIndex;
    else return;

    event.preventDefault();
    const nextTab = tabs[nextIndex];
    selectTab(nextTab.id);
    const nextTabEl = tabRefs.current[nextTab.id];
    if (nextTabEl) nextTabEl.focus();
  };

  const activeTab = tabs.find((tab) => tab.id === activeId);

  return (
    <div className="ease-tabs-glider">
      <div className="ease-tabs-glider-nav" role="tablist" aria-orientation="horizontal">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => { tabRefs.current[tab.id] = el; }}
            id={`ease-tabs-glider-tab-${tab.id}`}
            type="button"
            className={`ease-tabs-glider-tab${tab.id === activeId ? ' is-active' : ''}`}
            role="tab"
            aria-selected={tab.id === activeId}
            aria-controls={`ease-tabs-glider-panel-${tab.id}`}
            tabIndex={tab.id === activeId ? 0 : -1}
            onClick={() => selectTab(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {tab.label}
          </button>
        ))}

        {/* The glider: one element that slides and resizes to the active tab,
            instead of a static border. */}
        <span className="ease-tabs-glider-underline" ref={underlineRef} />
      </div>

      {activeTab && activeTab.content && (
        <div
          key={activeTab.id}
          id={`ease-tabs-glider-panel-${activeTab.id}`}
          className="ease-tabs-glider-panel ease-fade-in"
          role="tabpanel"
          aria-labelledby={`ease-tabs-glider-tab-${activeTab.id}`}
          tabIndex={0}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  );
};

export default Tabs;