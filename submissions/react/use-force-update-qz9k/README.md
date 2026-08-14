# useForceUpdate

Returns a function that forces the calling component to re-render, for the
narrow set of cases where a value changed outside of React's own state
tracking.

## API

```js
const forceUpdate = useForceUpdate();
```

## Usage

```jsx
function ThirdPartyMapWrapper() {
  const forceUpdate = useForceUpdate();
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = new ThirdPartyMapSDK(containerEl);
    // The SDK mutates its own internal state on user interaction and only
    // exposes it via an imperative getter, with no React-friendly state API.
    mapRef.current.on('viewportchange', forceUpdate);
    return () => mapRef.current.destroy();
  }, [forceUpdate]);

  const zoom = mapRef.current?.getZoom(); // read fresh on every forced re-render
  return <ZoomIndicator zoom={zoom} />;
}
```

## Why is it useful?

React only re-renders a component when its state or props change through
React's own APIs — a `ref.current` mutated directly, or an imperative
third-party library's internal state changing outside any `setState` call,
doesn't trigger a re-render on its own, even though the component reading
that value would need to reflect the change. Reaching for `useForceUpdate`
is the escape hatch for exactly that situation: wiring a
non-React-managed change (a library's event callback) to something React
will always re-render in response to.

This should be reached for rarely — the vast majority of "I need to
re-render" situations are better solved by putting the relevant value into
real React state to begin with, since that also gets React's built-in
memoization and dependency-tracking benefits that `forceUpdate` bypasses
entirely. It exists here specifically for the residual case of wrapping an
imperative, non-React API that genuinely doesn't expose its state any other
way.

## Why a counter, not an object or boolean

```js
const [, setTick] = useState(0);
return useCallback(() => setTick((t) => t + 1), []);
```

A common alternative implementation uses `useState({})` and calls
`setState({})` to force a render, relying on a new object always being
`!==` the previous one. That works, but a counter with the functional
updater form (`(t) => t + 1`) is more robust under React's batching: if
`forceUpdate()` is called multiple times within the same synchronous batch
(two separate imperative callbacks firing back to back before React
flushes), each call to `setTick(t => t + 1)` reads the *pending* value from
the previous call in the same batch, so multiple calls correctly compound
into multiple increments rather than each independently producing "a new
object" that batching could otherwise collapse indistinguishably into a
single visible update. In practice a single re-render is usually all
that's needed either way, but the counter form is the more defensive
choice for a utility meant to be called from arbitrary, possibly
overlapping imperative code.

## Cleanup responsibility stays with the caller

`useForceUpdate` only provides the "trigger a re-render" primitive — it
doesn't manage subscribing to or unsubscribing from whatever imperative
source is calling it. In the map-wrapper example above, the `useEffect`
cleanup (`mapRef.current.destroy()`) is what prevents the third-party SDK
from calling `forceUpdate` after the component has unmounted; forgetting
that cleanup — not anything about this hook itself — would be the source of
a "setState on unmounted component" warning in that scenario.

## Testing components that use this hook

Because the hook's own logic is a single line, tests of a component using
it should focus on the integration point instead — asserting that firing
the imperative event a component listens for actually results in updated
rendered output — rather than testing `useForceUpdate` in isolation, which
would only verify React's own `useState` behaves as documented.
