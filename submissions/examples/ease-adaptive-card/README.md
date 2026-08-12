# Ease Adaptive Card

Component showcasing native CSS `light-dark()` color switching without JavaScript.

## 1. What does this do?
It natively shifts a card's colors between light and dark themes using the standard CSS `light-dark()` color function based on the active `color-scheme`.

## 2. How is it used?
First, enable light and dark mode support at the root level using `color-scheme`, then use `light-dark(lightValue, darkValue)` to supply adaptive values:

```css
:root {
  color-scheme: light dark;
}

.ease-adaptive-card {
  background-color: light-dark(#ffffff, #1e293b);
  color: light-dark(#0f172a, #f8fafc);
  border: 1px solid light-dark(#e2e8f0, #334155);
}
```

HTML usage:
```html
<div class="ease-adaptive-card">
  <span class="ease-adaptive-tag">Tag</span>
  <h2>Adaptive Card</h2>
  <p class="ease-adaptive-text">Card content goes here.</p>
</div>
```

## 3. Why is it useful?
This permanently eliminates the need for duplicate `@media (prefers-color-scheme: dark)` media query blocks and heavily reduces the amount of CSS required to support dual light/dark themes.
