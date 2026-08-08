import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { createPortal } from "react-dom";

const MotionPortalBridge = ({
  isOpen,
  triggerRef,
  enterClass = "ease-fade-in",
  exitClass = "ease-fade-out",
  portalClass = "motion-portal-content",
  duration = 300,
  portalTarget,
  onEnterStart,
  onEnterEnd,
  onExitStart,
  onExitEnd,
  children,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationClass, setAnimationClass] = useState("");

  const timeoutRef = useRef(null);
  const rafRef = useRef(null);

  const clearPending = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearPending();

    if (isOpen) {
      setShouldRender(true);
      onEnterStart?.();

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          setAnimationClass(enterClass);
        });
      });

      timeoutRef.current = setTimeout(() => {
        onEnterEnd?.();
      }, duration);
    } else if (shouldRender) {
      onExitStart?.();
      setAnimationClass(exitClass);

      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
        setAnimationClass("");
        onExitEnd?.();

        if (triggerRef?.current) {
          triggerRef.current.focus?.();
        }
      }, duration);
    }

    return clearPending;
  }, [isOpen, duration, enterClass, exitClass, clearPending]);

  useEffect(() => clearPending, [clearPending]);

  const anchorStyle = useMemo(() => {
    if (!triggerRef?.current || !shouldRender) return undefined;
    const rect = triggerRef.current.getBoundingClientRect();
    return {
      "--motion-trigger-top": `${rect.top}px`,
      "--motion-trigger-left": `${rect.left}px`,
      "--motion-trigger-width": `${rect.width}px`,
      "--motion-trigger-height": `${rect.height}px`,
    };
  }, [triggerRef, shouldRender, isOpen]);

  if (!shouldRender) return null;

  const target =
    portalTarget || (typeof document !== "undefined" ? document.body : null);
  if (!target) return null;

  return createPortal(
    <div
      className={[portalClass, animationClass].filter(Boolean).join(" ")}
      style={anchorStyle}
      data-motion-state={isOpen ? "entering" : "exiting"}
    >
      {children}
    </div>,
    target
  );
};

export default MotionPortalBridge;
