# Smooth Hover Transition Utility

A composable utility class that adds a smooth CSS ease transition to hover, active, and focus states.

## 1. What does this do?

This utility class adds smooth transition timing and duration to hover/active properties (colors, borders, shadows, and transforms) on any element, eliminating abrupt or jarring hover visual changes.

## 2. How is it used?

Link to `easemotion.css` and `style.css`, then apply the class `.smooth-hover-ag` to any element:

```html
<!-- Composable on standard buttons -->
<button class="btn-ghost-ag smooth-hover-ag">Ghost Button</button>

<!-- Composable on cards -->
<div class="card-item-ag smooth-hover-ag" tabindex="0">Card content</div>

<!-- Inline Customization -->
<div
  class="card-item-ag smooth-hover-ag"
  style="--smooth-speed: 150ms; --smooth-ease: ease-out;"
>
  Fast Custom Card
</div>
```

### API CSS Variables

- `--smooth-speed`: Transition duration (defaults to `var(--ease-speed-medium)` / `300ms`).
- `--smooth-ease`: Transition timing ease (defaults to `var(--ease-ease)` / `cubic-bezier(0.4, 0, 0.2, 1)`).

---

## 3. Why is it useful?

EaseMotion CSS is built on the philosophy of composable and animation-first code. Instead of hardcoding transition properties inside individual component stylesheets, this utility allows developers to compose a single class (`.smooth-hover-ag`) onto any element (buttons, links, badges, cards) to soften state changes. Furthermore, it explicitly transitions specific CSS properties instead of using `all` to avoid unnecessary repaints, maximizing INP and Core Web Vitals rendering performance.
