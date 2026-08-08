# Segmented Control (Sliding Tab Switcher)

A CSS-only sliding tab switcher component where selecting an option smoothly moves a highlight pill behind the chosen label. No JavaScript required.

## What does it do?

A horizontal capsule-shaped control that lets users pick one option from a group. When a new option is selected, a gradient pill slides across with a spring-like bounce animation — driven purely by CSS using the general sibling combinator (`~`) and `transform: translateX()`.

## How is it used?

```html
<div class="segmented-control">
  <input type="radio" id="seg-a" name="group" checked>
  <label for="seg-a" class="segment-label">Option A</label>

  <input type="radio" id="seg-b" name="group">
  <label for="seg-b" class="segment-label">Option B</label>

  <input type="radio" id="seg-c" name="group">
  <label for="seg-c" class="segment-label">Option C</label>

  <div class="segment-slider"></div>
</div>
```

Use the variant modifier classes for different widths:

| Variant Class              | Segments | Label Width |
|----------------------------|----------|-------------|
| *(default)*                | 3        | 90px        |
| `segmented-control--2`     | 2        | 130px       |
| `segmented-control--4`     | 4        | 70px        |

## Why is it useful?

Segmented controls are one of the most common UI patterns in modern apps — used for view toggles (Grid/List), timeframe selectors (Day/Week/Month), size pickers, and filter tabs. Having an animation-first, zero-dependency implementation that uses `ease-*` class naming conventions fits perfectly within the EaseMotion CSS philosophy of composable, human-readable motion utilities.

## Tech Stack

- HTML + CSS only — zero JavaScript
- Uses CSS general sibling combinator (`~`) with `:checked` pseudo-class for state
- Spring-like motion via `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Fully accessible: visible focus, keyboard navigable, `prefers-reduced-motion` support
- Light mode + Dark mode aware via `@media (prefers-color-scheme)`

## Browser Support

Chrome 26+, Firefox 32+, Safari 9+, Edge 79+
