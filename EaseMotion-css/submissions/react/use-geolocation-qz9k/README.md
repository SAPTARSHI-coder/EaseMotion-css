# useGeolocation

Tracks the browser's current geolocation via `watchPosition`, reporting
loading state, the latest position, and any error.

## API

```js
const { loading, position, error } = useGeolocation(options);
```

| Option | Type | Default | Description |
|---|---|---|---|
| `enableHighAccuracy` | `boolean` | `false` | Request higher-accuracy (typically slower, more power-hungry) positioning. |
| `timeout` | `number` | `10000` | Milliseconds to wait for a position before erroring. |
| `maximumAge` | `number` | `0` | Milliseconds a cached position may be reused for. |

## Usage

```jsx
function NearbyStores() {
  const { loading, position, error } = useGeolocation();

  if (loading) return <Spinner />;
  if (error) return <p>Couldn't get your location: {error.message}</p>;
  return <StoreList lat={position.latitude} lng={position.longitude} />;
}
```

## Why is it useful?

`navigator.geolocation` has two APIs: `getCurrentPosition` for a one-shot
read, and `watchPosition` for continuous updates as the device moves. A
hook wrapping only `getCurrentPosition` is simpler but means any
consumer that actually needs live tracking (a delivery-tracking map, a
"find nearby" feature that should update as the user walks) has to build
its own polling loop on top, typically re-calling `getCurrentPosition` on
an interval — which is both less accurate (fixed polling doesn't align
with when the device's actual position sensor updates) and unnecessarily
battery-hungry compared to the OS-level position callbacks
`watchPosition` receives natively.

Feature-detecting `'geolocation' in navigator` before use means the hook
degrades to a clear error state on browsers or contexts without geolocation
support (some embedded WebViews, non-secure origins) rather than throwing
when `navigator.geolocation` is undefined. The watch is cleared via
`clearWatch` in the effect's cleanup, so a component tracking location
doesn't leave a location watch running (and the associated OS-level
location indicator active) after it unmounts.
