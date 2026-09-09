# ease-metric-card-animated-counter

A pure CSS animated data metric card component with smooth counter reveal animations, background fill effects, colour themes, size variants, stagger support, dark mode, and full accessibility compliance.

---

## What does this do?

This component renders a **dashboard-ready metric card** with:

- A **card entrance animation** — slides up and fades in on page load using `@keyframes ease-metric-card-enter`
- A **background fill animation** — a translucent accent gradient scales from left to right behind the card content using `@keyframes ease-metric-fill-expand`, providing a visual "loading" feel
- A **counter reveal animation** — the number value blurs, scales, and fades in with a sweeping highlight, then settles with an accent underline drawn using `@keyframes ease-counter-reveal`, `ease-counter-highlight`, and `ease-counter-underline`
- **Trend indicators** — colour-coded trend badges (↑ up, ↓ down, → neutral)

---

## How is it used?

### Basic HTML Structure

```html
<div class="ease-metric-card ease-metric-primary">
  <div class="ease-metric-bg-fill"></div>
  <span class="ease-metric-label">Total Revenue</span>
  <div class="ease-metric-value" aria-live="polite">
    <span class="ease-counter">125000</span>
    <span class="ease-metric-suffix" aria-hidden="true">$</span>
  </div>
  <span class="ease-metric-description">Last 30 days</span>
  <div class="ease-metric-trend ease-trend-up" aria-label="Up 12 percent">
    <span class="ease-trend-icon" aria-hidden="true">↑</span>
    <span class="ease-trend-label">+12%</span>
  </div>
</div>
```

### Gallery / Grid Layout

Wrap multiple cards in `.metrics-grid` for a responsive auto-fit grid:

```html
<div class="metrics-grid">
  <div class="ease-metric-card ease-metric-primary"> ... </div>
  <div class="ease-metric-card ease-metric-success"> ... </div>
  <div class="ease-metric-card ease-metric-warning"> ... </div>
  <div class="ease-metric-card ease-metric-danger">  ... </div>
</div>
```

---

## Class Reference

### Card Wrapper Classes

| Class | Description |
|---|---|
| `ease-metric-card` | **Required.** Base card styles, shadow, and entrance animation |
| `ease-metric-primary` | Indigo accent theme |
| `ease-metric-success` | Emerald accent theme |
| `ease-metric-warning` | Amber accent theme |
| `ease-metric-danger` | Red accent theme |
| `ease-metric-sm` | Small size variant |
| `ease-metric-md` | Medium size variant (default) |
| `ease-metric-lg` | Large size variant |

### Inner Element Classes

| Class | Element | Description |
|---|---|---|
| `ease-metric-bg-fill` | `<div>` | Background fill element — **must be first child** |
| `ease-metric-label` | `<span>` | Card heading / metric name |
| `ease-metric-value` | `<div>` | Container for counter and suffix |
| `ease-counter` | `<span>` | Animating numeric value |
| `ease-metric-suffix` | `<span>` | Units (e.g. `$`, `%`, `min`) |
| `ease-metric-description` | `<span>` | Optional sub-label below value |
| `ease-metric-trend` | `<div>` | Trend badge wrapper |
| `ease-trend-up` | modifier | Green trend badge |
| `ease-trend-down` | modifier | Red trend badge |
| `ease-trend-neutral` | modifier | Grey trend badge |
| `ease-trend-icon` | `<span>` | Arrow icon inside trend badge |
| `ease-trend-label` | `<span>` | Percentage text inside trend badge |

### Dark Mode Wrapper

```html
<div class="metrics-grid ease-dark-mode">
  <!-- all child .ease-metric-card elements render in dark palette -->
</div>
```

---

## CSS Custom Properties

All timing and easing values can be overridden globally or per-card using inline `style` attributes.

| Variable | Default | Description |
|---|---|---|
| `--ease-metric-duration` | `1.2s` | Duration of the fill and counter animations |
| `--ease-metric-delay` | `0s` | Delay before animations start (use for stagger) |
| `--ease-metric-easing` | `cubic-bezier(0.645,0.045,0.355,1)` | Easing function |
| `--ease-metric-fill-opacity` | `0.08` | Opacity of the background fill layer |

