# Flexbox Alignment & Layout Utility Mixins

> Reusable SCSS mixins and utility classes for the most common **flexbox alignment and layout patterns** — no more memorizing `justify-content` / `align-items` combos.

**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)  
**Issue:** [#27673](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/27673)  
**Track:** SCSS Integration

---

## What Does This Do?

Provides a **core `ease-flex` mixin** with sensible defaults, plus 6 shortcut mixins for the most common layouts (center, space-between, space-around, column, column-center, wrap). Also ships matching **utility classes** and item-level helpers (grow, shrink, self-align).

---

## Files

| File | Purpose |
|------|---------|
| `_flexbox-alignment-layout-utility-mixins-sou.scss` | Main SCSS partial (mixins + utility classes) |
| `style.css` | Compiled CSS output |
| `demo.html` | Standalone browser demo |
| `README.md` | This documentation |

---

## Configurable Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `$ease-flex-gap` | `1rem` | Default gap between flex children |
| `$ease-flex-direction` | `row` | Default flex direction |
| `$ease-flex-wrap` | `nowrap` | Default wrap behavior |

---

## Mixins

| Mixin | Purpose |
|-------|---------|
| `ease-flex($justify, $align, $direction, $wrap, $gap)` | Full-control flex container |
| `ease-flex-center($gap)` | Perfectly centered (both axes) |
| `ease-flex-between($gap)` | Space-between + vertically centered |
| `ease-flex-around($gap)` | Space-around + vertically centered |
| `ease-flex-column($gap)` | Vertical stack, left-aligned |
| `ease-flex-column-center($gap)` | Vertical stack, centered |
| `ease-flex-wrap($gap)` | Wrapping row (card grid) |

---

## Utility Classes

**Container classes:**
`.ease-flex` · `.ease-flex-center` · `.ease-flex-between` · `.ease-flex-around` · `.ease-flex-column` · `.ease-flex-column-center` · `.ease-flex-wrap`

**Item classes:**
`.ease-flex-grow` · `.ease-flex-shrink` · `.ease-flex-none` · `.ease-flex-auto`

**Align-self classes:**
`.ease-self-start` · `.ease-self-center` · `.ease-self-end` · `.ease-self-stretch`

---

## Usage

### 1. Utility Classes (HTML)

```html
<!-- Perfectly centered content -->
<div class="ease-flex-center">
  <button>Click Me</button>
</div>

<!-- Header layout: logo left, nav right -->
<header class="ease-flex-between">
  <div>Logo</div>
  <nav>Menu</nav>
</header>

<!-- Wrapping card grid -->
<div class="ease-flex-wrap">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
</div>

<!-- Item that grows to fill remaining space -->
<div class="ease-flex">
  <div>Fixed</div>
  <div class="ease-flex-grow">I grow!</div>
  <div>Fixed</div>
</div>
```

### 2. Mixins (SCSS)

```scss
@import 'flexbox-alignment-layout-utility-mixins-sou';

.hero {
  @include ease-flex-center(2rem);
  min-height: 100vh;
}

.nav-bar {
  @include ease-flex-between(1.5rem);
}

.sidebar {
  @include ease-flex-column(0.5rem);
}

.custom {
  @include ease-flex(flex-end, baseline, row, wrap, 2rem);
}
```

---

## Why Is This Useful?

- ✅ **Ends the "which flex property does what?" struggle** — semantic mixin names describe intent
- ✅ **Composable** — 1 core mixin + 6 shortcuts covers 95% of real layouts
- ✅ **Fully configurable** — override gap, direction, wrap, or use full-control mode
- ✅ **Dual API** — utility classes for quick prototyping, mixins for custom scenarios
- ✅ **Item-level helpers** — grow, shrink, self-align classes for common flex-item needs
- ✅ **Fits EaseMotion's philosophy** — small, human-readable, class-based

---

## Demo

Open `demo.html` in any modern browser to see all layouts in action — center, between, around, column, wrapping grid, and item utilities.

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge, Opera) that support CSS Flexbox and the `gap` property.
