# Elastic Swipe Cards

## What does this do?

Elastic Swipe Cards adds a self-contained drag-to-dismiss card stack with spring snap-back motion, directional swipe exits, keyboard controls, and reduced-motion support.

## How is it used?

Place the demo markup inside a page, link the stylesheet, and use the `swipe-card` elements inside a `card-stack` container:

```html
<div class="card-stack" id="cardStack" tabindex="0">
  <article class="swipe-card">
    <span class="swipe-badge like">Keep</span>
    <span class="swipe-badge dismiss">Dismiss</span>
    <div class="card-visual visual-sky"></div>
    <div class="card-copy">
      <h2>Elastic pull resistance</h2>
      <p>Cards snap back or swipe away based on drag distance.</p>
    </div>
  </article>
</div>
```

The included `demo.html` uses vanilla JavaScript to update CSS custom properties such as `--drag-x`, `--drag-y`, and `--drag-rotate` during pointer movement.

## Why is it useful?

Swipe stacks are common in mobile-first product interfaces, decision feeds, onboarding flows, and notification queues. This submission fits EaseMotion CSS because it demonstrates human-readable motion behavior, reusable directional keyframes, CSS custom properties for physics-like tuning, keyboard accessibility, and a `prefers-reduced-motion` fallback without external dependencies.

## Features

- Pointer drag support with elastic threshold behavior.
- Left and right swipe-out animations.
- Spring snap-back animation when released under the threshold.
- Action badges that react to drag direction.
- Keyboard support with `ArrowLeft` and `ArrowRight`.
- Reset, keep, and dismiss controls.
- Responsive layout and reduced-motion handling.