### Staggered Animation Example

Pass a progressively larger `--ease-metric-delay` per card:

```html
<div class="ease-metric-card ease-metric-primary" style="--ease-metric-delay: 0s;">   ... </div>
<div class="ease-metric-card ease-metric-success" style="--ease-metric-delay: 0.1s;"> ... </div>
<div class="ease-metric-card ease-metric-warning" style="--ease-metric-delay: 0.2s;"> ... </div>
<div class="ease-metric-card ease-metric-danger"  style="--ease-metric-delay: 0.3s;"> ... </div>
```

### Speed Override Example

```css
/* Slower animation on a specific card */
.my-slow-card {
  --ease-metric-duration: 2s;
}

/* Faster animation globally */
:root {
  --ease-metric-duration: 0.6s;
}
```

---

## Design Token Integration

This component uses and extends existing EaseMotion CSS design tokens:

| Token | Used For |
|---|---|
| `--ease-color-primary` / `success` / `warning` / `danger` | Accent colours per theme variant |
| `--ease-speed-fast`, `--ease-speed-medium`, `--ease-speed-slow` | Animation timing |
| `--ease-ease`, `--ease-bounce`, `--ease-in-out-cubic` | Easing curves |
| `--ease-shadow-sm`, `--ease-shadow-md`, `--ease-shadow-lg`, `--ease-shadow-xl` | Card elevation |
| `--ease-space-*` | Padding and gap spacing |
| `--ease-radius-md` | Card border radius |

---

## Keyframe Animations

| Keyframe | Element | Effect |
|---|---|---|
| `ease-metric-card-enter` | `.ease-metric-card` | Slide up + fade in on page load |
| `ease-metric-fill-expand` | `.ease-metric-bg-fill` | Background gradient scales from left to right |
| `ease-counter-reveal` | `.ease-counter` | Blur + translate + fade reveal of the number |
| `ease-counter-highlight` | `.ease-counter::before` | Translucent pill sweeps over the number and fades |
| `ease-counter-underline` | `.ease-counter::after` | Accent underline draws left to right |

---

## Accessibility

- All animated elements are wrapped in `aria-live="polite"` regions so assistive technologies announce value changes
- `aria-hidden="true"` is applied to decorative icons and suffix symbols
- `aria-label` provides a plain-language description on trend badges
- **Full `prefers-reduced-motion` support** — when a user has reduced-motion enabled in their OS, all animations are instantly disabled and values are shown in their final state without any transitions

```css
@media (prefers-reduced-motion: reduce) {
  .ease-metric-card,
  .ease-metric-bg-fill,
  .ease-counter,
  .ease-counter::before,
  .ease-counter::after {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Why is it useful?

`ease-metric-card-animated-counter` fits perfectly within EaseMotion CSS's philosophy of delivering **motion that carries meaning** without relying on JavaScript.

Dashboard KPI cards are ubiquitous in modern web applications (Stripe, Vercel, Databox, Google Analytics), yet most implementations depend on JS counter libraries. This component provides:

1. **Zero-JS animation** — all effects are driven by `@keyframes` and CSS custom properties
2. **EaseMotion token alignment** — uses the same speed, easing, colour, spacing, and shadow tokens as the rest of the framework
3. **Real-world utility** — drop-in component for analytics pages, admin dashboards, business intelligence interfaces, and progress tracking displays
4. **Accessibility-first** — ships with reduced-motion compliance, ARIA attributes, and WCAG AA contrast ratios out of the box
5. **Composable** — complements existing EaseMotion utilities (`ease-slide-up`, `ease-fade-in`, `ease-card`) and can be paired with skeleton loaders for real-time update patterns

---

## Browser Support

| Browser | Version | Status |
|---|---|---|
| Chrome | 105+ | ✅ Full support |
| Firefox | 110+ | ✅ Full support |
| Safari | 15.4+ | ✅ Full support |
| Edge | 105+ | ✅ Full support |

> `color-mix(in srgb, ...)` requires Chrome 111+, Firefox 113+, Safari 16.2+. A `rgba()` fallback can be used if broader browser support is needed.
