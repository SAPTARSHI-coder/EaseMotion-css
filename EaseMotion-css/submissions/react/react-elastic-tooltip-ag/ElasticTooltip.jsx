import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./style.css";

/**
 * ElasticTooltip Component
 *
 * A premium React tooltip with an elastic slide transition, portal-based positioning,
 * and viewport overflow collision containment. Designed for responsive dashboard layouts.
 *
 * @param {React.ReactNode} content - The tooltip message or content.
 * @param {string} position - 'top' | 'bottom' | 'left' | 'right' (default: 'top').
 * @param {string} align - 'start' | 'center' | 'end' (default: 'center').
 * @param {string} trigger - 'hover' | 'focus' | 'click' | 'manual' (default: 'hover').
 * @param {boolean} visible - Controls visibility when trigger is 'manual'.
 * @param {number} delayShow - Delay in ms before showing the tooltip (default: 0).
 * @param {number} delayHide - Delay in ms before hiding the tooltip (default: 100).
 * @param {boolean} arrow - Whether to show the arrow pointer (default: true).
 * @param {string} theme - 'glass' | 'glass-light' | 'glass-dark' | 'dashboard' | 'dark' | 'light' (default: 'glass').
 * @param {boolean} portal - Render tooltip at body level via portal to prevent overflow cuts (default: true).
 * @param {string} width - 'normal' | 'wide' | 'full' (default: 'normal').
 * @param {string} className - Additional CSS class for customization.
 * @param {object} style - Additional inline styles for the tooltip content.
 * @param {React.ReactNode} children - The trigger element.
 */
