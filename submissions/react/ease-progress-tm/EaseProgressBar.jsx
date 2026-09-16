import React from "react";
/*
 * EaseProgressBar — EaseMotion CSS React submission
 * Folder: submissions/react/ease-progress-tm/
 * Palette: rose
 *
 * An animated progress bar React component that fills from 0 to a target value with a smooth CSS transition.
 */

import { useState, useEffect } from "react";

export default function EaseProgressBar({ value = 0, showLabel = true, accent = "cool" }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setV(Math.max(0, Math.min(100, value))), 50);
    return () => clearTimeout(t);
  }, [value]);
  const colors = { warm: "#ff5c8a", cool: "#ff5c8a", forest: "#ff5c8a", rose: "#ff5c8a", amber: "#ff5c8a", violet: "#ff5c8a", teal: "#ff5c8a", ruby: "#ff5c8a", graphite: "#ff5c8a", gold: "#ff5c8a" };
  return (
    <div className="em-progress">
      <div className="em-progress-track">
        <div className="em-progress-fill" style={{ width: `${v}%`, background: `linear-gradient(90deg, ${colors[accent] || "#ff5c8a"}, #ffb4d2)` }} />
      </div>
      {showLabel && <small className="em-progress-label">{Math.round(v)}%</small>}
      <style>{`
        .em-progress { display: flex; align-items: center; gap: 8px; max-width: 360px; font-family: system-ui, sans-serif; }
        .em-progress-track { flex: 1; height: 8px; background: #361b25; border-radius: 999px; overflow: hidden; }
        .em-progress-fill { height: 100%; border-radius: 999px; transition: width 800ms cubic-bezier(0.2, 0.8, 0.2, 1); }
        .em-progress-label { color: #8b909b; font: 12px/1 ui-monospace, monospace; min-width: 36px; text-align: right; }
      `}</style>
    </div>
  );
}

