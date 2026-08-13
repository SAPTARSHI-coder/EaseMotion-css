# useTimeout

A declarative `setTimeout`, plus a companion `useInterval`. Both run a
callback on a schedule, with a `null` delay/interval pausing the timer
entirely.

## API

```js
useTimeout(callback, delay);
useInterval(callback, interval);
```

| Param | Type | Description |
|---|---|---|
| `callback` | `() => void` | Called on each firing. |
| `delay` / `interval` | `number \| null` | Milliseconds between firings; `null` cancels/pauses the timer. |

## Usage

```jsx
function AutoDismissToast({ message, onDismiss }) {
  useTimeout(onDismiss, 4000);
  return <div className="toast">{message}</div>;
}

function PausableCountdown({ paused, onComplete }) {
  useTimeout(onComplete, paused ? null : 5000);
  return null;
}
```

## Why is it useful?

The naive version of this hook — `setTimeout(callback, delay)` inside a
`useEffect` with `[callback, delay]` as dependencies — restarts the entire
timer from zero every time `callback` changes identity, which for an inline
arrow function is every render. That silently breaks the delay: a 4-second
auto-dismiss toast whose parent re-renders on unrelated state changes every
second would never actually reach 4 seconds of *stable* time, only 4
seconds since the *last* re-render. This hook separates the two concerns —
the timer's schedule depends only on `delay`, while the always-current
`callback` is read through a ref at fire time — so the countdown genuinely
runs for the stated duration regardless of how often the component
re-renders for other reasons.

A `delay` of `null` is the documented way to pause the timer, distinct from
`0` (fire immediately) or omitting the call — cancellation is a valid,
addressable state rather than something the caller has to simulate by
conditionally not rendering the component.

## useInterval

`useInterval` follows the identical shape for recurring work, which is
useful for anything that needs to run repeatedly on a fixed cadence rather
than once:

```jsx
function LiveClock() {
  const [now, setNow] = useState(() => new Date());
  useInterval(() => setNow(new Date()), 1000);
  return <time>{now.toLocaleTimeString()}</time>;
}

function PollingBadge({ resourceId }) {
  const [status, setStatus] = useState(null);
  const [polling, setPolling] = useState(true);

  useInterval(
    () => {
      fetchStatus(resourceId).then(setStatus);
    },
    polling ? 5000 : null
  );

  return (
    <>
      <StatusDot status={status} />
      <button onClick={() => setPolling((p) => !p)}>
        {polling ? 'Pause polling' : 'Resume polling'}
      </button>
    </>
  );
}
```

The `polling ? 5000 : null` pattern in `PollingBadge` is the same
pause/resume mechanism `useTimeout` exposes — toggling `interval` to `null`
tears the interval down via the effect's cleanup, and toggling it back to a
number starts a fresh one, without the calling component managing an
`intervalId` ref itself.

## Why not just useRef and manage the timer manually?

A component could reach for `useRef(null)` to hold a timer id and manage
`setTimeout`/`clearTimeout` calls directly in event handlers, but that
pattern needs its own cleanup-on-unmount effect written by hand every time,
and it's easy to forget the `clearTimeout` call on one of several code
paths that might restart the timer (a resize handler, a prop change, a
manual "restart" button). Wrapping the pattern in a hook means the cleanup
is guaranteed by React's effect lifecycle rather than depending on every
call site remembering to write it correctly.
