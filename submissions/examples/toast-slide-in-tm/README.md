# Notification toast

1. What does this do? A toast that slides in from the right, lingers for about four seconds, then slides out.

2. How is it used? Add `toast-tm` plus a variant (`toast-ok-tm`, `toast-warn-tm`, `toast-err-tm`). Use `role="status"` for non-critical, `role="alert"` for errors.

3. Why is it useful? It gives feedback without a modal, fits the EaseMotion minimal-motion aesthetic, and stacks cleanly with no extra positioning CSS.
