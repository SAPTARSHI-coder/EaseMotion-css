# useRenderCount

Two small development-time debugging hooks: `useRenderCount` reports how
many times the calling component has rendered, and `useWhyDidYouUpdate`
logs which named props changed identity since the previous render.

## API

```js
const renders = useRenderCount();
useWhyDidYouUpdate('MyComponent', props);
```

## Usage

```jsx
function ExpensiveChart(props) {
  useWhyDidYouUpdate('ExpensiveChart', props);
  const renders = useRenderCount();
  return <div data-render-count={renders}><Chart {...props} /></div>;
}
```

## Why is it useful?

"Why does this component re-render so often" is a question that's
surprisingly tedious to answer by inspection alone, especially once a
component takes half a dozen props and only one of them is actually
changing on each parent re-render. `useWhyDidYouUpdate` does the diffing
work directly: it keeps the previous render's props in a ref, and on every
subsequent render, logs exactly which prop keys hold a different reference
now versus last time — which reliably surfaces the common cause of an inline
object or arrow function literal passed as a prop, since those get a new
reference on every parent render even when their contents are identical.

`useRenderCount` is the simpler companion: a raw count is often enough to
confirm *whether* excessive re-rendering is even happening before reaching
for the heavier prop-diffing tool. Both are meant for temporary use while
debugging performance, not for shipping in application logic — they exist
to answer a question during development, not to feed a decision at runtime.

## Reading a suspiciously high render count

A render count alone can't say *why* a component re-rendered, but a rapidly
climbing number relative to user interaction is usually enough to confirm
there's a problem worth investigating with `useWhyDidYouUpdate`:

```jsx
function ProductCard({ product, onAddToCart }) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    console.log('ProductCard render #', useRenderCount());
  }
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <button onClick={() => onAddToCart(product.id)}>Add to cart</button>
    </div>
  );
}
```

If that count climbs on every keystroke in an unrelated search box
elsewhere on the page, `useWhyDidYouUpdate('ProductCard', { product,
onAddToCart })` is the next step — it will usually point at `onAddToCart`
being a new inline arrow function on every parent render, which is fixable
with `useCallback` at the definition site.

## A note on the conditional hook call above

Calling `useRenderCount()` inside an `if` block violates the Rules of
Hooks in the general case, since hook call order must stay identical
across renders. It's safe here specifically because
`process.env.NODE_ENV` is a build-time constant that never changes between
renders of the same bundle — the branch is resolved once at build time, not
per-render, so the hook's call order is actually stable across the
component's lifetime. This is a narrow, well-understood exception, not a
general pattern for conditional hook calls.

## Removing debug instrumentation before shipping

Because both hooks are development aids, it's worth stripping calls to
them (or gating them behind `NODE_ENV` checks as shown above) before
shipping to production — `useWhyDidYouUpdate`'s `console.log` calls in
particular have a real, if small, runtime cost from the prop-diffing work
on every render, which is a class of cost application code has no reason to
pay outside of active debugging.
