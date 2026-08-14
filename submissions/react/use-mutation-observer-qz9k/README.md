# useMutationObserver

Observes DOM mutations on a ref'd element, for reacting to changes made by
code outside React's own control.

## API

```js
useMutationObserver(targetRef, callback, options);
```

| Param | Description |
|---|---|
| `targetRef` | Ref to the DOM node to observe. |
| `callback` | `(mutations, observer) => void`, called on each batch of mutations. |
| `options` | `MutationObserverInit` object, defaults to `{ childList: true, subtree: true }`. |

## Usage

```jsx
function ThirdPartyWidgetWrapper() {
  const containerRef = useRef(null);

  useMutationObserver(containerRef, (mutations) => {
    // A third-party SDK injects its own nodes into this container after
    // async initialization; React never rendered them, so React state
    // alone has no way to know they've appeared.
    const injected = mutations.some((m) => m.addedNodes.length > 0);
    if (injected) console.log('Widget finished rendering');
  });

  return <div ref={containerRef} id="third-party-mount-point" />;
}
```

## Why is it useful?

This hook exists for a narrow, specific situation: DOM changes made by
something that isn't React — a third-party embed SDK injecting markup
asynchronously after its own initialization, a browser extension
modifying page content, or legacy non-React code sharing the same page.
React's own reconciliation has no visibility into mutations it didn't
cause, so state derived from "has this externally-managed DOM region
changed" genuinely can't be tracked through React's normal render cycle —
`MutationObserver` is the only mechanism that observes raw DOM changes
regardless of what caused them.

This is explicitly *not* a general-purpose alternative to normal React
state or the `useForceUpdate`-style escape hatch elsewhere in this
submission set — reaching for a `MutationObserver` to watch changes React
itself is making (its own re-renders) is unnecessary and roundabout, since
that state is already directly available through props, state, or refs
without needing to observe the DOM after the fact. The observer's
`options` are stringified into the effect's dependency array (`JSON.stringify(options)`)
since a plain object literal passed inline would otherwise have a new
identity every render, causing the observer to disconnect and reconnect
unnecessarily.

## Choosing observation options

`MutationObserverInit` supports several independent flags beyond the
default `{ childList: true, subtree: true }`, each with a real performance
cost — narrower options mean fewer mutation records to process:

```jsx
// Only care about a specific attribute changing, not the whole subtree.
useMutationObserver(elementRef, callback, {
  attributes: true,
  attributeFilter: ['data-state'],
});

// Only care about direct children appearing/disappearing, not
// descendants several levels deep.
useMutationObserver(elementRef, callback, { childList: true });
```

Defaulting to `{ childList: true, subtree: true }` covers the common case
(any descendant added or removed anywhere under the target), but a
consumer that knows it only needs to watch one attribute or only the
target's direct children should narrow the options — observing the entire
subtree for every mutation type when only one specific change matters
means the browser reports (and the callback has to filter through) far
more mutation records than necessary.

## Batched callback semantics

`MutationObserver` callbacks fire with a *batch* of mutation records, not
one call per individual DOM change — several mutations that happen
synchronously in the same tick (a third-party script inserting five nodes
in a row, for instance) are delivered together as one array in a single
callback invocation. Code inside the callback should iterate the full
`mutations` array rather than assuming exactly one mutation occurred, or
it will silently miss all but the first change in a batch.

## Cleanup and re-observation

The effect disconnects the observer on cleanup (unmount, or `targetRef`/
`options` changing) via `observer.disconnect()` — an observer left
connected after its target is no longer relevant would keep firing
callbacks referencing a stale closure, which the `callbackRef` indirection
partially guards against (always calling the *latest* callback) but
disconnecting outright is still necessary to stop unnecessary work
entirely once the hook's consumer no longer needs the observation.
