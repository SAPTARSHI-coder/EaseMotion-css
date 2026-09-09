# useWindowFocus

Tracks whether the browser window/tab currently has the user's attention,
combining `window` focus/blur events with the Page Visibility API.

## API

```js
const focused = useWindowFocus();
```

## Usage

```jsx
function LiveClock() {
  const focused = useWindowFocus();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    // Pause the ticking interval entirely while the tab is backgrounded,
    // rather than wasting timer callbacks on a clock nobody can see.
    if (!focused) return;
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, [focused]);

  return <time>{time.toLocaleTimeString()}</time>;
}
```

## Why is it useful?

`window`'s own `focus`/`blur` events and the Page Visibility API
(`document.hidden`/`visibilitychange`) each miss a case the other one
catches. Window focus/blur fires when the OS-level window loses focus to
a different application, but doesn't reliably fire when the user switches
to a *different browser tab* within the same window on every browser —
the window itself may still technically be focused while the actual tab
the user is looking at has changed. `document.hidden` catches the
tab-switch case reliably but doesn't distinguish "this tab is visible but
the whole browser window is currently unfocused" (the user alt-tabbed to
a different app) from genuinely being the user's active focus. Checking
both together (`document.hasFocus() && !document.hidden`) is the
combination that actually answers "does the user currently have their
attention on this specific tab" correctly across both failure modes.

Pausing non-essential recurring work (an animation loop, a polling
interval, a ticking clock) while the tab is unfocused — as in the example
above — avoids burning CPU and battery on updates nobody can currently
see, which matters more than it might seem for anything running a
`setInterval` at a short period across a page that could be left open,
backgrounded, in a browser tab for hours.

## Combining with useOnlineStatus for a full picture

`useWindowFocus` and `useOnlineStatus` (elsewhere in this repo) answer
independent questions — one is about user attention, the other about
network connectivity — and combine naturally for a component that only
wants to poll a server when both the tab is actively viewed and a network
connection exists:

```jsx
function LiveDashboard() {
  const focused = useWindowFocus();
  const online = useOnlineStatus();
  const shouldPoll = focused && online;

  useEffect(() => {
    if (!shouldPoll) return;
    const id = setInterval(fetchLatestData, 5000);
    return () => clearInterval(id);
  }, [shouldPoll]);

  return <Dashboard />;
}
```

Polling only while both conditions hold avoids wasted network requests
while the tab is backgrounded (nobody sees the result) and avoids failed
requests piling up while genuinely offline.

## Reducing notification noise while focused

The inverse of "pause background work while unfocused" is "suppress
foreground notifications while the tab already has the user's attention" —
a chat app typically shouldn't play a notification sound for a new
message if the conversation is already the visibly focused tab:

```jsx
function ChatNotifier({ newMessage }) {
  const focused = useWindowFocus();

  useEffect(() => {
    if (newMessage && !focused) {
      playNotificationSound();
      showBrowserNotification(newMessage);
    }
  }, [newMessage, focused]);

  return null;
}
```

## Browser support notes

The Page Visibility API (`document.hidden`, `visibilitychange`) has broad
support across current browsers; `window` focus/blur events are even more
universally supported, having existed since long before Page Visibility
was standardized. The combination used here doesn't require any
feature-detection fallback for modern browser support, unlike some of the
other observer-based hooks in this submission set (`ResizeObserver`,
`MutationObserver`) which do need to account for narrower support ranges.
