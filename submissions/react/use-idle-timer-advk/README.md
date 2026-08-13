# useIdleTimer

Reports whether the user has been inactive (no mouse, keyboard, touch, or
scroll input) for a given duration.

## API

```js
const idle = useIdleTimer(timeout, events);
```

| Param | Type | Default | Description |
|---|---|---|---|
| `timeout` | `number` | `60000` | Milliseconds of inactivity before `idle` becomes `true`. |
| `events` | `string[]` | `['mousemove','mousedown','keydown','touchstart','scroll']` | Window events that count as activity. |

## Usage

```jsx
function SessionGuard() {
  const idle = useIdleTimer(5 * 60 * 1000);
  useEffect(() => {
    if (idle) showLogoutWarning();
  }, [idle]);
  return null;
}
```

## Why is it useful?

Idle detection is easy to get wrong in a way that only shows up under real
usage: attaching a fresh listener per render, or listening on the highest-
frequency event (`mousemove`) without `{ passive: true }`, causes visible
scroll/input jank on pages with heavy activity. This hook attaches its
listeners once per `timeout`/`events` change and uses `passive: true`, so
the activity listeners never block the browser's default scrolling
behaviour while measuring it.

The timer itself is a plain `setTimeout` reset on each activity event, not a
`setInterval` polling loop — the browser never runs idle-check code more
often than an actual idle timeout could fire.
