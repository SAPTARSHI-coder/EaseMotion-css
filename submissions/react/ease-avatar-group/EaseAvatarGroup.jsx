import React from "react";
/*
 * EaseAvatarGroup — EaseMotion CSS React submission
 * Folder: submissions/react/ease-avatar-group/
 * Palette: teal
 *
 * An overlapping avatar-group React component that spreads the avatars on hover.
 */

import { useState } from "react";

export default function EaseAvatarGroup({ users = [], max = 4, size = "md" }) {
  const [spread, setSpread] = useState(false);
  const shown = users.slice(0, max);
  const extra = users.length - max;
  return (
    <div className={`em-avatar-group em-avatar-${size} ${ spread ? "is-spread" : "" }`} onMouseEnter={() => setSpread(true)} onMouseLeave={() => setSpread(false)}>
      {shown.map((u, i) => (
        <span key={i} className="em-avatar" title={u.name} style={{ background: u.color || "#14b8a6", zIndex: shown.length - i }}>{u.initials || (u.name && u.name[0]) || "?"}</span>
      ))}
      {extra > 0 && <span className="em-avatar em-avatar-extra" style={{ background: "#163239", color: "#e6e8ec" }}>+{extra}</span>}
      <style>{`
        .em-avatar-group { display: inline-flex; align-items: center; padding: 4px; }
        .em-avatar { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; border: 2px solid #08161a; color: #08161a; font: 600 13px/1 system-ui; transition: margin 240ms cubic-bezier(0.34, 1.56, 0.64, 1); margin-left: -12px; }
        .em-avatar:first-child { margin-left: 0; }
        .em-avatar-group.is-spread .em-avatar { margin-left: 4px; }
        .em-avatar-extra { color: #e6e8ec !important; }
      `}</style>
    </div>
  );
}

