# ease-stagger — Sequential Child Animation Delays

## 1. What does this do?

Adds a `.ease-stagger` utility class that automatically applies incremental `animation-delay` to direct children using `nth-child` selectors. No more manually adding `style="animation-delay: 100ms"` to each list item.

**Variants:**

- `.ease-stagger` — Default 100ms intervals
- `.ease-stagger-50` — 50ms intervals (faster cascade)
- `.ease-stagger-200` — 200ms intervals (slower cascade)
- Custom: `--ease-stagger-interval` CSS property on parent

**Supports up to 20 children.** Works with any animation class on the children.

## 2. How is it used?

```html
<!-- Default (100ms) -->
<div class="ease-stagger">
  <div class="ease-fade-in">Item 1</div>
  <div class="ease-fade-in">Item 2</div>
  <div class="ease-fade-in">Item 3</div>
</div>

<!-- 50ms variant -->
<div class="ease-stagger ease-stagger-50">
  <div class="ease-slide-up">Item 1</div>
  <div class="ease-slide-up">Item 2</div>
</div>

<!-- Custom interval -->
<div class="ease-stagger" style="--ease-stagger-interval: 150ms;">
  <div class="ease-zoom-in">Item 1</div>
  <div class="ease-zoom-in">Item 2</div>
</div>
```

## 3. Why is this useful?

- **Eliminates boilerplate** — No more manual delay classes on each child
- **Scales to any count** — Up to 20 children automatically sequenced
- **Framework-agnostic** — Works with any animation library that uses `animation-delay`
- **Customizable** — Three presets + arbitrary `--ease-stagger-interval` values
- **Lightweight** — Pure CSS, no JavaScript, no dependencies
