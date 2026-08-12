# CSS Quick Action Sheet

1. What does this do? Renders an iOS-style quick action bottom sheet with an options list and a Cancel/dismiss control, sliding up from the bottom with a scrim.
2. How is it used? A hidden `<input type="checkbox" id="qa-toggle">` drives state; `<label for="qa-toggle">` elements act as the trigger, scrim, each option, and the Cancel button, so the sheet opens and dismisses with no JavaScript.
3. Why is it useful? Adds a ready-to-use mobile-style action sheet with no JS, ARIA dialog semantics, keyboard-accessible trigger, and `prefers-reduced-motion` support.

Closes #70315
