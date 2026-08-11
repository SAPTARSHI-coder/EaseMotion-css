# CSS Glow Pulse Card — Responsive Dashboard Layouts

A pure CSS animated metric card with a smooth Glow Pulse interaction transition,
designed for dark Responsive Dashboard interfaces.
Implements issue #38535.

## What does this do?

Renders a set of dashboard metric cards where each card emits a rhythmic,
colour-matched glow pulse animation. The glow breathes in and out using a
CSS `@keyframes` animation applied to `box-shadow`, creating an ambient
"alive" feel with zero JavaScript.

Each card also features:
- An animated gradient border shimmer that cycles continuously
- A subtle radial inner glow spot in the top-left corner
- A mini sparkline bar chart (pure CSS flex bars)
- Hover lift with elastic easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`)
- Trend delta badges (↑ up / ↓ down / → stable)
- Full keyboard focus ring using `:focus-visible`
- `@media (prefers-reduced-motion: reduce)` kills all animations cleanly

## How is it used?

Add `.glow-pulse-card` to any block element:

```html
<link rel="stylesheet" href="style.css" />

<article class="glow-pulse-card gpc--indigo" tabindex="0">
  <div class="gpc-icon">💰</div>
  <p class="gpc-label">Monthly Revenue</p>
  <p class="gpc-value">$48,290</p>
  <span class="gpc-delta gpc-delta--up">↑ 12.4%</span>
  <p class="gpc-footer">vs $42,980 last month</p>
</article>
```

### Colour theme variants (predefined)

```html
<article class="glow-pulse-card gpc--indigo">…</article>   <!-- #6366f1 -->
<article class="glow-pulse-card gpc--emerald">…</article>  <!-- #10b981 -->
<article class="glow-pulse-card gpc--amber">…</article>    <!-- #f59e0b -->
<article class="glow-pulse-card gpc--rose">…</article>     <!-- #f43f5e -->
<article class="glow-pulse-card gpc--sky">…</article>      <!-- #38bdf8 -->
```

### Intensity modifiers

```html
<article class="glow-pulse-card gpc--indigo gpc--subtle">…</article>  <!-- 12px spread -->
<article class="glow-pulse-card gpc--sky    gpc--strong">…</article>  <!-- 36px spread -->
```

### Full custom theming via CSS custom properties

Override any token inline or in your own stylesheet:

```html
<article
  class="glow-pulse-card"
  style="
    --gpc-glow-color:     #a855f7;
    --gpc-pulse-duration: 1.8s;
    --gpc-pulse-scale:    28px;
    --gpc-radius:         20px;
  "
>…</article>
```

| Property | Default | Description |
|---|---|---|
| `--gpc-glow-color` | `#6366f1` | Glow hue (any CSS color) |
| `--gpc-pulse-duration` | `2.8s` | Full animation cycle length |
| `--gpc-pulse-easing` | `ease-in-out` | Timing function |
| `--gpc-pulse-scale` | `24px` | Max glow spread radius |
| `--gpc-radius` | `14px` | Card border radius |
| `--gpc-bg` | `#13151f` | Card background color |

### Delta badge classes

```html
<span class="gpc-delta gpc-delta--up">↑ 12.4%</span>    <!-- green -->
<span class="gpc-delta gpc-delta--down">↓ 2.3%</span>   <!-- red   -->
<span class="gpc-delta gpc-delta--flat">→ Stable</span> <!-- amber -->
```

## Why is it useful?

EaseMotion CSS already provides powerful animation utilities for entrances and
exits. This submission adds a complementary **looping ambient pattern** — the
Glow Pulse — which is one of the most requested modern dashboard aesthetics:

- **Zero JavaScript** — the entire animation runs in CSS. No IntersectionObserver,
  no requestAnimationFrame, no state management.
- **Fully customisable** — every visual parameter is a CSS custom property, so
  design systems can brand all cards from a single `:root` override.
- **Responsive by default** — CSS Grid with `auto-fill / minmax` adapts from
  4 columns on wide screens to 1 column on mobile with no media query breakpoints
  in the grid itself.
- **Accessible** — respects `prefers-reduced-motion`, provides `:focus-visible`
  rings, uses `tabindex="0"` + `role="listitem"` + `aria-label` for full
  keyboard and screen-reader support.
- **EaseMotion philosophy** — the hover lift uses
  `cubic-bezier(0.34, 1.56, 0.64, 1)` (the same elastic easing as
  `--ease-ease-bounce`) so it feels native to the framework.
