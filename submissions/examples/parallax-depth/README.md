# Parallax Depth Card

## 1. What does this do?
A card with multiple visual layers that move at different speeds based on mouse position, creating a 3D parallax depth effect.

## 2. How is it used?
Add the `.parallax-card` container with `.parallax-layer` children. Each layer has a `data-speed` attribute (0–1) controlling how much it moves.
```html
<div class="parallax-card">
  <div class="parallax-layer" data-speed="0.3"></div>
</div>
```

## 3. Why is it useful?
Creates an immersive depth effect with minimal vanilla JavaScript. Each layer's speed is independently configurable. Respects `prefers-reduced-motion` and degrades to a static card.
