# Cookie Consent Banner

## What does this do?

It creates a fixed-position banner at the bottom of the viewport that slides up into view when shown and slides back down when dismissed. The animation is driven entirely by CSS `transform: translateY()` for optimal compositor performance.

## How is it used?

Add the banner markup and toggle the `ccb-visible` class:

```html
<aside id="ccb" class="ccb">
  <p class="ccb__text">This site uses cookies...</p>
  <div class="ccb__actions">
    <button class="ccb__btn ccb__btn--accept">Accept</button>
    <button class="ccb__btn ccb__btn--reject">Reject</button>
  </div>
</aside>
```

Then control visibility by adding or removing the `ccb-visible` class:

```js
document.getElementById("ccb").classList.add("ccb-visible");   // slide up
document.getElementById("ccb").classList.remove("ccb-visible"); // slide down
```

Customize appearance with CSS custom properties:

- `--ccb-bg` — Banner background (defaults to `#1e293b`)
- `--ccb-text` — Text color (defaults to `#f8fafc`)
- `--ccb-accept-bg` — Accept button background (defaults to `#6c63ff`)
- `--ccb-accept-text` — Accept button text color
- `--ccb-reject-bg` — Reject button background
- `--ccb-reject-text` — Reject button text color
- `--ccb-reject-border` — Reject button border
- `--ccb-transition-duration` — Slide duration (defaults to `0.4s`)
- `--ccb-transition-easing` — Timing function (defaults to `cubic-bezier(0.4, 0, 0.2, 1)`)

## Why is this useful?

Cookie consent banners are a common requirement for GDPR and privacy compliance. This component provides a lightweight, accessible slide-in/slide-out pattern that animates on the compositor thread, avoiding layout thrashing. It respects `prefers-reduced-motion` and collapses responsively on smaller screens.
