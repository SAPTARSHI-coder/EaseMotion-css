# ease-animated-toast-undo-sap

A toast with an undo action and a shrinking timer bar showing how much time remains before it auto-dismisses.

## Usage
1. Include `style.css`.
2. Add markup: toast with message, an "UNDO" button, and a `.toast-timer-bar`.
3. Trigger via JS, matching the auto-dismiss `setTimeout` duration to the timer bar's animation duration.

## Notes
- Timer bar animation duration (`4s`) is kept in sync with the JS `setTimeout` auto-dismiss delay, so the visual countdown matches the actual dismiss timing.
- Clicking "UNDO" clears the pending timeout, preventing the toast from auto-dismissing after the user has already acted.
- Respects `prefers-reduced-motion`: slide-in transition and timer bar shrink animation are disabled; the toast still appears/disappears and the underlying timeout logic is unaffected.