import { useCallback, useState } from "react";

/**
 * useToggle — boolean state with a stable toggle function plus explicit
 * setTrue / setFalse.
 *
 * Operations like closing a modal from an overlay click need "always set
 * false", not a flip. The returned `toggle` flips, while `setTrue`/`setFalse`
 * are unconditional for those cases.
 *
 * @param {boolean} [initial=false] Initial value
 * @returns {[boolean, {toggle: Function, setTrue: Function, setFalse: Function, setValue: Function}]}
 *
 * @example
 *   const [open, { toggle, setFalse }] = useToggle(false);
 *   return <dialog open={open} onClick={setFalse}>{children}</dialog>;
 */
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, { toggle, setTrue, setFalse, setValue }];
}

export default useToggle;
