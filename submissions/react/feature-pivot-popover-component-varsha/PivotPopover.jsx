import { useState, useRef, useEffect, useId } from 'react';
import './style.css';

/**
 * PivotPopover — a popover that animates in with a smooth pivot
 * (rotate + scale) from its trigger element.
 *
 * Usage:
 *   <PivotPopover trigger={<button>Open</button>}>
 *     <p>Popover content</p>
 *   </PivotPopover>
 */
export default function PivotPopover({ trigger, children, disabled = false }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const popoverId = useId();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleOpen = () => {
    if (!disabled) setOpen((prev) => !prev);
  };

  return (
    <div className="pivot-popover-wrapper-varsha" ref={wrapperRef}>
      <button
        type="button"
        className="pivot-popover-trigger-varsha"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={popoverId}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={toggleOpen}
      >
        {trigger}
      </button>

      {open && (
        <div
          id={popoverId}
          role="dialog"
          className="pivot-popover-panel-varsha"
        >
          {children}
        </div>
      )}
    </div>
  );
}
