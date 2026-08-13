import { useEffect, useRef } from 'react';

/**
 * useRenderCount
 * Returns how many times the calling component has rendered, including the
 * current render. Intended for development-time debugging of unexpected
 * re-render frequency, not as a value consumed in application logic.
 */
export function useRenderCount() {
  const countRef = useRef(0);
  countRef.current += 1;
  return countRef.current;
}

/**
 * useWhyDidYouUpdate
 * Logs which named props changed identity since the previous render, to
 * help track down a re-render caused by a prop that "looks the same" but
 * is a new object/array/function reference each time.
 */
export function useWhyDidYouUpdate(name, props) {
  const previousRef = useRef();

  useEffect(() => {
    if (previousRef.current) {
      const changed = {};
      Object.keys({ ...previousRef.current, ...props }).forEach((key) => {
        if (previousRef.current[key] !== props[key]) {
          changed[key] = { from: previousRef.current[key], to: props[key] };
        }
      });
      if (Object.keys(changed).length) {
        // eslint-disable-next-line no-console
        console.log('[why-did-you-update]', name, changed);
      }
    }
    previousRef.current = props;
  });
}

export default useRenderCount;
