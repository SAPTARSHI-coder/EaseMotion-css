# Ease Skew-Active Progress Bar

## 1. What does this do?
A minimalist, CSS-only skewed progress bar for tech and cyberpunk interfaces featuring animated linear stripes and a soft glow effect.

## 2. How is it used?
Wrap the progress track and fill elements inside a container. The container applies the `transform: skewX(-15deg)` property to create the signature tech layout angle.

```html
<div class="ease-skew-container">
  <div class="ease-progress-track">
    <div class="ease-progress-fill"></div>
  </div>
</div>
```

Key CSS properties:
- `.ease-progress-track`: Defines track height, dark background `#1e293b`, left accent border `#3b82f6`, and `transform: skewX(-15deg)`.
- `.ease-progress-fill`: Controls progress percentage width (`75%`), background color `#3b82f6`, and repeating linear-gradient stripes animated infinitely via `@keyframes ease-move-stripes`.

## 3. Accessibility Details
Includes `@media (prefers-reduced-motion: reduce)` media query support to disable stripe movement (`animation: none`) and smooth transitions (`transition: none`) for users who prefer reduced motion.
