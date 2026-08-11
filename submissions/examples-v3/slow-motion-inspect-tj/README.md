# Slow Motion Inspection Mode

## What does this do?
Adds a toggle button that slows down an animation preview (via a modified `animation-duration`) so developers can inspect easing curves and intermediate states without altering the underlying animation classes.

## How is it used?
```html
<div class="preview-animate-target" id="target"></div>
<button class="preview-inspect-btn" id="inspectBtn">Inspect Motion</button>
```
Clicking the button toggles the `.is-slow-motion` class on the animated element, stretching its `animation-duration` from `1.2s` to `6s`. Clicking the animated box itself replays the animation from the start.

## Why is it useful?
It improves the documentation/demo experience for EaseMotion CSS by letting beginners and reviewers visually study how an animation's timing and easing behave, without ever modifying the original animation class or generated HTML — purely a presentational overlay for the showcase.