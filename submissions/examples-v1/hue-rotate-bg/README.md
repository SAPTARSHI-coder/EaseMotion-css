# Hue Rotate Background

## 1. What does this do?
Cycles a card's background gradient through the full hue spectrum continuously using `filter: hue-rotate()`.

## 2. How is it used?
Add the `.hue-card` class to any element. Use `.hue-speed-fast` or `.hue-speed-slow` to change the cycle speed.
```html
<div class="hue-card hue-speed-slow">Content</div>
```

## 3. Why is it useful?
Creates a vibrant, cycling color effect with minimal CSS. Speed modifiers offer flexibility. Respects `prefers-reduced-motion` and degrades gracefully to the static gradient.
