# useClampValue

Numeric state that's always kept within a `[min, max]` range, re-clamping
on every update rather than only at initialization.

## API

```js
const [value, setValue] = useClampValue(initial, min, max);
```

`setValue` accepts either a new value or an updater function, matching
`useState`'s setter signature — the resolved result is clamped either way.

## Usage

```jsx
function QuantityStepper({ stock }) {
  // max is derived from a prop that can itself change (stock level updates).
  const [qty, setQty] = useClampValue(1, 1, stock);

  return (
    <>
      <button onClick={() => setQty((q) => q - 1)}>−</button>
      <span>{qty}</span>
      <button onClick={() => setQty((q) => q + 1)}>+</button>
    </>
  );
}
```

## Why is it useful?

Clamping is easy to get half-right by hand: a common pattern clamps the
*initial* value passed to `useState` but leaves subsequent `setValue` calls
unclamped, on the assumption that increment/decrement buttons will simply
be disabled at the bounds — which breaks the moment the value can change
through a path that doesn't go through those buttons (typing directly into
a paired number input, or `max` itself shrinking below the current value
because of external state like `stock` above). This hook clamps on every
single `setValue` call, including ones from a functional updater, so the
value is provably always in range regardless of how it's changed or
whether `min`/`max` themselves have moved since the last render.

Re-clamping specifically matters for a shrinking `max`: if `stock` in the
example above drops from 10 to 3 while `qty` is currently 7, the very next
`setQty` call (even one that doesn't intend to change much, like `q => q`)
brings the value back into range — a plain `useState` holding `qty` would
otherwise stay silently out of bounds until something explicitly
re-clamped it.

## A remaining gap: external bound changes with no set call

There's one case this hook doesn't cover automatically: if `max` shrinks
below the current value and *nothing* calls `setValue` afterward, `value`
stays stale and out of range until the next update — clamping only runs
inside `setValue` itself, not as a side effect of `min`/`max` changing on
their own. For cases where the displayed value must always reflect the
current bounds even with no further interaction, pair this hook with a
`useEffect` that re-syncs on `[min, max]`:

```jsx
const [qty, setQty] = useClampValue(1, 1, stock);

useEffect(() => {
  setQty((q) => q); // re-clamp against the latest min/max
}, [stock]); // eslint-disable-line react-hooks/exhaustive-deps
```

This is deliberately left out of the hook itself — not every consumer
wants automatic re-sync on bound changes (a form field mid-edit might
prefer to clamp only on blur, for instance), so the hook provides the
clamping primitive and leaves the "when" to the caller.

## Comparison to clamping only in the UI layer

An alternative to this hook is leaving state unclamped and only clamping
the *displayed* value (`Math.min(max, Math.max(min, value))` computed at
render time), which avoids the "external bound change" gap above since the
display always reflects current bounds. The tradeoff is that the
underlying state can silently diverge from what's shown — a value of `15`
sitting in state while the UI displays a clamped `10` means any logic
reading `value` directly downstream (form submission, a derived
calculation) sees the wrong number unless it also remembers to clamp.
`useClampValue` keeps state itself always valid instead, at the cost of the
gap described above for out-of-band bound changes.
