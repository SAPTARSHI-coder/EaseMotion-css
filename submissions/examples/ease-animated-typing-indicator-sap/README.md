# Animated Typing Indicator

A chat "typing…" bubble with three staggered bouncing dots, styled to sit
naturally within a message thread.

**Level:** Beginner

## Usage

Drop the `.typing-bubble` markup into a chat thread whenever the other
party is composing a message; remove/hide it once their message arrives.

## Accessibility

- The dots are `aria-hidden="true"`; the bubble carries `role="status"
  aria-live="polite"` with a separate `.sr-only` text label ("Alex is
  typing"), so screen readers get one clear announcement instead of three
  unlabeled bouncing dots.
- `prefers-reduced-motion` disables the dot bounce and sets them to full,
  consistent opacity, so the "someone is typing" cue remains visible
  without relying on motion..

## Notes

- Staggering uses `:nth-child` + fixed `animation-delay` offsets, same
  pattern as `ease-loading-dots-bounce-sap`, but styled and sized to sit
  inside a chat bubble rather than as a standalone loading indicator.
- This is a static demo showing the indicator always present; in real
  usage, insert/remove this element (and update the live region text) in
  response to actual typing-presence events from your chat backend.