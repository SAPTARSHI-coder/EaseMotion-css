# useOnlineStatus hook

A React hook that tracks `navigator.onLine` and the `online`/`offline` events.

## What it does
- Returns a boolean reflecting current connectivity.
- Seeded **synchronously** from `navigator.onLine` in the `useState` initializer to avoid a false "online" flash on first render for a page loaded from cache while disconnected.
- Subscribes to `online`/`offline` events and cleans up on unmount.

## Files
- `useOnlineStatus.js` — the hook
- `README.md` — this guide

## Usage
```jsx
import { useOnlineStatus } from "./useOnlineStatus";

function App() {
  const online = useOnlineStatus();
  return <div>{online ? "Online" : "Offline"}</div>;
}
```

## Why synchronous seeding
A lazy `useState(() => navigator.onLine)` initialiser prevents the first paint from rendering `true` (online) when the page was actually loaded from cache while offline, then flipping to `false` after mount.

Closes #75553
