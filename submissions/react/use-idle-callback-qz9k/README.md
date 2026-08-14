# useIdleCallback

Runs a callback during a browser idle period via `requestIdleCallback`,
falling back to `setTimeout` in Safari (which has never shipped the API).

## API

```js
useIdleCallback(callback, options);
```

| Param | Type | Description |
|---|---|---|
| `callback` | `(deadline: IdleDeadline) => void` | Called during an idle period; receives a deadline object with `timeRemaining()`. |
| `options.timeout` | `number` | Maximum ms to wait before forcing the callback to run even if the thread isn't idle. |

## Usage

```jsx
function AnalyticsBatcher({ events }) {
  useIdleCallback(
    (deadline) => {
      while (deadline.timeRemaining() > 0 && events.pending.length) {
        sendEvent(events.pending.shift());
      }
    },
    { timeout: 2000 }
  );
  return null;
}
```

## Why is it useful?

Work that isn't urgent — sending batched analytics, prefetching a route
the user hasn't navigated to yet, warming a cache — competes with
rendering and user input for main-thread time if it's simply run in a
`useEffect` or a plain `setTimeout(fn, 0)`. `requestIdleCallback`
specifically schedules the callback for a genuinely idle period, checked
against the deadline object's `timeRemaining()`, so it naturally yields
back to the browser if a user interaction needs to be handled — avoiding
low-priority background work introducing input lag or jank during
rendering.

Safari has never implemented `requestIdleCallback` (as of current
releases), so a hook depending on it without a fallback simply never runs
its callback there. The `setTimeout`-based fallback executes on the next
tick instead of waiting for genuine idle time — a reasonable degradation
since low-priority work still needs to eventually run somewhere, just
without the same yield-during-busy-periods guarantee `requestIdleCallback`
provides natively.

## Respecting the deadline inside the callback

`requestIdleCallback` doesn't guarantee unlimited time — the callback
receives a deadline object whose `timeRemaining()` shrinks as the idle
period runs out, and well-behaved idle work checks it repeatedly rather
than assuming it can finish an arbitrarily large task in one call:

```jsx
function CacheWarmer({ items }) {
  const indexRef = useRef(0);

  useIdleCallback((deadline) => {
    while (deadline.timeRemaining() > 1 && indexRef.current < items.length) {
      warmCache(items[indexRef.current]);
      indexRef.current += 1;
    }
    // If items remain, a real implementation would re-schedule another
    // idle callback here to continue the work in the next idle period.
  });

  return null;
}
```

Ignoring `timeRemaining()` and running a long, uninterruptible loop
defeats the purpose of scheduling as idle work in the first place — the
callback itself would then block the main thread for however long the
loop takes, exactly the outcome `requestIdleCallback` exists to avoid.

## The timeout option

`options.timeout` forces the callback to run even if the thread never
becomes idle within that window, trading off the "only run when genuinely
idle" guarantee for a bound on worst-case delay. This matters for work
that's low-priority but not indefinitely deferrable — an analytics batch
that should flush at least every few seconds even on a busy page,
rather than potentially never firing if the thread stays continuously
busy.

## When not to use this hook

Work with a hard deadline of its own (form validation feedback, anything
the user is actively waiting on) should never be routed through idle
scheduling — `requestIdleCallback` is specifically for work that can wait
arbitrarily long without the user noticing or caring, and using it for
anything else just introduces unpredictable latency into something that
should happen promptly.
