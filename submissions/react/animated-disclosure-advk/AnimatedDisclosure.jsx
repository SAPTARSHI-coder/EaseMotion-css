import { useId, useState } from 'react';

/**
 * AnimatedDisclosure
 * A show/hide section that animates to its real content height using a
 * grid-template-rows 0fr -> 1fr transition, so no height measuring is needed.
 */
export default function AnimatedDisclosure({
  summary,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  className = '',
  ...rest
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const panelId = useId();

  const toggle = () => {
    const next = !open;
    if (!isControlled) setUncontrolledOpen(next);
    onToggle?.(next);
  };

  return (
    <div className={`adis ${open ? 'is-open' : ''} ${className}`.trim()} {...rest}>
      <button
        type="button"
        className="adis__btn"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        <span className="adis__chevron" aria-hidden="true" />
        {summary}
      </button>

      <div className="adis__panel" id={panelId} role="region" hidden={!open}>
        <div className="adis__inner">{children}</div>
      </div>
    </div>
  );
}
