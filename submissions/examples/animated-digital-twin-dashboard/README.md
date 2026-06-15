# Animated Digital Twin Dashboard

> A premium, futuristic monitoring dashboard component for the **EaseMotion CSS** animation library — built with pure HTML & CSS, zero dependencies.

---

## Description

The **Animated Digital Twin Dashboard** is a showpiece component demonstrating the full expressive range of EaseMotion CSS animations. It visualises a real-time infrastructure monitoring system — a "digital twin" — with six data panels orbiting a glowing central core, all animated with smooth, composable CSS keyframes.

The visual language draws from enterprise AI platforms and sci-fi HUD interfaces: deep navy backgrounds, cyan-and-purple glows, glassmorphism cards, and a rotating ring core that pulses with life. Every animation is declared through EaseMotion utility classes, making the component as instructive as it is beautiful.

---

## Features

- **CSS Only** — zero JavaScript, zero frameworks, zero build steps
- **Fully Responsive** — adapts from wide desktop (1400px) → tablet (1024px) → mobile (360px)
- **Glassmorphism panels** — `backdrop-filter: blur` with gradient borders and premium shadows
- **Floating Cards** — panels levitate continuously with staggered entry delays
- **Animated Core** — dual counter-rotating rings + pulsing orb + glowing ring-dot indicators
- **Glow Effects** — cyan and purple radial glows, box-shadows, and drop-shadows throughout
- **Gauge Bars** — animated width-fill with colour-coded status (ok / warn / critical)
- **Sparklines** — CSS-only bar sparklines for CPU history
- **Memory Blocks** — segmented block visualisation for RAM usage
- **Donut Chart** — SVG donut with animated stroke for storage
- **Signal Waves** — expanding ring animation for network panel
- **AI Activity Bars** — independently dancing bars for inference load
- **Area Chart** — SVG gradient area with reveal animation for analytics
- **Status Bar** — bottom system-status ribbon with pulsing indicator dots
- **Reduced Motion Support** — `@media (prefers-reduced-motion)` override included

---

## Usage

No installation required. Just link the stylesheet and open the HTML file.

```html
<!-- In your HTML <head> -->
<link rel="stylesheet" href="style.css" />
```

```html
<!-- Apply EaseMotion utility classes to any element -->
<div class="em-float" style="--em-delay: 0.2s">
  I float!
</div>

<div class="em-pulse">
  I pulse!
</div>

<div class="em-fade-in em-slide-up" style="--em-delay: 0.4s">
  I fade in and slide up together.
</div>
```

### EaseMotion Utility Classes

| Class             | Effect                                    | CSS Variable Controls          |
|-------------------|-------------------------------------------|-------------------------------|
| `.em-float`       | Continuous vertical levitation            | `--em-delay`, `--em-duration-float` |
| `.em-pulse`       | Scale + glow breath loop                  | `--em-duration-pulse`         |
| `.em-breathe`     | Opacity breath loop                       | `--em-duration-breathe`       |
| `.em-fade-in`     | One-shot fade in on load                  | `--em-delay`, `--em-duration-fadein` |
| `.em-slide-up`    | One-shot slide-up entry                   | `--em-delay`, `--em-duration-slideup` |
| `.em-rotate-cw`   | Continuous clockwise rotation             | `--em-duration-rotate`        |
| `.em-rotate-ccw`  | Continuous counter-clockwise rotation     | `--em-duration-rotate`        |
| `.em-glow-border` | Pulsing glowing border                    | –                             |

### Staggering animations with `--em-delay`

```html
<div class="em-float" style="--em-delay: 0.0s">Panel 1</div>
<div class="em-float" style="--em-delay: 0.2s">Panel 2</div>
<div class="em-float" style="--em-delay: 0.4s">Panel 3</div>
```

### Override durations globally

```css
:root {
  --em-duration-float:   8s;   /* slower float */
  --em-duration-pulse:   2s;   /* faster pulse */
  --em-duration-rotate: 20s;   /* slower rings */
}
```

---

## Why it fits EaseMotion CSS

EaseMotion CSS is built on three design principles. This dashboard embodies all three.

### 1. Animation-first

Every visual element in the dashboard exists to carry an animation. The rotating rings aren't decoration — they demonstrate `rotateClockwise` and `rotateCounterClockwise`. The panels don't just appear — they `em-slide-up` with staggered `--em-delay` values. The status badge doesn't sit still — it `em-breathe`s. The dashboard is a live catalogue of what EaseMotion can do.

### 2. Human-readable

Animation intent is declared at the HTML level with plain class names:

```html
<div class="panel em-fade-in em-float" style="--em-delay: 0.3s">
```

A developer reading this immediately understands: this panel fades in, then floats. No digging into JavaScript timelines or configuration objects. The CSS variables (`--em-delay`, `--em-duration-float`) read like plain English.

### 3. Composable

Animations stack. `em-fade-in` and `em-float` are independent keyframe sequences assigned to the same `animation` property. They don't conflict. You can layer `em-pulse` on top of `em-rotate-cw`. You can use `em-breathe` alone or combine it with `em-glow-border`. Each utility class is a building block — mix and match to create complex choreography from simple parts.

```html
<!-- Rotating + pulsing core -->
<div class="core em-pulse">
  <div class="ring em-rotate-cw"></div>
  <div class="ring em-rotate-ccw"></div>
</div>
```

---

## Folder Structure

```
animated-digital-twin-dashboard/
├── demo.html     ← Complete dashboard markup
├── style.css     ← All styles + EaseMotion keyframes + utilities
└── README.md     ← This file
```

---

## Design Tokens

All colours, durations, and spacing values are declared as CSS custom properties at `:root` level, making the entire component themeable by overriding a single block:

```css
:root {
  --cyan:          #06b6d4;
  --purple-mid:    #7c3aed;
  --bg-card:       rgba(10, 20, 45, 0.55);
  --em-duration-float: 6s;
  /* … */
}
```

---

## Browser Support

| Feature              | Chrome | Firefox | Safari | Edge |
|----------------------|--------|---------|--------|------|
| `backdrop-filter`    | ✓      | ✓       | ✓      | ✓    |
| CSS custom properties| ✓      | ✓       | ✓      | ✓    |
| CSS Grid             | ✓      | ✓       | ✓      | ✓    |
| CSS Animations       | ✓      | ✓       | ✓      | ✓    |

Recommended: any evergreen browser from 2022 onward.

---

## Accessibility

- Decorative elements use `aria-hidden="true"` to hide from screen readers
- LIVE region label on the Digital Core via `aria-label`
- Full `@media (prefers-reduced-motion: reduce)` override disables all animations for users who need it
- Colour contrast on all text labels meets WCAG AA minimum

---

*Part of the EaseMotion CSS component library — animation-first, human-readable, composable.*