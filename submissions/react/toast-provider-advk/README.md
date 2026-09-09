# ToastProvider

A context-based toast system with a hard cap on how many notifications render at
once.

## API

```jsx
<ToastProvider max={3} duration={5000}>{app}</ToastProvider>

const { notify, dismiss } = useToast();
notify('Saved', { tone: 'success' });
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `max` | `number` | `3` | Maximum simultaneous toasts. |
| `duration` | `number` | `5000` | Default auto-dismiss in ms; `0` disables. |

`notify(message, { tone, duration })` returns an id usable with `dismiss(id)`.

## Usage

```jsx
import ToastProvider, { useToast } from './ToastProvider';
import './style.css';

function SaveButton() {
  const { notify } = useToast();
  return <button onClick={() => notify('Changes saved', { tone: 'success' })}>Save</button>;
}
```

## Why it fits EaseMotion CSS

The MotionToast submission covers a single toast's enter and exit; this is the
orchestration around many, and the cap is the reason it exists. A failing request
in a retry loop can fire dozens of toasts, and an uncapped stack covers the entire
viewport with notifications the user cannot dismiss fast enough. Slicing to the
most recent `max` keeps the newest visible and bounds the damage.

Timers are tracked in a `Map` keyed by id and cleared on manual dismissal, so a
user who closes a toast early does not leave an orphaned timeout that later fires
against a removed id.

The container is `pointer-events: none` with `pointer-events: auto` restored on
each toast. Without that, the fixed region silently swallows clicks in the corner
of the page even when no toasts are showing — a bug that is hard to trace because
the culprit is invisible.

Politeness is set per tone: `danger` toasts use `role="alert"` with
`aria-live="assertive"` so failures interrupt, while everything else is `polite`
and waits for a pause.
