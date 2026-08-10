# Glassmorphism Hover Card Utility Classes

## What does this do?
Provides five reusable CSS-only utility classes that apply premium frosted-glass (glassmorphism) styling and interactive hover effects to any HTML element — from a base glass card foundation to lift, glow, and enhanced blur modifiers.

## How is it used?
Add the base `.ease-glass-card` class for the glass foundation, then layer on any modifier class for interactive effects:

```html
<!-- Basic glass card -->
<div class="ease-glass-card">Glass Card</div>

<!-- Glass card with smooth hover -->
<div class="ease-glass-card ease-glass-hover">
  Hover Card
</div>

<!-- Glass card with lift effect -->
<div class="ease-glass-card ease-glass-lift">
  Premium Hover Card
</div>

<!-- Glass card with glow aura -->
<div class="ease-glass-card ease-glass-glow">
  Glow Card
</div>

<!-- Glass card with stronger blur -->
<div class="ease-glass-card ease-glass-blur">
  Deep Frost Card
</div>

<!-- Compose multiple effects -->
<div class="ease-glass-card ease-glass-hover ease-glass-lift ease-glass-glow">
  Full Premium Card
</div>
```

## Included Utilities

| Class | Type | Description |
|---|---|---|
| `.ease-glass-card` | Base | Semi-transparent bg, border, backdrop blur, rounded corners |
| `.ease-glass-hover` | Modifier | Smooth opacity increase + subtle scale on hover |
| `.ease-glass-lift` | Modifier | Upward transform + enhanced shadow on hover |
| `.ease-glass-glow` | Modifier | Elegant glow aura via box-shadow on hover |
| `.ease-glass-blur` | Modifier | Increased backdrop blur for stronger frost effect |

## Why is it useful?
Glassmorphism is one of the most popular modern UI design patterns, featured heavily in Apple's visionOS, Windows 11 Fluent Design, and countless SaaS dashboards. These utilities let developers drop frosted-glass effects onto any element with a single class, while the composable modifier pattern keeps each effect independent and combinable. All hover effects use GPU-friendly properties (`transform`, `opacity`, `box-shadow`) to avoid layout recalculations. This aligns perfectly with EaseMotion CSS's philosophy of shipping lightweight, accessible, and high-performance motion utilities.

## Accessibility
All hover transitions are disabled for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-glass-hover,
  .ease-glass-lift,
  .ease-glass-glow {
    transition: none;
    transform: none;
  }
}
```

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see all five utilities running live, including a side-by-side comparison panel and usage code snippet.

## Contribution Notes
- Class naming follows the `ease-*` convention used throughout EaseMotion CSS.
- Maintainer may rename or adjust class names before merging.
- All work is self-contained inside this folder — no changes to `core/` or `components/`.
