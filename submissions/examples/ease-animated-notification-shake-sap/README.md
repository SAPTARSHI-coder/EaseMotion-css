# ease-animated-notification-shake-sap

An error/warning notification banner that shakes to draw attention on each new failure event.

## Notes
- Forced reflow before re-adding `.shake` ensures the animation replays on every trigger, not just the first.
- Respects `prefers-reduced-motion`: shake disabled entirely; the notification's color/border still communicates the error state.