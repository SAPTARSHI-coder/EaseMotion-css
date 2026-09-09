# Notification Toast Slide

Toast notifications that slide in from the right edge, auto-dismiss after a
delay, and can also be dismissed manually — stacking cleanly when multiple appear.

**Level:** Intermediate

## Usage

Call `showToast(message)` to create and animate in a new toast. Each
manages its own auto-dismiss timer and close button; multiple toasts stack
vertically in `.toast-region`.

## Accessibility

- `.toast-region` is `aria-live="polite" aria-atomic="true"`, so each new
  toast's message is announced by screen readers as it's added, without
  needing focus to move.
- Each toast has an explicit, labeled close button (`aria-label="Dismiss
  notification"`), not just an auto-timeout — so users who need more time
  to read aren't solely dependent on manual dismissal timing, and those who
  want to dismiss early can.
- Auto-dismiss timing (4 seconds) is deliberately generous for a short
  message; longer-message use cases should extend the timeout further or
  disable auto-dismiss.
- `prefers-reduced-motion` removes the slide transform, keeping only an
  opacity fade for enter/exit.

## Notes

- Toasts are removed from the DOM only after their exit transition
  completes (`transitionend`, `{ once: true }`), so the slide-out animation
  isn't cut short.
- `aria-atomic="true"` ensures each toast's full text is announced as one
  unit rather than being fragmented across incremental DOM updates.
- This demo doesn't pause the auto-dismiss timer on hover/focus; adding a
  pause-on-interaction behavior would be a good accessibility enhancement
  for a production toast system, noted here as a follow-up.