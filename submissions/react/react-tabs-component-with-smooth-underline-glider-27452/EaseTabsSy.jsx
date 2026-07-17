import React, { useState, useRef, useEffect } from "react";

/**
 * EaseTabsSy — Tabs component with a smooth animated underline "glider"
 * that slides beneath the active tab.
 * (Parallel implementation — suffixed "Sy" to avoid collision with any
 * existing ease-tabs component in this repo.)
 *
 * Props:
 * - tabs: Array<{ label: string, content: React.ReactNode }>  (required)
 * - defaultIndex: number — initially active tab index (default: 0)
 * - onChange: (index: number) => void — called when active tab changes
 * - className: string — optional extra class on the root wrapper
 */
export default function EaseTabsSy({
  tabs = [],
  defaultIndex = 0,
  onChange,
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [glider, setGlider] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  const measure = (index) => {
    const el = tabRefs.current[index];
    if (el) {
      setGlider({ left: el.offsetLeft, width: el.offsetWidth });
    }
  };

  useEffect(() => {
    measure(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, tabs.length]);

  useEffect(() => {
    const handleResize = () => measure(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    if (onChange) onChange(index);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = (index + 1) % tabs.length;
      tabRefs.current[next]?.focus();
      handleSelect(next);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      const prev = (index - 1 + tabs.length) % tabs.length;
      tabRefs.current[prev]?.focus();
      handleSelect(prev);
    }
  };

  if (!tabs.length) return null;

  return (
    <div className={`ease-tabs-sy ${className}`}>
      <div className="ease-tabs-sy__list" role="tablist" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(el) => (tabRefs.current[index] = el)}
            role="tab"
            type="button"
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            className={`ease-tabs-sy__tab ${
              activeIndex === index ? "ease-tabs-sy__tab--active" : ""
            }`}
            onClick={() => handleSelect(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
        <span
          className="ease-tabs-sy__glider"
          style={{
            transform: `translateX(${glider.left}px)`,
            width: `${glider.width}px`,
          }}
        />
      </div>

      <div className="ease-tabs-sy__panel" role="tabpanel">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
