import { flushSync } from 'react-dom';

export function useViewTransition() {
  const morph = (callback) => {
    if (!document.startViewTransition) {
      callback();
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        callback();
      });
    });
  };

  return morph;
}
