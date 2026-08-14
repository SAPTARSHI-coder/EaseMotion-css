import { useMemo, useState } from 'react';

/**
 * useBoolean
 * A lighter-weight sibling to useToggle: boolean state with stable
 * setTrue/setFalse/toggle actions, returned as a single memoized object
 * rather than a [value, actions] tuple, for call sites that prefer
 * destructuring named actions directly.
 */
export function useBoolean(initial = false) {
  const [value, setValue] = useState(initial);

  const actions = useMemo(
    () => ({
      setTrue: () => setValue(true),
      setFalse: () => setValue(false),
      toggle: () => setValue((v) => !v),
      set: (next) => setValue(next),
    }),
    []
  );

  return { value, ...actions };
}

export default useBoolean;
