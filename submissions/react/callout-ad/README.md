# Callout — inline callout / banner

> Issue: [#61727](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61727)

A React callout for inline messaging, with severity-scoped announcement and an exit animation that actually completes before unmount.

## Description

Four tones with matching glyphs and ARIA wiring. Dismissible callouts play a collapse-and-fade exit, then unmount — rather than vanishing instantly.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Sets colour, glyph and ARIA role. Unknown values degrade to `info`. |
| `title` | `string` | — | Optional heading. |
| `children` | `ReactNode` | — | Body content. |
| `icon` | `ReactNode` | per-tone glyph | Custom icon. |
| `dismissible` | `boolean` | `false` | Show a dismiss button. |
| `onDismiss` | `() => void` | — | Called **after** the exit animation completes. |
| `action` | `ReactNode` | — | Action node rendered under the copy. |
| `className` | `string` | `''` | Merged onto the root. |

Any other props are spread onto the root element.

## Usage

```jsx
import Callout from './Callout';
import './style.css';

<Callout tone="info" title="Scheduled maintenance">
  Settlement will pause on Sunday between 02:00 and 04:00 UTC.
</Callout>

<Callout
  tone="warning"
  title="Limit approaching"
  dismissible
  onDismiss={() => acknowledge('seats')}
  action={<button onClick={upgrade}>Upgrade plan</button>}
>
  You have used 42 of 50 seats.
</Callout>

<Callout tone="danger" title="Payment failed" dismissible onDismiss={clear}>
  We could not charge the card on file.
</Callout>
```

## Why it fits EaseMotion

**Announcement is scoped to severity.** `warning` and `danger` use `role="alert"` with `aria-live="assertive"`, so they interrupt the screen reader. `info` and `success` use `role="status"` with `aria-live="polite"`, so they wait for a pause. Marking every callout as an alert trains users to ignore all of them, including the one that mattered.

**The exit actually completes.** Unmounting on click skips the animation entirely — the element is gone before a frame renders, so the collapse is never seen. This component keeps the node mounted through an `exiting` phase and removes it on `transitionend`.

Three details make that reliable:

- The `transitionend` handler checks `event.target === node`. Without it, a transition on any *descendant* — hovering a button inside the callout — bubbles up and removes the callout early.
- A `setTimeout` fallback fires if the event never arrives, which happens when the element is off-screen, in a background tab, or the transition is interrupted. Without it a callout could be stranded on screen permanently.
- `max-height` is bounded (`30rem`) rather than `auto`, because `auto` is not interpolatable and the collapse simply would not animate.

`margin` and `padding` animate alongside `max-height`, or the surrounding layout would jump as the element is removed.

Under `prefers-reduced-motion` the transition is **shortened rather than removed** — this one is not just an aesthetic choice. Removing the transition stops `transitionend` firing at all, and since unmount waits on that event, the callout would linger until the timeout fallback fired.
