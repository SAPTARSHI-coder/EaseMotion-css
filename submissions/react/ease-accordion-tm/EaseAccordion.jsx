import React from "react";
/*
 * EaseAccordion — EaseMotion CSS React submission
 * Folder: submissions/react/ease-accordion-tm/
 * Palette: warm
 *
 * An accessible accordion React component with a smooth height transition between expanded and collapsed panels.
 */

import { useState, useRef, useEffect } from "react";

export default function EaseAccordion({ items = [], defaultOpen = null, multi = false }) {
  const [openIds, setOpenIds] = useState(() => {
    if (defaultOpen == null) return new Set();
    return new Set([defaultOpen]);
  });
  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(multi ? prev : []);
      if (prev.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };
  return (
    <div className="em-accordion">
      {items.map((item) => {
        const open = openIds.has(item.id);
        return (
          <div key={item.id} className={`em-accordion-item ${open ? "is-open" : ""}`}>
            <button type="button" onClick={() => toggle(item.id)} aria-expanded={open}>
              <span>{item.title}</span>
              <span className="em-accordion-icon" aria-hidden="true">+</span>
            </button>
            <div className="em-accordion-body" style={{ maxHeight: open ? "320px" : "0px" }}>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
      <style>{`
        .em-accordion { display: flex; flex-direction: column; gap: 8px; max-width: 480px; font-family: system-ui, sans-serif; }
        .em-accordion-item { background: #1a1d24; border: 1px solid #262a33; border-radius: 10px; overflow: hidden; }
        .em-accordion-item button { width: 100%; padding: 14px 18px; background: none; border: none; color: #e6e8ec; font: 600 14px/1 system-ui; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: left; transition: background 160ms; }
        .em-accordion-item button:hover { background: #262a33; }
        .em-accordion-icon { color: #8b909b; font: 600 18px/1 system-ui; transition: transform 240ms; }
        .em-accordion-item.is-open .em-accordion-icon { transform: rotate(45deg); color: #ff6a3d; }
        .em-accordion-body { overflow: hidden; transition: max-height 320ms cubic-bezier(0.2, 0.8, 0.2, 1); }
        .em-accordion-body p { margin: 0; padding: 0 18px 16px; color: #8b909b; font: 13px/1.5 system-ui; }
      `}</style>
    </div>
  );
}

