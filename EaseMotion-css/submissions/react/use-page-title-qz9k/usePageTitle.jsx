import { useEffect, useRef } from 'react';

/**
 * usePageTitle
 * Sets document.title while the component is mounted, restoring whatever
 * title was present before mounting when it unmounts -- so a component
 * setting its own title (a detail page, a modal) doesn't permanently
 * overwrite the title a parent route already set, once it's gone.
 */
export function usePageTitle(title, { restoreOnUnmount = true } = {}) {
  const previousTitleRef = useRef(typeof document !== 'undefined' ? document.title : '');

  useEffect(() => {
    previousTitleRef.current = document.title;
    document.title = title;

    return () => {
      if (restoreOnUnmount) document.title = previousTitleRef.current;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, restoreOnUnmount]);
}

export default usePageTitle;
