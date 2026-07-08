# Minimalist Stat Cards

## 1. What does this do?

This component provides a clean, minimalist stat card layout that removes bulky backgrounds, borders, and shadows to create a modern floating-text look, organized side-by-side using a responsive grid layout.

## 2. How is it used?

Apply `.stat-card-wrapper` as a grid container (with responsive utilities like `.ease-grid`, `.ease-grid-cols-1` and `.ease-sm-grid-cols-3`), and wrap each card in a `.stat-card` container with `.ease-card-stat` for text alignment and padding:

```html
<div
  class="stat-card-wrapper ease-grid ease-grid-cols-1 ease-gap-6 ease-sm-grid-cols-3"
>
  <div class="stat-card ease-card-stat">
    <div class="ease-stat-value">42+</div>
    <div class="ease-stat-label">Utilities</div>
  </div>
  <div class="stat-card ease-card-stat">
    <div class="ease-stat-value">12</div>
    <div class="ease-stat-label">Animations</div>
  </div>
  <div class="stat-card ease-card-stat">
    <div class="ease-stat-value">0</div>
    <div class="ease-stat-label">Dependencies</div>
  </div>
</div>
```

## 3. Why is it useful?

It prevents key metrics and dashboard statistics from looking heavy or cluttered on landing pages. By converting block-like container boxes into minimalist, floating typography with responsive horizontal layouts, it improves screen space utilization and aligns with modern design trends.
