# CSS Pinned Message Banner

1. What does this do? Renders a pinned message banner fixed at the top of a chat that can be dismissed and later restored, collapsing out of flow.
2. How is it used? A hidden `<input type="checkbox" id="pin-dismiss">` drives state; `<label for="pin-dismiss">` elements act as the dismiss and restore controls, so the banner collapses/expands with no JavaScript.
3. Why is it useful? Adds a ready-to-use pinned-message banner with no JS, keyboard-accessible controls, and `prefers-reduced-motion` support.

Closes #70280
