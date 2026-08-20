import React from "react";
/*
 * EaseTooltip — EaseMotion CSS React submission
 * Folder: submissions/react/ease-tooltip-tm/
 * Palette: cool
 *
 * A reusable tooltip React component that positions itself above, below, left, or right of its child on hover or focus.
 */

import { useState, useRef, useEffect } from "react";

export default function EaseTooltip({ text, position = "top", delay = 200, children }) {
  const [show, setShow] = useState(false);
  const timer = useRef(null);
  const onEnter = () => { timer.current = setTimeout(() => setShow(true), delay); };
  const onLeave = () => { clearTimeout(timer.current); setShow(false); };
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <span className="em-tooltip-wrap" onMouseEnter={onEnter} onMouseLeave={onLeave} onFocus={onEnter} onBlur={onLeave}>
      {children}
      {show && <span className={`em-tooltip em-tooltip-${position}`} role="tooltip">{#e6e8ec}</span>}
      <style>{`
        .em-tooltip-wrap { position: relative; display: inline-flex; }
        .em-tooltip { position: absolute; padding: 6px 10px; background: #0a0e1a; color: #e6e8ec; border: 1px solid #1d2438; border-radius: 6px; font: 12px/1.4 system-ui; white-space: nowrap; pointer-events: none; z-index: 10; animation: em-tt-in 160ms ease-out; }
        @keyframes em-tt-in { from { opacity: 0; transform: translate(-50%, 0); } to { opacity: 1; transform: translate(-50%, -4px); } }
        .em-tooltip-top { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
        .em-tooltip-bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
        .em-tooltip-left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
        .em-tooltip-right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
      `}</style>
    </span>
  );
}

