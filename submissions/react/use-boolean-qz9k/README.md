# useBoolean

Boolean state with named `setTrue`/`setFalse`/`toggle`/`set` actions,
returned as a single object rather than an array tuple.

## API

```js
const { value, setTrue, setFalse, toggle, set } = useBoolean(initial);
```

## Usage

```jsx
function Accordion() {
  const { value: open, toggle, setFalse: close } = useBoolean(false);
  return (
    <>
      <button onClick={toggle}>{open ? 'Hide' : 'Show'} details</button>
      {open && <Details onRequestClose={close} />}
    </>
  );
}
```

## Why is it useful?

This hook and `useToggle` (elsewhere in this repo) solve the same
underlying problem — boolean state with stable, named mutators — but return
it in two different shapes on purpose. `useToggle` returns a `[value,
actions]` tuple, matching `useState`'s own convention and reading naturally
at the call site as "the value, and a bag of ways to change it."
`useBoolean` instead returns one flat object, which suits call sites that
want to destructure and rename individual actions inline (`{ value: open,
setFalse: close }`, as above) without a second destructuring step to pull
fields out of a nested actions object. Neither shape is objectively better
— which one reads more naturally depends on how many of the actions a given
call site actually uses and whether it wants to rename them.

All actions are memoized once via a single `useMemo` (rather than several
separate `useCallback` calls) and never change identity across renders,
since none of them close over `value` directly — each uses either a
constant or the functional updater form, so nothing about a re-render
requires recreating them.

## Why value isn't inside the memoized object

`value` deliberately sits outside the `useMemo`'d `actions` object and is
spread onto the return value separately:

```js
return { value, ...actions };
```

If `value` were included inside the same `useMemo` call, the memo would
either need `value` in its dependency array (defeating the point — the
whole object, including the stable action references, would be recreated
on every value change) or it would return a stale `value` frozen at first
render. Keeping `value` outside means the returned object's shape updates
naturally every render (as it must, since `value` is exactly what
changes), while the action functions nested inside it keep their stable
identity across all of those renders.

## Passing actions down without passing value

Because the actions have stable identity independent of `value`, they can
be handed to a memoized child component without that child re-rendering
whenever `value` itself changes — useful when a toggle's trigger button
lives far from whatever reads the current boolean state:

```jsx
function Menu() {
  const { value: open, toggle, setFalse: close } = useBoolean(false);
  return (
    <>
      <MemoizedTriggerButton onClick={toggle} />
      {open && <MemoizedMenuPanel onClose={close} />}
    </>
  );
}
```

`MemoizedTriggerButton` only ever receives the same `toggle` function
reference, so a `React.memo`-wrapped version of it never re-renders due to
this hook, regardless of how often `value` flips.
