# ease-breakout — Container Breakout Utility

## 1. What does this do?

Adds container breakout utilities that let elements span the full viewport width while staying inside a parent container. Uses the `100vw` + negative margin technique and an alternative CSS Grid approach.

**Classes:**

- `.ease-breakout` — Full viewport width (both sides)
- `.ease-breakout-left` — Break out to the left edge only
- `.ease-breakout-right` — Break out to the right edge only
- `.ease-breakout-full` — Full viewport, no max-width
- `.ease-breakout-sm` — Slightly wider than container
- `.ease-breakout-lg` — Wider breakout
- `.ease-breakout-xl` — Maximum width breakout
- `.ease-breakout-container` — CSS Grid-based container
- `.ease-breakout-item` — Grid item spanning all columns
- `.ease-breakout-item-left` — Grid item spanning left + center
- `.ease-breakout-item-right` — Grid item spanning center + right
- `.ease-breakout-overlay` — Position-based breakout (translateX)
- `.ease-{sm|md|lg|xl}:breakout` / `:breakout-left` / `:breakout-right` / `:breakout-none` — Responsive

## 2. How is it used?

```html
<!-- Negative margin technique -->
<div class="container">
  <div class="ease-breakout">Full viewport width</div>
</div>

<!-- CSS Grid technique -->
<div class="ease-breakout-container">
  <div>Normal width content</div>
  <div class="ease-breakout-item">Full width breakout</div>
</div>

<!-- Responsive -->
<div class="ease-lg:breakout">Desktop only breakout</div>
```

## 3. Why is this useful?

- **Zero JS** — Pure CSS breakout
- **Two techniques** — Negative margin and CSS Grid
- **Directional** — Left or right only breakout
- **Sized variants** — Sm, lg, xl
- **Responsive** — Breakpoint-prefixed variants
- **No overflow issues** — Uses `100vw` (scrollbar-aware)