const ElasticTooltip = ({
  content,
  position = "top",
  align = "center",
  trigger = "hover",
  visible = false,
  delayShow = 0,
  delayHide = 100,
  arrow = true,
  theme = "glass",
  portal = true,
  width = "normal",
  className = "",
  style = {},
  children,
}) => {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [arrowOffset, setArrowOffset] = useState({ x: null, y: null });

  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const showTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  // Validate children count (must be a single element)
  const child = React.Children.only(children);

  // Sync manual visibility prop
  useEffect(() => {
    if (trigger === "manual") {
      setActive(!!visible);
    }
  }, [visible, trigger]);

  // Handle mounting and unmounting animations
  useEffect(() => {
    let timeoutId;
    if (active) {
      setMounted(true);
      // Brief delay to allow the element to mount and DOM styles to settle,
      // enabling smooth CSS transitions to play.
      timeoutId = setTimeout(() => {
        setIsOpen(true);
      }, 20);
    } else {
      setIsOpen(false);
      // Wait for the exit animation to complete before unmounting
      timeoutId = setTimeout(() => {
        setMounted(false);
      }, 420); // Matches CSS transition speed
    }
    return () => clearTimeout(timeoutId);
  }, [active]);

  // Clean timeouts on unmount
  useEffect(() => {
    return () => {
      clearTimeout(showTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // Update positioning coordinates
  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const gap = 8; // Offset spacing between trigger and tooltip

    let top = 0;
    let left = 0;

    if (portal) {
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      const targetTop = triggerRect.top + scrollY;
      const targetLeft = triggerRect.left + scrollX;

      // 1. Calculate base coordinates relative to document body
      if (position === "top") {
        top = targetTop - tooltipRect.height - gap;
        left = targetLeft + triggerRect.width / 2 - tooltipRect.width / 2;
      } else if (position === "bottom") {
        top = targetTop + triggerRect.height + gap;
        left = targetLeft + triggerRect.width / 2 - tooltipRect.width / 2;
      } else if (position === "left") {
        top = targetTop + triggerRect.height / 2 - tooltipRect.height / 2;
        left = targetLeft - tooltipRect.width - gap;
      } else if (position === "right") {
        top = targetTop + triggerRect.height / 2 - tooltipRect.height / 2;
        left = targetLeft + triggerRect.width + gap;
      }

      // Align adjustments for top/bottom
      if (position === "top" || position === "bottom") {
        if (align === "start") {
          left = targetLeft;
        } else if (align === "end") {
          left = targetLeft + triggerRect.width - tooltipRect.width;
        }
      }

      // Align adjustments for left/right
      if (position === "left" || position === "right") {
        if (align === "start") {
          top = targetTop;
        } else if (align === "end") {
          top = targetTop + triggerRect.height - tooltipRect.height;
        }
      }

      // 2. Viewport Collision Containment (clamping within screen boundaries)
      const viewportMinX = gap;
      const viewportMaxX = window.innerWidth - tooltipRect.width - gap;
      const viewportMinY = gap;
      const viewportMaxY = window.innerHeight - tooltipRect.height - gap;

      const clampedLeft = Math.max(viewportMinX, Math.min(viewportMaxX, left));
      const clampedTop = Math.max(viewportMinY, Math.min(viewportMaxY, top));

      setCoords({ top: clampedTop, left: clampedLeft });

      // 3. Dynamic Arrow Pointer shift
      const targetCenterBodyX = targetLeft + triggerRect.width / 2;
      const targetCenterBodyY = targetTop + triggerRect.height / 2;

      if (position === "top" || position === "bottom") {
        const arrowX = targetCenterBodyX - clampedLeft;
        // Clamp arrow within tooltip content body limits
        const clampedArrowX = Math.max(
          12,
          Math.min(tooltipRect.width - 12, arrowX)
        );
        setArrowOffset({ x: clampedArrowX, y: null });
      } else {
        const arrowY = targetCenterBodyY - clampedTop;
        // Clamp arrow within tooltip content body limits
        const clampedArrowY = Math.max(
          12,
          Math.min(tooltipRect.height - 12, arrowY)
        );
        setArrowOffset({ x: null, y: clampedArrowY });
      }
    } else {
      // Inline absolute positioning relative to trigger's inline parent wrapper
      if (position === "top") {
        top = -(tooltipRect.height + gap);
        left = triggerRect.width / 2 - tooltipRect.width / 2;
      } else if (position === "bottom") {
        top = triggerRect.height + gap;
        left = triggerRect.width / 2 - tooltipRect.width / 2;
      } else if (position === "left") {
        top = triggerRect.height / 2 - tooltipRect.height / 2;
        left = -(tooltipRect.width + gap);
      } else if (position === "right") {
        top = triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.width + gap;
      }

      if (position === "top" || position === "bottom") {
        if (align === "start") left = 0;
        if (align === "end") left = triggerRect.width - tooltipRect.width;
      } else {
        if (align === "start") top = 0;
        if (align === "end") top = triggerRect.height - tooltipRect.height;
      }

      setCoords({ top, left });
      setArrowOffset({ x: null, y: null }); // Uses centered default CSS position
    }
  };

  // Recalculate coordinates on scroll, resize, or when content opens
  useEffect(() => {
    if (mounted) {
      updatePosition();

      // Listen on capture phase to catch scroll events inside dashboard widgets/panels
      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [mounted, position, align, portal]);

  // Recalculate position as soon as entrance class is applied
  useEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen]);

  const showTooltip = () => {
    if (trigger === "manual") return;
    clearTimeout(hideTimeoutRef.current);
    if (delayShow > 0) {
      showTimeoutRef.current = setTimeout(() => {
        setActive(true);
      }, delayShow);
    } else {
      setActive(true);
    }
  };

  const hideTooltip = () => {
    if (trigger === "manual") return;
    clearTimeout(showTimeoutRef.current);
    if (delayHide > 0) {
      hideTimeoutRef.current = setTimeout(() => {
        setActive(false);
      }, delayHide);
    } else {
      setActive(false);
    }
  };

  // Click outside to dismiss tooltips (only when trigger = 'click')
  useEffect(() => {
    if (trigger !== "click" || !active) return;

    const handleClickOutside = (e) => {
      const triggerEl = triggerRef.current;
      const tooltipEl = tooltipRef.current;

      if (
        (triggerEl && triggerEl.contains(e.target)) ||
        (tooltipEl && tooltipEl.contains(e.target))
      ) {
        return;
      }
      setActive(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [trigger, active]);

  // Triangulation: Prevent closure if user hovers into the tooltip portal
  const handleTooltipMouseEnter = () => {
    if (trigger === "hover") {
      clearTimeout(hideTimeoutRef.current);
      setActive(true);
    }
  };

  const handleTooltipMouseLeave = () => {
    if (trigger === "hover") {
      hideTooltip();
    }
  };

  // Generate event listeners based on trigger type
  const triggerProps = {
    ref: (node) => {
      triggerRef.current = node;
      const { ref: childRef } = child;
      if (typeof childRef === "function") {
        childRef(node);
      } else if (childRef && typeof childRef === "object") {
        childRef.current = node;
      }
    },
  };

  if (trigger === "hover") {
    triggerProps.onMouseEnter = (e) => {
      child.props.onMouseEnter?.(e);
      showTooltip();
    };
    triggerProps.onMouseLeave = (e) => {
      child.props.onMouseLeave?.(e);
      hideTooltip();
    };
    triggerProps.onFocus = (e) => {
      child.props.onFocus?.(e);
      showTooltip();
    };
    triggerProps.onBlur = (e) => {
      child.props.onBlur?.(e);
      hideTooltip();
    };
  } else if (trigger === "focus") {
    triggerProps.onFocus = (e) => {
      child.props.onFocus?.(e);
      showTooltip();
    };
    triggerProps.onBlur = (e) => {
      child.props.onBlur?.(e);
      hideTooltip();
    };
  } else if (trigger === "click") {
    triggerProps.onClick = (e) => {
      child.props.onClick?.(e);
      if (active) {
        hideTooltip();
      } else {
        showTooltip();
      }
    };
  }

  // Construct the tooltip popup element
  const tooltipElement = mounted && (
    <div
      className="ease-elastic-tooltip-container"
      style={{
        top: `${coords.top}px`,
        left: `${coords.left}px`,
      }}
    >
      <div
        ref={tooltipRef}
        className={`ease-elastic-tooltip-content position-${position} theme-${theme} ${width !== "normal" ? width : ""} ${!arrow ? "no-arrow" : ""} ${isOpen ? "open" : ""} ${className}`}
        style={{
          ...style,
          "--ease-tooltip-arrow-left":
            arrowOffset.x !== null ? `${arrowOffset.x}px` : undefined,
          "--ease-tooltip-arrow-top":
            arrowOffset.y !== null ? `${arrowOffset.y}px` : undefined,
        }}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseLeave={handleTooltipMouseLeave}
        role="tooltip"
        aria-hidden={!isOpen}
      >
        {content}
      </div>
    </div>
  );

  if (!portal) {
    return (
      <div className="ease-elastic-tooltip-inline-wrapper">
        {React.cloneElement(child, triggerProps)}
        {tooltipElement}
      </div>
    );
  }

  const portalRoot = typeof document !== "undefined" ? document.body : null;

  return (
    <>
      {React.cloneElement(child, triggerProps)}
      {portalRoot &&
        ReactDOM.createPortal(
          <div className="ease-elastic-tooltip-portal-wrapper">
            {tooltipElement}
          </div>,
          portalRoot
        )}
    </>
  );
};

export default ElasticTooltip;
