import { useCallback, useState } from 'react';

/**
 * useToggle
 * Boolean state with a stable toggle function, plus explicit setTrue/
 * setFalse for cases where "flip" isn't the right operation (closing a
 * modal from an overlay click should always set false, never toggle).
 */
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, { toggle, setTrue, setFalse }];
}

export default useToggle;
