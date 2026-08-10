# 3D Flip Card

## What does this do?
This adds a classic 3D flip card interaction. Each card has a front and a back face. When the user hovers (or focuses) the card, it smoothly rotates 180° to reveal the hidden back face. Both faces are fully styled and can contain any content.

## How is it used?
Wrap everything in a `.flip-card-wrapper` (which provides the `perspective` context). Place a `.flip-card` inside it, and inside that put two children: `.flip-card-front` and `.flip-card-back`.

Example:
```html
<div class="flip-card-wrapper">
  <div class="flip-card">
    <div class="flip-card-front">
      <p>Front content</p>
    </div>
    <div class="flip-card-back">
      <p>Back content</p>
    </div>
  </div>
</div>
```

## Why is it useful?
- Demonstrates the essential CSS 3D technique: `perspective` on the parent, `transform-style: preserve-3d` on the rotating child, and `backface-visibility: hidden` on both faces to prevent see-through artifacts.
- Requires **zero JavaScript** — the hover state is handled entirely by CSS.
- Highly versatile — works for team member cards, product showcases, flashcard apps, and pricing tables.
- Includes a `prefers-reduced-motion` override so the card snaps instantly for users who prefer less animation.
