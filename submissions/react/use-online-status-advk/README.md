# useOnlineStatus

Tracks the browser's network connectivity via `navigator.onLine` and the
`online`/`offline` window events.

## API

```js
const online = useOnlineStatus();
```

## Usage

```jsx
function ConnectivityBanner() {
  const online = useOnlineStatus();
  if (online) return null;
  return <div role="status" className="offline-banner">You're offline</div>;
}
```

## Why is it useful?

`navigator.onLine` is cheap to check but easy to under-use: a version of
this hook that defaults state to `true` and only calls `navigator.onLine`
inside an effect will briefly claim "online" on first render even when the
page was loaded from cache while genuinely offline. Seeding the initial
state directly from `navigator.onLine` avoids that false-positive flash for
users who open the app already disconnected.

`navigator.onLine` itself is a coarse signal — it reports `false` reliably
when there's no network interface at all, but `true` doesn't guarantee
actual internet reachability (a captive portal, a DNS outage). This hook
intentionally doesn't try to paper over that with a ping-based liveness
check; it exposes exactly what the browser reports and leaves stronger
reachability checks to the caller if the specific application needs them.
