# useToggle

Boolean state with a stable `toggle` function plus explicit `setTrue`/
`setFalse` actions.

## API

```js
const [value, { toggle, setTrue, setFalse }] = useToggle(initial);
```

## Usage

```jsx
function Modal() {
  const [open, { setTrue: show, setFalse: hide }] = useToggle(false);
  return (
    <>
      <button onClick={show}>Open</button>
      {open && <Dialog onOverlayClick={hide} />}
    </>
  );
}
```

## Why is it useful?

A bare `useState(false)` plus an inline `() => setOpen(!open)` toggle
function is recreated on every render, which matters if it's passed to a
memoized child — a new function identity each render defeats
`React.memo`. `useCallback`-wrapped `toggle`/`setTrue`/`setFalse` here have
stable identity across renders since they use the functional updater form
and never close over `value` directly.

Exposing `setTrue`/`setFalse` alongside `toggle` matters because "toggle"
is the wrong operation for many real handlers: an overlay click should
always *close* a modal, never flip it open again if some other code path
already closed it first. A component that only had `toggle` available would
need to reconstruct the "always set false" behaviour itself; this hook
provides it directly.
