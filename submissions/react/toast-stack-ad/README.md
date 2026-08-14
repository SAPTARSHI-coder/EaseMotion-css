# ToastStack — stacked notifications

> Issue: [#63813](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63813)

A toast stack with pausable auto-dismiss, a real exit animation, and a bounded visible count.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `toasts` | `Array<{ id, tone?, title?, message?, action?, duration? }>` | `[]` | Entries without an `id` are skipped. Renders `null` if none remain. |
| `onDismiss` | `(id) => void` | — | Called **after** the exit animation completes. |
| `max` | `number` | `3` | Visible toasts before collapsing to a count. Clamped to ≥ 1. |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'bottom-right'` | |
| `label` | `string` | `'Notifications'` | Accessible list name. |
| `className` | `string` | `''` | Merged onto the root. |

Tones: `info` · `success` · `warning` · `danger`. Per-toast `duration` defaults to 5000ms; pass `0` or `Infinity` for a sticky toast.

## Usage

```jsx
import ToastStack from './ToastStack';
import './style.css';

<ToastStack
  toasts={toasts}
  onDismiss={(id) => setToasts((t) => t.filter((x) => x.id !== id))}
  max={3}
  position="bottom-right"
/>
```

## Why it fits EaseMotion

Four things toast implementations routinely get wrong:

**Auto-dismiss keeps running while the user is reading.** A toast that vanishes mid-sentence is worse than no toast — the information is gone with no way to retrieve it. Timers pause on hover **and** on focus, so a keyboard user tabbing to the action button gets the same protection a mouse user does.

The pause tracks *remaining* time rather than restarting the timer. Restarting means hovering repeatedly resets the countdown to full each time, so a toast can effectively become permanent.

**The exit never plays.** Removing the item from state unmounts it immediately, so the slide-out is written, styled, and never seen once. Each toast stays mounted through an `exiting` phase and removes itself on `transitionend`, with a timeout fallback for when that event does not fire (off-screen, background tab, interrupted transition).

The `transitionend` handler checks `event.target === node` — without it, a transition on the close button or an action inside the toast bubbles up and removes the toast early, mid-interaction.

**Every toast is an alert.** `warning` and `danger` use `role="alert"`; `info` and `success` use `role="status"`. Marking routine confirmations assertive trains users to ignore the interruptions that matter.

**Unbounded stacking.** Twenty toasts cover the viewport and the app underneath becomes unusable. `max` bounds the visible count and the remainder collapses to "+N more".

Bottom-positioned stacks use `column-reverse` so new toasts appear nearest the screen edge, where the eye already is. Under `prefers-reduced-motion` the exit transition is **shortened, not removed** — unmount waits on `transitionend`, which does not fire at zero duration.
