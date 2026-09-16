# useHover

Reports whether the referenced DOM element is currently hovered, using
`pointerenter`/`pointerleave` so touch input doesn't get stuck "hovered"
after a tap.

## API

```js
const [ref, hovered] = useHover();
```

## Usage

```jsx
function Card() {
  const [ref, hovered] = useHover();
  return <div ref={ref}>{hovered ? 'Hovering!' : 'Hover me'}</div>;
}
```

## Why is it useful?

Versions of this hook built on `mouseenter`/`mouseleave` fire those events
for touch taps on many mobile browsers (as a compatibility shim for sites
that only handle mouse events), which leaves `hovered` stuck `true` after a
tap since no corresponding `mouseleave` follows. `pointerenter`/
`pointerleave` are pointer-type aware and don't carry that same touch
compatibility baggage, so tapping a card on mobile doesn't leave it visually
"stuck" in a hover state.

The hook returns a callback ref rather than a plain `useRef` object so it
correctly re-attaches its listeners if the underlying DOM node is swapped
out (e.g. conditional rendering changing the element type) — a plain ref
would keep listening on the old, now-detached node.
