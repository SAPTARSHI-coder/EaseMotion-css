# Toast Notification

1. What does this do? A corner toast that slides in from the right with a draining progress bar across its base that indicates auto-dismiss timing.
2. How is it used? Build a `.toast-notification` element with an `.toast-notification__icon`, a `.toast-notification__body` (title + message), a `.toast-notification__close` button, and a `.toast-notification__progress` span. The slide-in plays once; the progress bar drains on a loop. Customize the green, soft green, and dismiss duration via `--tn-green`, `--tn-green-soft`, and `--tn-duration`.
3. Why is it useful? It conveys success feedback with a visible auto-dismiss cue using only CSS animations (no JavaScript), and respects `prefers-reduced-motion`.
