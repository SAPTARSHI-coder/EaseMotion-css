# ease-side-flip-out

**Fixes:** Issue #11895

## Overview

A pure CSS animation utility that makes an element flip away to the side like a card being turned face-down. This is an exit animation.

## Usage

Add the `.ease-side-flip-out` class to any element you want to animate out.

```html
<div class="card ease-side-flip-out">
  <p>Goodbye!</p>
</div>
```

## Technical Implementation

- **Animation:** Animates `transform: rotateY(0)` to `transform: rotateY(90deg)`.
- **Perspective:** Uses `perspective(600px)` inside the transform for a natural 3D effect.
- **Backface Visibility:** Uses `backface-visibility: hidden` and `transform-style: preserve-3d` to ensure the back of the element is not visible and handles 3D space correctly.
- **Timing:** Uses a custom cubic-bezier function that starts slowly and accelerates, which is typical for exit animations.

## Accessibility

Includes a `@media (prefers-reduced-motion: reduce)` fallback that instantly completes the animation (setting opacity to 0) for users who prefer reduced motion.

## Acceptance Criteria

- [x] `rotateY(0)` → `rotateY(90deg)`
- [x] `backface-visibility: hidden`
- [x] Pure CSS
- [x] Added in `submissions/examples/ease-side-flip-out-sk/`
