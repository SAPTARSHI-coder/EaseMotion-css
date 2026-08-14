# usePrevious

Returns the value a component held on its previous render.

## API

```js
const previous = usePrevious(value);
```

## Usage

```jsx
function PriceTag({ price }) {
  const previousPrice = usePrevious(price);
  const direction = previousPrice === undefined || price === previousPrice
    ? null
    : price > previousPrice ? 'up' : 'down';
  return <span className={direction && `price-${direction}`}>{price}</span>;
}
```

## Why is it useful?

A common but broken version of this hook writes `ref.current = value`
directly in the render body instead of inside a `useEffect`. Refs mutated
during render are updated *before* the return statement executes, so
`ref.current` already equals the new `value` by the time it's read — the
hook silently always returns the current value, not the previous one, and
the bug only surfaces when someone diffs `previous` against `value` and
gets `false` for a genuine change.

Writing the ref inside a bodyless `useEffect(() => { ref.current = value; })`
(no dependency array — it runs after every render) defers the update until
after the browser has painted the current render, so the value read during
render is always the one from one render prior.
