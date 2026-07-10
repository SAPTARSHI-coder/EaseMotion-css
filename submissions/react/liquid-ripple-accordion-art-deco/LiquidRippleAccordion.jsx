import React, { useState, useRef, useCallback } from 'react';
import './LiquidRippleAccordion.css';

/**
 * LiquidRippleAccordion
 *
 * An Art Deco-styled accordion component with a smooth Liquid Ripple
 * interaction transition. Each panel header spawns a CSS ripple effect
 * at the exact click position on open/close, tied to EaseMotion utility
 * classes for the collapse animation.
 *
 * @param {AccordionItem[]} items        - Array of accordion item data (see prop types below).
 * @param {boolean}         allowMultiple - When true, multiple panels can be open simultaneously. Default: false.
 * @param {string}          className    - Optional extra class name(s) for the root element.
 * @param {'light'|'dark'}  theme        - Color theme. Default: 'light'.
 *
 * AccordionItem shape:
 * {
 *   id:       string | number  — unique key for each item
 *   title:    string           — visible header text
 *   content:  React.ReactNode  — body content (string, JSX, etc.)
 *   icon?:    React.ReactNode  — optional decorative icon before the title
 *   disabled? boolean          — prevents interaction when true
 * }
 */
const LiquidRippleAccordion = ({
  items = [],
  allowMultiple = false,
  className = '',
  theme = 'light',
}) => {
  const [openIds, setOpenIds] = useState(new Set());

  const toggleItem = useCallback((id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  }, [allowMultiple]);

  return (
    <div
      className={`ease-lra ease-lra--${theme}${className ? ` ${className}` : ''}`}
      role="list"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          onToggle={toggleItem}
        />
      ))}
    </div>
  );
};

/* ─── Internal AccordionItem ──────────────────────────────── */

const AccordionItem = ({ item, isOpen, onToggle }) => {
  /* Dedicated container for imperative ripple nodes — never touched by React reconciler */
  const rippleLayerRef = useRef(null);

  /**
   * Spawn a CSS ripple at the click coordinates.
   * Fix (reduced-motion): skip entirely when the user prefers reduced motion
   * so we never create an orphaned node whose `animationend` will not fire.
   */
  const spawnRipple = useCallback((e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layer = rippleLayerRef.current;
    if (!layer) return;

    /* Coordinates relative to the button (parent of the layer) */
    const rect = layer.parentElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ease-lra__ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    layer.appendChild(ripple);

    /* Remove after animation completes — safe because `animationend` will always fire
       when reduced-motion is off (we guard above). */
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }, []);

  /* Fix (handleKeyDown): removed. Native <button> already synthesises a click event
     on Enter and Space, so adding an onKeyDown that also calls onToggle would cause
     a double-toggle. We rely solely on onClick for all activation paths. */
  const handleClick = useCallback((e) => {
    if (item.disabled) return;
    spawnRipple(e);
    onToggle(item.id);
  }, [item, onToggle, spawnRipple]);

  return (
    <div
      className={`ease-lra__item${isOpen ? ' is-open' : ''}${item.disabled ? ' is-disabled' : ''}`}
      role="listitem"
    >
      {/* ── Header ─────────────────────────────────────── */}
      <button
        className="ease-lra__header"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={`ease-lra-body-${item.id}`}
        aria-disabled={item.disabled || undefined}
        id={`ease-lra-header-${item.id}`}
        disabled={item.disabled}
        type="button"
      >
        {/* Art Deco left accent bar */}
        <span className="ease-lra__accent-bar" aria-hidden="true" />

        {/* Optional icon */}
        {item.icon && (
          <span className="ease-lra__icon" aria-hidden="true">
            {item.icon}
          </span>
        )}

        {/* Title */}
        <span className="ease-lra__title">{item.title}</span>

        {/* Chevron */}
        <span className="ease-lra__chevron" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>

        {/* Dedicated ripple layer — React never renders children here,
            so imperative appendChild is safe from reconciler conflicts. */}
        <span className="ease-lra__ripple-layer" ref={rippleLayerRef} aria-hidden="true" />
      </button>

      {/* ── Body (collapsible) ──────────────────────────── */}
      {/* Fix (a11y): aria-hidden + inert hide closed panels from the
          accessibility tree and tab order while keeping CSS-driven
          collapse behavior intact. */}
      <div
        id={`ease-lra-body-${item.id}`}
        role="region"
        aria-labelledby={`ease-lra-header-${item.id}`}
        aria-hidden={!isOpen}
        /* `inert` removes closed panels from tab order and AT tree */
        {...(!isOpen ? { inert: '' } : {})}
        className="ease-lra__body-wrapper"
      >
        <div className="ease-lra__body">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default LiquidRippleAccordion;
