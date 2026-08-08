import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
} from "react";
import "./style.css";

/**
 * ShimmerModal — React Modal with Shimmer Pulse for Minimalist Tech Layouts
 * Issue #38589
 *
 * EaseMotion CSS utility classes used:
 *   Backdrop  : ease-fade-in
 *   Panel     : ease-zoom-in  (default) | ease-slide-up | ease-blur-to-focus
 *   Top bar   : ease-shimmer-sweep   (continuous shimmer accent)
 *   Skeleton  : ease-skeleton-shimmer (loading rows)
 *   Pulse dot : ease-pulse           (status badge indicator)
 */

/* ─────────────────────────────────────────────────────────────
   Context — lets nested buttons call onClose without prop drilling
───────────────────────────────────────────────────────────── */
const ModalContext = createContext(null);
export const useModal = () => useContext(ModalContext);

/* ─────────────────────────────────────────────────────────────
   Size presets
───────────────────────────────────────────────────────────── */
const SIZE = {
  xs:   "sm-panel--xs",
  sm:   "sm-panel--sm",
  md:   "sm-panel--md",
  lg:   "sm-panel--lg",
  xl:   "sm-panel--xl",
  full: "sm-panel--full",
};

/* ─────────────────────────────────────────────────────────────
   Entrance animation presets
───────────────────────────────────────────────────────────── */
const ENTRANCE = {
  zoom:    "ease-zoom-in",
  slide:   "ease-slide-up",
  blur:    "ease-blur-to-focus",
  fade:    "ease-fade-in",
};

/* ─────────────────────────────────────────────────────────────
   ShimmerModal
───────────────────────────────────────────────────────────── */
const ShimmerModal = ({
  /* Visibility */
  isOpen,
  onClose,

  /* Content slots */
  title,
  description,
  children,
  footer,

  /* Behaviour */
  size = "md",
  entrance = "zoom",
  closeOnBackdrop = true,
  closeOnEsc = true,

  /* Shimmer bar */
  showShimmerBar = true,
  shimmerColor = "#6366f1",

  /* Loading skeleton */
  loading = false,
  loadingRows = 4,

  /* Status badge (optional — shows a pulsing dot beside the title) */
  statusLabel,
  statusColor = "#22c55e",

  /* Extra classes */
  className = "",
}) => {
  const panelRef  = useRef(null);
  const closeRef  = useRef(null);
  const previousFocusRef = useRef(null);

  /* ── Focus trap ── */
  const getFocusable = useCallback(() => {
    if (!panelRef.current) return [];
    return Array.from(
      panelRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.disabled);
  }, []);

  /* ── Keyboard handler ── */
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && closeOnEsc) { onClose(); return; }
      if (e.key !== "Tab") return;
      const els = getFocusable();
      if (!els.length) return;
      if (e.shiftKey) {
        if (document.activeElement === els[0]) {
          e.preventDefault();
          els[els.length - 1].focus();
        }
      } else {
        if (document.activeElement === els[els.length - 1]) {
          e.preventDefault();
          els[0].focus();
        }
      }
    },
    [closeOnEsc, onClose, getFocusable]
  );

  /* ── Mount / unmount effects ── */
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Move focus to close button on next frame
    const id = requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(id);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onKeyDown]);

  if (!isOpen) return null;

  const entranceClass = ENTRANCE[entrance] ?? ENTRANCE.zoom;
  const sizeClass     = SIZE[size]     ?? SIZE.md;

  return (
    <ModalContext.Provider value={{ onClose }}>
      {/* Backdrop */}
      <div
        className="sm-backdrop ease-fade-in"
        role="presentation"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Panel wrapper — centred via flex on backdrop */}
      <div
        className="sm-positioner"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "sm-title" : undefined}
        aria-describedby={description ? "sm-desc" : undefined}
      >
        <div
          ref={panelRef}
          className={`sm-panel ${sizeClass} ${entranceClass} ${className}`}
          style={{ "--sm-shimmer-color": shimmerColor }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Shimmer accent bar */}
          {showShimmerBar && (
            <span className="sm-shimmer-bar ease-shimmer-sweep" aria-hidden="true" />
          )}

          {/* Header */}
          {(title || description) && (
            <header className="sm-header">
              <div className="sm-header__left">
                {statusLabel && (
                  <span
                    className="sm-status"
                    style={{ "--sm-status-color": statusColor }}
                    aria-label={`Status: ${statusLabel}`}
                  >
                    <span className="sm-status__dot ease-pulse" aria-hidden="true" />
                    {statusLabel}
                  </span>
                )}
                {title && <h2 id="sm-title" className="sm-title">{title}</h2>}
                {description && (
                  <p id="sm-desc" className="sm-description">{description}</p>
                )}
              </div>
              <button
                ref={closeRef}
                type="button"
                className="sm-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </header>
          )}

          {/* Body */}
          <div className="sm-body">
            {loading ? (
              <ShimmerSkeleton rows={loadingRows} />
            ) : (
              children
            )}
          </div>

          {/* Footer */}
          {footer && <footer className="sm-footer">{footer}</footer>}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

/* ─────────────────────────────────────────────────────────────
   ShimmerSkeleton — loading placeholder
   Uses EaseMotion's ease-skeleton-shimmer class
───────────────────────────────────────────────────────────── */
const WIDTHS = ["w90", "w70", "w85", "w55", "w75", "w65"];

const ShimmerSkeleton = ({ rows = 4 }) => (
  <div className="sm-skeleton" aria-busy="true" aria-label="Loading content">
    {Array.from({ length: rows }, (_, i) => (
      <span
        key={i}
        className={`sm-skeleton__row ease-skeleton-shimmer sm-skeleton__row--${WIDTHS[i % WIDTHS.length]}`}
        style={{ animationDelay: `${i * 80}ms` }}
      />
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────
   ModalButton — convenience button that calls onClose from context
───────────────────────────────────────────────────────────── */
export const ModalButton = ({ children, variant = "secondary", onClick, ...rest }) => {
  const ctx = useModal();
  const handleClick = () => {
    onClick?.();
    if (variant === "cancel") ctx?.onClose();
  };
  return (
    <button
      type="button"
      className={`sm-btn sm-btn--${variant}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export { ShimmerSkeleton };
export default ShimmerModal;
