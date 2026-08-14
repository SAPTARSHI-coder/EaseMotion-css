# useToggle hook

A React hook providing boolean state with a stable `toggle` function plus explicit `setTrue` / `setFalse`.

## What it does
- `toggle` flips the boolean (stable identity via `useCallback`).
- `setTrue` / `setFalse` are unconditional, for cases that need "always set false" rather than a flip (e.g. closing a modal from an overlay click).

## Files
- `useToggle.js` — the hook
- `README.md` — this guide

## Usage
```jsx
import { useToggle } from "./useToggle";

function Modal({ children }) {
  const [open, { toggle, setFalse }] = useToggle(false);
  return (
    <div onClick={setFalse}>
      <button onClick={toggle}>{open ? "Close" : "Open"}</button>
      {open && <dialog onClick={(e) => e.stopPropagation()}>{children}</dialog>}
    </div>
  );
}
```

## Why not just toggle
Overlay-click-to-close must always set `false`, even if a child event already toggled state. `setFalse` guarantees that without depending on the previous value.

Closes #75554
