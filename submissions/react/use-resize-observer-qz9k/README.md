# useResizeObserver

Reports a ref'd element's content-box dimensions, updating live via
`ResizeObserver` whenever the element's own size changes.

## API

```js
const { width, height } = useResizeObserver(targetRef);
```

## Usage

```jsx
function ResponsiveChart() {
  const containerRef = useRef(null);
  const { width, height } = useResizeObserver(containerRef);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '20rem' }}>
      {width > 0 && <Chart width={width} height={height} />}
    </div>
  );
}
```

## Why is it useful?

`useWindowSize` (elsewhere in this repo) reports the *viewport's*
dimensions, which is the right signal for layout decisions tied to screen
size — but a component's own rendered size can change for reasons that
have nothing to do with the viewport: a resizable split-pane panel being
dragged, a sidebar collapsing, or the component's own content growing
enough to change its container's size in a flex/grid layout.
`ResizeObserver` reports exactly the element's own box, independent of
what causes it to change — window resize, layout changes elsewhere on the
page, or direct user resizing — so a chart or canvas that needs to redraw
at its container's actual current size doesn't need three separate
listeners (window resize, a specific panel's own resize event, a
MutationObserver for layout-affecting DOM changes) to cover every way its
size might change.

Reading `entry.contentBoxSize[0]` (the modern, standards-track API) with a
fallback to `entry.contentRect` (the older API still present for
backward compatibility in some engines) means the hook works correctly
across the range of `ResizeObserver` implementations currently in use,
rather than assuming every browser has caught up to the newest version of
the spec.

## Avoiding a resize-triggered layout loop

A component that both observes its own size *and* changes its own size
based on that observed value (setting `width`/`height` in response to
`useResizeObserver`'s output) can enter an infinite resize loop — the
observed size change triggers a style update, which triggers another
resize observation, indefinitely. `ResizeObserver` itself has built-in
loop-detection that stops delivering notifications if this happens (and
logs a console error), but the safer pattern is simply not writing size
back onto the observed element itself:

```jsx
// Safe: observed size drives a DIFFERENT element's rendering (a canvas,
// a child chart), not the observed container's own dimensions.
function Chart() {
  const containerRef = useRef(null);
  const { width, height } = useResizeObserver(containerRef);
  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <canvas width={width} height={height} />
    </div>
  );
}
```

## Zero-size initial state

The hook returns `{ width: 0, height: 0 }` until the observer's first
callback fires (which happens asynchronously, shortly after the element
mounts), so consumers rendering something conditionally based on a
non-zero size — as in the `ResponsiveChart` example above — should guard
against that initial zero state rather than assuming a real measurement is
available on the very first render.

## Multiple elements

Each call to `useResizeObserver` creates and manages its own
`ResizeObserver` instance scoped to one target. For a component that needs
to track several elements' sizes simultaneously, call the hook once per
ref rather than trying to share a single observer instance across
multiple targets — the per-call overhead of a `ResizeObserver` instance
is small, and keeping observers scoped per-hook-call keeps the cleanup
logic (disconnecting exactly the observer this specific call created)
simple and correct.
