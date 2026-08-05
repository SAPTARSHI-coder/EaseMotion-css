import React, { useEffect, useCallback, useRef } from "react";
import "./style.css";

/**
 * ShimmerPulseModal — React Modal with Shimmer Pulse for Minimalist Tech Layouts
 *
 * EaseMotion CSS utility classes used:
 *   Backdrop  : ease-fade-in
 *   Dialog    : ease-zoom-in ease-blur-to-focus     (entrance)
 *   Header bar: ease-shimmer-sweep                  (looping shimmer accent line)
 *   Loading   : ease-skeleton-shimmer               (skeleton loading state)
 *   Pulse ring: ease-pulse                          (optional status indicator)
 */

const SIZE_CLASS = {
  sm:   "spm-dialog--sm",
  md:   "spm-dialog--md",
  lg:   "spm-dialog--lg",
  full: "spm-dialog--full",
};

const ShimmerPulseModal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  loading = false,
  showShimmerBar = true,
  shimmerColor = "#6366f1",
  closeOnBackdrop = true,
  closeOnEsc = true,
  footer,
  className = "",
}) => {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  /* ── Trap focus inside dialog ── */
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (closeOnEsc && e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    },
    [isOpen, onClose, closeOnEsc]
  );

  /* ── Lock body scroll & manage focus ── */
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeBtnRef.current?.focus());
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      prev?.focus();
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="spm-backdrop ease-fade-in"
      role="presentation"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "spm-title" : undefined}
        aria-describedby={description ? "spm-desc" : undefined}
        className={`spm-dialog ease-zoom-in ease-blur-to-focus ${SIZE_CLASS[size] ?? SIZE_CLASS.md} ${className}`}
        style={{ "--spm-shimmer-color": shimmerColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Shimmer accent bar */}
        {showShimmerBar && (
          <div
            className="spm-shimmer-bar ease-shimmer-sweep"
            aria-hidden="true"
          />
        )}

        {/* Header */}
        <header className="spm-header">
          <div className="spm-header__text">
            {title && (
              <h2 id="spm-title" className="spm-title">
                {title}
              </h2>
            )}
            {description && (
              <p id="spm-desc" className="spm-description">
                {description}
              </p>
            )}
          </div>
          <button
            ref={closeBtnRef}
            className="spm-close"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </header>

        {/* Body */}
        <div className="spm-body">
          {loading ? (
            <div className="spm-skeleton" aria-busy="true" aria-label="Loading content">
              <div className="spm-skeleton__line ease-skeleton-shimmer spm-skeleton__line--w80" />
              <div className="spm-skeleton__line ease-skeleton-shimmer spm-skeleton__line--w60" />
              <div className="spm-skeleton__line ease-skeleton-shimmer spm-skeleton__line--w90" />
              <div className="spm-skeleton__gap" />
              <div className="spm-skeleton__line ease-skeleton-shimmer spm-skeleton__line--w70" />
              <div className="spm-skeleton__line ease-skeleton-shimmer spm-skeleton__line--w50" />
            </div>
          ) : (
            children
          )}
        </div>

        {/* Footer */}
        {footer && <footer className="spm-footer">{footer}</footer>}
      </div>
    </div>
  );
};

export default ShimmerPulseModal;
