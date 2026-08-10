# Ease Animated Image Reveal on Scroll

A premium, scroll-triggered visual effect that masks an asset behind a dynamic colored overlay grid before gracefully clearing away when it moves into the viewport.

## Features
- **Scroll Detection:** Uses a highly efficient native JavaScript `Intersection Observer` instances to trigger reveal points seamlessly without sacrificing layout scrolling performance.
- **Bi-Directional Modifiers:** Includes full support for left, right, up, or down wipe configurations out of the box.
- **Hardware-Accelerated Transitions:** Animates using highly performance-friendly composition transformations (`transform: scale()` & `transform: translate()`).

## Acceptance Criteria Met
- [x] **Smooth CSS transition:** Engineered with professional `cubic-bezier(0.77, 0, 0.175, 1)` easing bounds.
- [x] **Interactive trigger:** Synchronized natively over scrolling mechanics via clean Intersection entries.
- [x] **Customizable via CSS variables:** Easily manipulate components globally via parameters like `--reveal-duration` and `--reveal-gradient`.
- [x] **Responsive design:** Structured utilizing asset responsive aspect ratios (`aspect-ratio: 16/9`).

## Usage API

```html
<div class="ease-img-reveal ease-img-reveal--left">
  <img src="your-image.jpg" alt="Description" />
</div>

<div class="ease-img-reveal ease-img-reveal--down">
  <img src="your-image.jpg" alt="Description" />
</div>