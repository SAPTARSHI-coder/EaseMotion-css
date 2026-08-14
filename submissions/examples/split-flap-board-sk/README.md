# Split-Flap Departure Board

## What does this do?
Simulates the classic airport/train station split-flap (Solari) board where individual character tiles flip with a mechanical animation to reveal new destination text.

## How is it used?

```html
<div class="flap-board">
  <div class="flap-board__row">
    <div class="flap" id="flap-0">
      <div class="flap__card flap__top">N</div>
      <div class="flap__card flap__bottom">N</div>
    </div>
    <!-- repeat for each character -->
  </div>
</div>
```

Trigger a flip animation by injecting `.flap__flip-top` / `.flap__flip-bottom` elements and removing them after the CSS animation completes. A small JS helper in the demo handles this.

CSS custom properties for theming:
```css
--flap-bg: #111;
--flap-text: #f5c542;
--flap-duration: 0.35s;
--flap-width: 3rem;
--flap-height: 4.5rem;
```

## Why is it useful?
The split-flap effect is pure CSS keyframe animation (`rotateX`) with `clip-path` to split each card into top/bottom halves — no canvas, no SVG, no external libraries. It fits EaseMotion CSS's philosophy of expressive motion through composable CSS primitives. Respects `prefers-reduced-motion` by disabling the flip keyframes.
