import React, { useEffect, useId, useRef, useState } from 'react';
import './style.css';

/**
 * FlashDrawer — drawer that flashes before exiting when closed.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Drawer content
 * @param {string} [props.className=""] - Extra class names
 * @param {string} [props.title="Drawer"] - Accessible title
 * @param {boolean} [props.defaultOpen=true] - Start open
 */
const FlashDrawer = ({
  children,
  className = '',
  title = 'Drawer',
  defaultOpen = true,
  ...rest
}) => {
  const titleId = useId();
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!exiting) return undefined;
    const panel = panelRef.current;
    if (!panel) return undefined;

    const onEnd = () => {
      setOpen(false);
      setExiting(false);
    };

    panel.addEventListener('animationend', onEnd);
    return () => panel.removeEventListener('animationend', onEnd);
  }, [exiting]);

  if (!open && !exiting) {
    return (
      <button
        type="button"
        className="flash-drawer-sum__reopen"
        onClick={() => setOpen(true)}
      >
        Open drawer
      </button>
    );
  }

  const requestClose = () => setExiting(true);

  return (
    <div
      className={`flash-drawer-sum ${exiting ? 'flash-drawer-sum--exiting' : ''} ${className}`.trim()}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      {...rest}
    >
      <div
        className="flash-drawer-sum__backdrop"
        onClick={requestClose}
        aria-hidden="true"
      />
      <aside
        ref={panelRef}
        className="flash-drawer-sum__panel"
        tabIndex={-1}
      >
        <header className="flash-drawer-sum__header">
          <h2 id={titleId} className="flash-drawer-sum__title">
            {title}
          </h2>
          <button
            type="button"
            className="flash-drawer-sum__close"
            onClick={requestClose}
            aria-label="Close drawer"
          >
            ×
          </button>
        </header>
        <div className="flash-drawer-sum__body">{children}</div>
      </aside>
    </div>
  );
};

export default FlashDrawer;
