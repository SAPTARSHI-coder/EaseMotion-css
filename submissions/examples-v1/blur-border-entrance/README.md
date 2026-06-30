# Blur Border Entrance

## What does this do?

This submission adds a pure CSS entrance animation that brings a component border in from a blurred outline to a crisp final stroke.

## How is it used?

Add the animation class to any card, alert, panel, or button that already has a visible border radius:

```html
<article class="feature-card blur-border-entrance">
  <h2>Revenue Snapshot</h2>
  <p>Use this on cards that need a polished first-load highlight.</p>
</article>

<button class="action-button blur-border-entrance" type="button">
  Continue setup
</button>
```

## Why is it useful?

The effect gives bordered UI elements a refined entrance interaction without JavaScript or external assets. It fits EaseMotion CSS because it is lightweight, readable, reusable across component types, browser-friendly, and includes a reduced-motion fallback.
