# Component Title Showcase 185 (variation: `sou`)

A premium, pure-CSS **live metric / stat dashboard tile** built for EaseMotion CSS — featuring an animated gradient metric number, pure-CSS sparkline chart, live-pulse status dot, trend indicator, and a hover lift-and-glow interaction.

> Variation suffix: **`sou`** — parallel implementation alongside `new-comp-slug-185-sn250`.

---

## 1. What does this do?

It renders a self-contained, animated dashboard tile that displays a key business metric with a live status pulse, a percentage trend indicator, and an inline 14-bar sparkline graph — all built with **only HTML and CSS** (no JavaScript, no SVG paths, no external assets).

## 2. How is it used?

Drop the markup below into your page and link `style.css`:

```html
<link rel="stylesheet" href="style.css" />

<article class="ease-stat-tile-185-sou">

  <header class="ease-stat-tile-185-sou__head">
    <span class="ease-stat-tile-185-sou__label">Revenue</span>
    <span class="ease-stat-tile-185-sou__live">Live</span>
  </header>

  <p class="ease-stat-tile-185-sou__value">
    $48.2K<small>/wk</small>
  </p>

  <div class="ease-stat-tile-185-sou__trend">
    <span class="ease-stat-tile-185-sou__delta">12.4%</span>
    <span>vs last week</span>
  </div>

  <div class="ease-stat-tile-185-sou__chart" aria-hidden="true">
    <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  </div>

  <footer class="ease-stat-tile-185-sou__foot">
    <span>Updated just now</span>
    <span class="ease-stat-tile-185-sou__period">Last 14d</span>
  </footer>

</article>
```

### Class reference

| Class | Purpose |
|---|---|
| `.ease-stat-tile-185-sou` | Root element. Holds the tile background, hover-lift, and glow. |
| `.ease-stat-tile-185-sou__head` | Header row containing the label + live status. |
| `.ease-stat-tile-185-sou__label` | Small uppercase category label (e.g. *Revenue*). |
| `.ease-stat-tile-185-sou__live` | Live indicator with a pulsing emerald dot. |
| `.ease-stat-tile-185-sou__value` | Large shimmer-gradient metric number. |
| `.ease-stat-tile-185-sou__trend` | Trend description row (percent + comparison text). |
| `.ease-stat-tile-185-sou__delta` | Green pill showing the percentage change. |
| `.ease-stat-tile-185-sou__chart` | Sparkline container — populate with 14 `<i>` bar elements. |
| `.ease-stat-tile-185-sou__foot` | Footer row with timestamp + period label. |
| `.ease-stat-tile-185-sou__period` | Highlighted period text inside the footer. |

## 3. Why is it useful?

This submission fits EaseMotion CSS's philosophy of **expressive, motion-rich UI built entirely with native CSS**:

- 🎨 **100% pure CSS** — zero JavaScript, zero CDNs, zero external dependencies.
- 📊 Demonstrates how to build a **real-looking analytics sparkline using only flex + `<i>` bars** (no SVG, no canvas).
- 🌀 Uses modern CSS features (`@layer`, `background-clip: text`, layered radial/linear gradients, pulsing `box-shadow` rings, `cubic-bezier` easing).
- 🧩 **Self-contained & token-driven** — all colors, radii, and shadows live as scoped `--st-*` custom properties for easy theming.
- ♿ **Accessibility-aware** — respects `prefers-reduced-motion`, uses semantic `<article>` / `<header>` / `<footer>` markup, marks the decorative chart with `aria-hidden="true"`, and supplies an `aria-label` on the root.
- 🧠 Provides a **completely different parallel design** to `new-comp-slug-185-sn250` (a simple glowing headline), expanding the showcase from a single text effect to a full data-visualization tile — exactly as encouraged by the EaseMotion contribution guidelines.

---

## Features

- Animated gradient metric number with shimmer (5s loop)
- Pure-CSS sparkline of 14 staggered growing bars
- Pulsing "live" status dot using expanding box-shadow rings
- Green trend pill with up-arrow indicator
- Layered radial + linear gradient background with soft glow blob
- Hover: smooth lift + intensified cyan glow + accent border
- Full `prefers-reduced-motion` support

## Browser support

Works in all modern evergreen browsers (Chrome, Edge, Firefox, Safari, Opera).