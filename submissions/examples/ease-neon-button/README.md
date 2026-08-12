# Ease Neon Button (`ease-neon-button`)

## 1. What does this do?
A highly realistic neon sign button featuring a faulty-tube flicker effect that stabilizes on hover.

## 2. How is it used?
Intense light bloom is achieved by stacking multiple layers of `text-shadow` and `box-shadow` with increasing blur radii both inside and outside the element. The erratic faulty-tube flickering effect is created by dropping the element opacity and clearing shadows at highly specific, uneven keyframe intervals (e.g., at 20%, 24%, 55% in the `@keyframes` timeline). Upon hover or focus, the animation pauses, stabilizing the electrical current and intensifying the solid background fill and light bloom.

```html
<button class="ease-neon-btn" aria-label="Open Neon Sign">Open</button>
```

```css
@import "style.css";
```

## 3. Why is it useful?
Developers often rely on heavy JavaScript intervals or `requestAnimationFrame` loops to randomize flickering lights on web interfaces, which frequently causes layout thrashing and unnecessary CPU overhead. By encoding erratic timing directly into CSS compositor `@keyframes`, this component perfectly simulates random electrical flickering at 60fps with zero JavaScript execution cost.
