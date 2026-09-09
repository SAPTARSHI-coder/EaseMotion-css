import React from "react";
/*
 * EaseDropdownMenu — EaseMotion CSS React submission
 * Folder: submissions/react/ease-dropdown-menu/
 * Palette: ruby
 *
 * A controlled dropdown menu React component that opens with a scale-in transition.
 */

import { useState, useRef, useEffect } from "react";

export default function EaseDropdownMenu({ trigger, items = [], align = "left" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  return (
    <div className="em-dropdown" ref={ref}>
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      {open && (
        <ul className={`em-dropdown-menu em-dropdown-${align}`}>
          {items.map((it, i) => <li key={i} onClick={() => { setOpen(false); it.onClick?.(); }}>{it.label}</li>)}
        </ul>
      )}
      <style>{`
        .em-dropdown { position: relative; display: inline-block; }
        .em-dropdown-menu { position: absolute; top: calc(100% + 6px); min-width: 180px; margin: 0; padding: 6px; list-style: none; background: #261418; border: 1px solid #36191e; border-radius: 8px; box-shadow: 0 12px 32px rgba(0,0,0,0.3); transform-origin: top center; animation: em-dd-in 180ms cubic-bezier(0.2, 0.8, 0.2, 1); z-index: 10; }
        .em-dropdown-left { left: 0; }
        .em-dropdown-right { right: 0; }
        @keyframes em-dd-in { from { opacity: 0; transform: scale(0.95) translateY(-4px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .em-dropdown-menu li { padding: 8px 12px; color: #e6e8ec; border-radius: 4px; cursor: pointer; font: 13px/1.4 system-ui; }
        .em-dropdown-menu li:hover { background: #ef444422; color: #ef4444; }
      `}</style>
    </div>
  );
}

