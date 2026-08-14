import React from "react";
/*
 * EaseToggleSwitch — EaseMotion CSS React submission
 * Folder: submissions/react/ease-toggle-tm/
 * Palette: gold
 *
 * A controlled toggle switch React component with an ARIA-correct role and animated knob.
 */

import { useState, useRef, useEffect } from "react";

export default function EaseToggleSwitch({ checked = false, onChange, label = "", disabled = false }) {
  const [on, setOn] = useState(checked);
  useEffect(() => setOn(checked), [checked]);
  const handle = () => {
    if (disabled) return;
    setOn((v) => { const n = !v; onChange?.(n); return n; });
  };
  return (
    <label className={`em-switch ${ disabled ? "is-disabled" : "" }`}>
      <span className="em-switch-track">
        <input type="checkbox" checked={on} onChange={handle} disabled={disabled} role="switch" aria-checked={on} />
        <span className="em-switch-knob" />
      </span>
      {label && <span className="em-switch-label">{label}</span>}
      <style>{`
        .em-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; color: #e6e8ec; font: 14px/1 system-ui; }
        .em-switch.is-disabled { opacity: 0.5; cursor: not-allowed; }
        .em-switch-track { position: relative; width: 44px; height: 24px; }
        .em-switch-track input { opacity: 0; width: 100%; height: 100%; margin: 0; cursor: inherit; }
        .em-switch-knob { position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 50%; background: #8b909b; transition: transform 240ms cubic-bezier(0.4, 0, 0.2, 1), background 240ms; pointer-events: none; }
        .em-switch input:checked ~ .em-switch-knob { transform: translateX(20px); background: #facc15; }
      `}</style>
    </label>
  );
}

