# Floating Animation Utility Classes

## What does this do?
Provides five reusable CSS-only utility classes that apply smooth, performant vertical floating animations to any HTML element — from gentle ambient motion to a playful spring bounce and a hover-triggered lift.

## How is it used?
Add the class directly to any HTML element:

```html
<!-- Standard float — cards, images, icons -->
<div class="ease-float">Floating Card</div>

<!-- Slow float — ambient decorations and hero illustrations -->
<div class="ease-float-slow">Gentle Accent</div>

<!-- Fast float — badges and attention-catching icons -->
<span class="ease-float-fast">🔔</span>

<!-- Bounce float — mascots, emojis, playful CTAs -->
<div class="ease-float-bounce">✨</div>

<!-- Hover float — activates only on pointer hover -->
<button class="ease-float-hover">Hover Me</button>
```

## Included Utilities

| Class | Duration | Description |
|---|---|---|
| `.ease-float` | 3 s | Smooth infinite float, medium pace |
| `.ease-float-slow` | 5 s | Slower, ambient float |
| `.ease-float-fast` | 1.5 s | Quicker float to draw attention |
| `.ease-float-bounce` | 2.4 s | Float with a gentle spring bounce |
| `.ease-float-hover` | on hover | Float only activates on `:hover` |

## Why is it useful?
Floating effects are one of the most requested micro-animations in modern UI toolkits. They add perceived depth, signal interactivity, and bring life to otherwise static layouts — without expensive properties like `top`, `left`, or `height` that cause layout recalculations. All classes animate exclusively via `transform`, keeping compositing entirely on the GPU. This aligns perfectly with EaseMotion CSS's philosophy of shipping lightweight, accessible, and high-performance motion utilities that any developer can drop onto any element with a single class.

## Accessibility
All animations are disabled for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-float,
  .ease-float-slow,
  .ease-float-fast,
  .ease-float-bounce,
  .ease-float-hover:hover {
    animation: none;
  }
}
```

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see all five utilities running live, including a side-by-side comparison panel.

## Contribution Notes
- Class naming was chosen to follow the `ease-*` convention used throughout EaseMotion CSS.
- Maintainer may rename or adjust class names before merging.
- All work is self-contained inside this folder — no changes to `core/` or `components/`.
