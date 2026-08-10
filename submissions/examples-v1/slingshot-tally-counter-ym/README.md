# Slingshot Tally Counter

Resolves #41905.

### What does this do?
Adds a `slingshot-tally-counter` component to the EaseMotion CSS library, inspired by Nature design patterns. It's a simple increment/decrement counter (e.g. for tracking trees planted, items counted, etc.) where each update triggers a bouncy "slingshot" pull-back-and-release animation on the number.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the styling. Click the `+` or `−` buttons to update the count — the number will animate with a slingshot-style bounce on every change. The counter uses a small inline script to toggle the `ease-slingshot` animation class on update; no external JS dependencies are required.

### Why is it useful?
Provides a playful, tactile counter component well suited for gamified or nature/eco-themed apps, giving users satisfying visual feedback whenever the tally changes.