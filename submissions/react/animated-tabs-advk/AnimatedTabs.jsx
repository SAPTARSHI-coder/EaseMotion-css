import { useId, useRef, useState } from 'react';

/**
 * AnimatedTabs
 * Tabs implementing the full WAI-ARIA keyboard pattern: arrows move, Home/End
 * jump, and only the active tab is in the page tab order (roving tabindex).
 */
export default function AnimatedTabs({ tabs = [], defaultIndex = 0, className = '' }) {
  const [active, setActive] = useState(defaultIndex);
  const baseId = useId();
  const refs = useRef([]);

  const focusTab = (i) => {
    const next = (i + tabs.length) % tabs.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e) => {
    const keys = {
      ArrowRight: () => focusTab(active + 1),
      ArrowLeft: () => focusTab(active - 1),
      Home: () => focusTab(0),
      End: () => focusTab(tabs.length - 1),
    };
    if (keys[e.key]) {
      e.preventDefault();
      keys[e.key]();
    }
  };

  return (
    <div className={`atb ${className}`.trim()} style={{ '--atb-n': tabs.length, '--atb-i': active }}>
      <div className="atb__list" role="tablist" onKeyDown={onKeyDown}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id ?? i}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${i}`}
            // roving tabindex: one stop for the whole tablist
            tabIndex={i === active ? 0 : -1}
            className={`atb__tab ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
        <span className="atb__ink" aria-hidden="true" />
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id ?? i}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className="atb__panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
