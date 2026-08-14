import React from "react";
/*
 * EaseTabsSwitcher — EaseMotion CSS React submission
 * Folder: submissions/react/ease-tabs-switcher/
 * Palette: graphite
 *
 * A segmented tabs React component whose active pill animates between the tabs.
 */

import { useState, useRef, useEffect, useLayoutEffect } from "react";

export default function EaseTabsSwitcher({ tabs = [], active, onChange }) {
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const idx = tabs.findIndex((t) => t.id === active);
    const btn = containerRef.current.children[idx];
    if (btn) setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [active, tabs]);
  return (
    <div className="em-tabs" ref={containerRef}>
      {tabs.map((t) => (
        <button key={t.id} className={`em-tab ${active === t.id ? "is-active" : ""}`} onClick={() => onChange?.(t.id)} type="button">{t.label}</button>
      ))}
      <span className="em-tab-indicator" style={{ left: indicator.left, width: indicator.width }} />
      <style>{`
        .em-tabs { position: relative; display: inline-flex; background: #1a1d22; border: 1px solid #25282e; border-radius: 10px; padding: 4px; gap: 2px; font-family: system-ui, sans-serif; }
        .em-tab { position: relative; z-index: 1; padding: 8px 18px; background: none; border: none; color: #8b909b; font: 13px/1 system-ui; cursor: pointer; border-radius: 6px; transition: color 200ms; }
        .em-tab.is-active { color: #101216; }
        .em-tab-indicator { position: absolute; top: 4px; bottom: 4px; background: #94a3b8; border-radius: 6px; transition: left 320ms cubic-bezier(0.2, 0.8, 0.2, 1), width 320ms cubic-bezier(0.2, 0.8, 0.2, 1); z-index: 0; box-shadow: 0 2px 8px #94a3b855; }
      `}</style>
    </div>
  );
}

