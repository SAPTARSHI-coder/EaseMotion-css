import React from "react";
/*
 * EaseAlertBanner — EaseMotion CSS React submission
 * Folder: submissions/react/ease-alert-banner/
 * Palette: violet
 *
 * A dismissible alert banner React component with a slide-out exit transition.
 */

import { useState, useEffect } from "react";

export default function EaseAlertBanner({ type = "info", message, onDismiss }) {
  const [visible, setVisible] = useState(true);
  const colors = { info: "#a78bfa", success: "#a78bfa", warning: "#ffb13b", error: "#ff5c5c" };
  if (!visible) return null;
  return (
    <div className={`em-alert em-alert-${type}`} style={{ borderColor: colors[type] }}>
      <span className="em-alert-icon" style={{ background: colors[type] }}>!</span>
      <span className="em-alert-message">{message}</span>
      <button type="button" onClick={() => { setVisible(false); onDismiss?.(); }}>×</button>
      <style>{`
        .em-alert { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #1a1329; border-left: 4px solid; border-radius: 0 8px 8px 0; color: #e6e8ec; font: 13px/1.4 system-ui; max-width: 480px; animation: em-alert-in 320ms cubic-bezier(0.2, 0.8, 0.2, 1); }
        @keyframes em-alert-in { from { transform: translateX(-12px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .em-alert-icon { width: 20px; height: 20px; border-radius: 50%; display: grid; place-items: center; color: #0e0a1a; font: 700 12px/1 system-ui; flex-shrink: 0; }
        .em-alert-message { flex: 1; }
        .em-alert button { background: none; border: none; color: #8b909b; font: 18px/1 system-ui; cursor: pointer; padding: 0 4px; }
        .em-alert button:hover { color: #e6e8ec; }
      `}</style>
    </div>
  );
}

