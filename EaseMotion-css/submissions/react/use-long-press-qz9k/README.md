# useLongPress

Detects a press-and-hold gesture, distinct from a normal tap/click, using
the Pointer Events API so the same handlers cover mouse and touch.

## API

```js
const handlers = useLongPress(onLongPress, { threshold, onClick });
```

| Option | Type | Default | Description |
|---|---|---|---|
| `threshold` | `number` | `500` | Milliseconds of continuous press before `onLongPress` fires. |
| `onClick` | `() => void` | — | Called instead, on release, if the press ended before the threshold. |

## Usage

```jsx
function DeletableRow({ onDelete, onSelect }) {
  const longPress = useLongPress(onDelete, { threshold: 600, onClick: onSelect });
  return <li {...longPress}>Swipe target</li>;
}
```

## Why is it useful?

A press-and-hold action (reveal a context menu, trigger a delete
confirmation) and a normal tap are meant to be mutually exclusive
outcomes of the same physical gesture starting the same way — both begin
with a pointer going down on the element. Without explicit
disambiguation, a element with both a `click` handler and some kind of
hold-detection risks firing both actions for what the user experienced as
a single, deliberate gesture. This hook resolves that by tracking whether
the long-press threshold was actually reached (`firedRef`): if the
pointer lifts before the timer fires, `onClick` runs instead of
`onLongPress`; if the timer already fired, lifting the pointer
afterward does nothing further, since the long-press action has already
happened.

`onPointerLeave` and `onPointerCancel` both clear the pending timer
without calling `onClick` — a press that drags off the element before
release, or is cancelled by the system (an incoming call interrupting a
touch gesture, for instance), shouldn't be treated as a completed short
tap either, since the user's gesture was interrupted rather than
completed as a deliberate click.

## Adjusting the threshold per interaction

500ms is a reasonable default, but different long-press interactions
warrant different thresholds — a quick "hold to reveal a preview" affordance
feels better at a shorter threshold (300ms) than a "hold to confirm
deletion" action, which benefits from a longer, more deliberate threshold
(800ms+) specifically to reduce the chance of an accidental trigger from a
brief, unintentional pause during a normal tap:

```jsx
function DeleteButton({ onDelete }) {
  // Longer threshold since accidental deletion has real consequences.
  const longPress = useLongPress(onDelete, { threshold: 900 });
  return <button {...longPress}>Hold to delete</button>;
}
```

## Providing visual feedback during the hold

Because `useLongPress` only exposes event handlers, not a "currently
pressing" boolean, a component wanting to show progress during the hold
(a filling ring, a growing highlight) needs to track that separately —
this hook deliberately keeps its own state minimal (just the timer and
whether it fired) rather than also managing a public "pressing" state that
not every consumer needs:

```jsx
function HoldToConfirm({ onConfirm }) {
  const [pressing, setPressing] = useState(false);
  const longPress = useLongPress(onConfirm, { threshold: 700 });

  return (
    <button
      {...longPress}
      onPointerDown={(e) => { setPressing(true); longPress.onPointerDown(e); }}
      onPointerUp={(e) => { setPressing(false); longPress.onPointerUp(e); }}
      className={pressing ? 'is-pressing' : ''}
    >
      Hold to confirm
    </button>
  );
}
```

## Touch-action considerations

On touch devices, a long-press gesture can conflict with the browser's own
context-menu-on-long-press or text-selection behavior. Consumers should
typically pair this hook with `touch-action: none` (or at minimum
`user-select: none`) on the target element in CSS to prevent the native
browser gesture from interrupting the custom long-press detection this
hook implements.
