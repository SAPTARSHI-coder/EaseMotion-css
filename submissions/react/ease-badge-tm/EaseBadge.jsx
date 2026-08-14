import React from "react";
/*
 * EaseBadge — EaseMotion CSS React submission
 * Folder: submissions/react/ease-badge-tm/
 * Palette: forest
 *
 * A status badge React component that renders a label with an optional pulsing status dot.
 */

import { useState, useEffect } from "react";

export default function EaseBadge({ label, status = "online", pulse = true }) {
  const colors = { online: "#2ecc71", busy: "#ffb13b", offline: "#8b909b" };
  return (
    <span className="em-badge">
      <span className={`em-badge-dot ${pulse ? "is-pulse" : ""}`} style={{ background: colors[status] }} />
      <span className="em-badge-label">{label}</span>
      <style>{`
        .em-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: #152721; border: 1px solid #1f3530; border-radius: 999px; font: 600 12px/1 system-ui; color: #e6e8ec; }
        .em-badge-dot { width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 0 0 currentColor; }
        .em-badge-dot.is-pulse { animation: em-badge-pulse 1.8s ease-in-out infinite; }
        @keyframes em-badge-pulse { 0%, 100% { box-shadow: 0 0 0 0 currentColor; } 50% { box-shadow: 0 0 0 6px transparent; } }
      `}</style>
    </span>
  );
}

