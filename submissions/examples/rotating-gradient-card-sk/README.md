# CSS @property Animated Rotating Gradient Card

## What does this do?
Animates a conic gradient border that continuously rotates around a card using the CSS `@property` Houdini API — something impossible with plain CSS transitions before registered custom properties.

## How is it used?

```html
<!-- Single rotating gradient border -->
<div class="gradient-card">
  <div class="gradient-card__inner">
    <span class="gradient-card__badge">New</span>
    <h3 class="gradient-card__title">Card Title</h3>
    <p class="gradient-card__body">Card content goes here.</p>
    <button class="gradient-card__btn">Action →</button>
  </div>
</div>

<!-- Dual counter-spin variant -->
<div class="gradient-card gradient-card--dual">
  <div class="gradient-card__inner">...</div>
</div>
```

Theming via CSS custom properties:
```css
--glow-color-1: #6366f1;
--glow-color-2: #ec4899;
--glow-color-3: #06b6d4;
--spin-duration: 4s;
--card-radius: 16px;
```

## Why is it useful?
Demonstrates `@property` (CSS Houdini) — registering `--gradient-angle` as an `<angle>` type allows the browser to interpolate it in keyframes, animating a conic gradient's rotation. Without `@property`, animating gradients requires JS or hacky transforms. Pauses on hover for user control. Respects `prefers-reduced-motion` with a static fallback.
