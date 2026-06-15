# Responsive Breakpoint Tester

**A premium educational UI component for the [EaseMotion CSS](https://github.com/easemotioncss) project.**

Resize your browser window and watch the grid shift in real time — from a single-column mobile stack to a four-column desktop spread — while learning exactly what each breakpoint means and why it exists.

---

## Description

The Responsive Breakpoint Tester is a self-contained, interactive reference component built with **pure HTML and CSS** — no JavaScript, no frameworks, no external libraries. It ships four glassmorphism cards (Mobile, Tablet, Laptop, Desktop), an animated viewport ruler, and a structured educational section that explains responsive design from first principles.

It is designed to live inside the EaseMotion CSS documentation site as a hands-on demo that teaches developers the framework's breakpoint system by example.

---

## Features

| Feature | Details |
|---|---|
| **Pure HTML & CSS** | Zero JavaScript. Zero external dependencies. |
| **Responsive Grid** | 1 col → 2 col → 4 col via CSS Grid + Media Queries |
| **Glassmorphism UI** | Frosted glass cards with `backdrop-filter` blur |
| **Gradient Background** | Deep midnight-navy with ambient violet & cyan glow blobs |
| **Hover Animations** | Float lift, glow expansion, title color shift — all CSS |
| **Animated Entrance** | `fadeInUp` keyframes staggered per card with `animation-delay` |
| **Floating Icon Effect** | Slow sinusoidal float on device icons via `@keyframes floatSlow` |
| **Animated Range Bars** | CSS `fillBar` animation reveals each breakpoint's width span |
| **Viewport Ruler** | Decorative scale in the hero shows breakpoint thresholds at a glance |
| **Educational Section** | Three-panel explainer: What, Why, and How of responsive layouts |
| **Syntax-highlighted Code** | HTML-encoded token spans for the usage code window |
| **Accessible** | `prefers-reduced-motion` respected; `focus-visible` ring; ARIA labels |
| **Premium Typography** | `Inter` system-stack for body; `JetBrains Mono` for code |
| **Sticky Header** | `backdrop-filter` blur nav that stays at top while scrolling |

---

## Usage

### 1. Clone or copy the files

```
responsive-breakpoint-tester/
├── demo.html
├── style.css
└── README.md
```

### 2. Open in browser

```bash
# Option A — just open directly
open demo.html

# Option B — local dev server (avoids any path quirks)
npx serve .
# or
python3 -m http.server 8080
```

### 3. Resize and explore

Drag your browser window narrow and wide. At the key thresholds you'll see the card grid reflow:

| Viewport | Columns |
|---|---|
| `0px – 767px` | **1 column** (Mobile) |
| `768px – 1279px` | **2 columns** (Tablet) |
| `1280px+` | **4 columns** (Laptop / Desktop) |

---

## Breakpoints Covered

```
Mobile   ·  0px   →  767px   ·  @media (max-width: 767px)
Tablet   ·  768px →  1023px  ·  @media (min-width: 768px)
Laptop   ·  1024px → 1439px  ·  @media (min-width: 1024px)
Desktop  ·  1440px → ∞       ·  @media (min-width: 1440px)
```

---

## Why It Fits EaseMotion CSS

EaseMotion CSS is built around the philosophy that good defaults should be **visible and teachable**, not buried in documentation. This component embodies that philosophy directly:

- **It demonstrates by doing.** The component itself is a live example of the grid system it teaches — changing from 1 to 4 columns using the same breakpoints EaseMotion ships.
- **It surfaces the internals.** Every card shows the actual `@media` query it corresponds to, so developers learn the framework and CSS fundamentals simultaneously.
- **It matches the EaseMotion aesthetic.** Dark mode, glassmorphism, fluid typography, and smooth CSS transitions are all EaseMotion design values — this component is a reference implementation of those patterns.
- **It ships zero runtime cost.** No JS bundle, no hydration, no framework overhead. Pure HTML + CSS loads instantly and degrades gracefully in any browser.

---

## Folder Structure

```
responsive-breakpoint-tester/
│
├── demo.html          # Full markup — header, hero, cards, learn, usage, footer
├── style.css          # All styles — custom properties, grid, cards, animations
└── README.md          # This file
```

---

## Customisation

All colour and sizing decisions are driven by CSS custom properties in the `:root` block at the top of `style.css`. To retheme for a different brand:

```css
:root {
  --bg-base:    #070b18;   /* Page background */
  --violet:     #6366f1;   /* Primary accent */
  --cyan:       #22d3ee;   /* Secondary accent */
  --text-primary:  #f0f4ff;
  --text-secondary:#94a3b8;
}
```

Each card's accent colour is set via an inline `--card-color` custom property on the `<article>` element, making per-card theming a single attribute change.

---

## Browser Support

| Browser | Status |
|---|---|
| Chrome / Edge 88+ | ✅ Full support |
| Firefox 94+ | ✅ Full support |
| Safari 14+ | ✅ Full support (`-webkit-backdrop-filter` included) |
| Chrome Android | ✅ Full support |
| Samsung Internet 14+ | ✅ Full support |

> `backdrop-filter` has universal support in modern browsers. A graceful fallback (slightly darker background) applies automatically in unsupported environments.

---

*Built for EaseMotion CSS · Pure HTML & CSS · No JavaScript required*