# Text Reveal with Clip-Path

## 1. What does this do?
Reveals text by animating `clip-path: inset()` from full concealment to fully visible, supporting four directions.

## 2. How is it used?
Add the `.reveal-text` class and a direction modifier (`.reveal-from-left`, `.reveal-from-right`, `.reveal-from-top`, `.reveal-from-bottom`). Stagger reveals using `animation-delay`.
```html
<h1 class="reveal-text reveal-from-left">Hello</h1>
```

## 3. Why is it useful?
Creates a clean, performant text entrance effect using only CSS clip-path animation. Directional modifiers offer flexibility without JavaScript. Respects `prefers-reduced-motion` and works on any background.
