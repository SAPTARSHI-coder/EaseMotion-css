# Neon Glow Text

## 1. What does this do?
Displays text with an animated neon glow effect using multiple layered `text-shadow` values and a pulsing brightness animation.

## 2. How is it used?
Add the `.neon-text` class to any heading and a color variant class (`.neon-pink`, `.neon-cyan`, `.neon-green`) to choose the glow color.
```html
<h1 class="neon-text neon-cyan">GLOW</h1>
```

## 3. Why is it useful?
Creates a striking neon sign aesthetic with zero JavaScript. Each color variant is independently customizable via `text-shadow`. Respects `prefers-reduced-motion` and degrades gracefully to plain white text.
