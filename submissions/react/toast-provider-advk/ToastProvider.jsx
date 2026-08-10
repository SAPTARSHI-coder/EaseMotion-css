import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

const ToastContext = createContext(null);

/**
 * ToastProvider
 * Queues toasts and caps how many render at once, so a burst of errors cannot
 * bury the page under a stack of notifications.
 */
export function ToastProvider({ children, max = 3, duration = 5000 }) {
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(0);
  const timers = useRef(new Map());

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const notify = useCallback(
    (message, { tone = 'info', duration: d = duration } = {}) => {
      const id = nextId.current++;
      setToasts((prev) => {
        const next = [...prev, { id, message, tone }];
        // Drop the oldest rather than growing without bound.
        return next.length > max ? next.slice(next.length - max) : next;
      });

      if (d > 0) {
        timers.current.set(id, setTimeout(() => dismiss(id), d));
      }
      return id;
    },
    [max, duration, dismiss]
  );

  const value = useMemo(() => ({ notify, dismiss }), [notify, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="tst" role="region" aria-label="Notifications">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`tst__i tst__i--${t.tone}`}
            role={t.tone === 'danger' ? 'alert' : 'status'}
            aria-live={t.tone === 'danger' ? 'assertive' : 'polite'}
          >
            <span>{t.message}</span>
            <button type="button" onClick={() => dismiss(t.id)} aria-label="Dismiss">&times;</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside a ToastProvider');
  return ctx;
}

export default ToastProvider;
