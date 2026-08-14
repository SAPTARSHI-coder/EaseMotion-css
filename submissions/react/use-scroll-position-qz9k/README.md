# useScrollPosition

Tracks scroll position of `window` or a specific ref'd element, throttled
to at most one state update per animation frame.

## API

```js
const { x, y } = useScrollPosition(target);
```

`target` is optional — a ref object, a DOM node, or omitted entirely for
`window`.

## Usage

```jsx
function StickyHeader() {
  const { y } = useScrollPosition();
  return <header className={y > 100 ? 'header--shrunk' : ''}>...</header>;
}

function ScrollableList() {
  const listRef = useRef(null);
  const { y } = useScrollPosition(listRef);
  return <div ref={listRef}>{y > 500 && <BackToTopButton />}</div>;
}
```

## Why is it useful?

The `scroll` event fires far more often than a component can usefully
re-render in response to — on a fast trackpad swipe or momentum scroll, it
can fire dozens of times per second, and calling `setState` on every single
event queues far more re-renders than the browser can actually paint,
most of which are wasted work discarded before ever reaching the screen.
Coalescing updates to one per animation frame (tracked via a
`pendingFrame` flag that's only cleared once the scheduled frame actually
runs) means a burst of scroll events during a fast gesture produces at
most one `setState` per repaint — matching the rate the browser can
actually show something new at, rather than the much higher rate the
`scroll` event itself fires.

The `{ passive: true }` listener option tells the browser this listener
never calls `preventDefault()`, which lets the browser start scrolling
immediately without waiting to see whether the handler will block it —
omitting `passive: true` on a scroll listener is a common, measurable
source of scroll jank, since the browser has to run the handler
synchronously before committing to the scroll otherwise.

## Tracking window vs. an element

Calling the hook with no argument tracks `window`'s scroll position;
passing a ref tracks that specific scrollable element instead. Both share
identical throttling and cleanup logic — the only difference is which
node's `scrollLeft`/`scrollTop` (or `scrollX`/`scrollY` for window) is read:

```jsx
function Page() {
  const { y: pageY } = useScrollPosition(); // window
  const panelRef = useRef(null);
  const { y: panelY } = useScrollPosition(panelRef); // a specific element

  return (
    <>
      {pageY > 300 && <BackToTop />}
      <div ref={panelRef} style={{ overflowY: 'auto', height: '20rem' }}>
        {panelY > 100 && <PanelScrollIndicator />}
      </div>
    </>
  );
}
```

## Deriving scroll direction

The hook only reports absolute position, not direction — a consumer
wanting "is the user scrolling up or down" (common for a header that hides
on scroll-down, reveals on scroll-up) derives it by comparing the current
value against the previous one, which composes naturally with
`usePreviousDistinct` (also in this submission set):

```jsx
function AutoHideHeader() {
  const { y } = useScrollPosition();
  const previousY = usePreviousDistinct(y);
  const scrollingDown = previousY !== null && y > previousY;

  return <header className={scrollingDown ? 'header--hidden' : ''}>...</header>;
}
```

## Why not debounce instead of frame-throttle

A debounced scroll handler (waiting for scrolling to stop before firing)
would feel laggy for anything meant to track scroll position in real time
— a sticky header or progress indicator needs to update continuously
*during* the scroll, not only once it settles. Frame-throttling (at most
one update per repaint) keeps updates as frequent as the display can
actually show while still eliminating the redundant, wasted calls a raw
unthrottled listener would produce.
