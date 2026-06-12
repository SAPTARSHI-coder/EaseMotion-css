# Admin Dashboard Animation

A fully animated admin placement dashboard built with **pure CSS** — no JavaScript.  
Demonstrates staggered card entrances, animated bar charts, shimmer loaders, hover lifts, and pulsing live indicators, all using EaseMotion CSS naming and keyframe conventions.

---

## What does it add?

A composable set of `em-dash-*` CSS classes that turn any static admin dashboard layout into an animated, interactive experience — KPI stat cards, sparkline bars, branch-wise placement charts, and a live activity feed — all driven entirely by CSS animations.

---

## File Structure

```
submissions/examples/admin-dashboard-animation/
├── demo.html   — Standalone demo, opens directly in a browser
├── style.css   — All animation classes, keyframes, and design tokens
└── README.md   — This file
```

---

## How to Use

### 1. KPI Stat Card

```html
<article class="em-dash-card em-dash-card--blue">
  <div class="em-dash-card__icon">🎓</div>
  <p class="em-dash-card__label">Total Students</p>
  <p class="em-dash-card__value">1,248</p>
  <span class="em-dash-card__delta em-dash-card__delta--up"
    >▲ 12% vs last year</span
  >
</article>
```

**Colour variants** — set one modifier class on `.em-dash-card`:

| Class                 | Accent Colour     |
| --------------------- | ----------------- |
| `em-dash-card--blue`  | Indigo `#6366f1`  |
| `em-dash-card--green` | Emerald `#22c55e` |
| `em-dash-card--amber` | Amber `#f59e0b`   |
| `em-dash-card--red`   | Red `#ef4444`     |

---

### 2. Mini Sparkline

```html
<div class="em-dash-sparkline">
  <div class="em-dash-sparkline__bar" style="height:40%"></div>
  <div class="em-dash-sparkline__bar" style="height:75%"></div>
  <div class="em-dash-sparkline__bar" style="height:100%"></div>
  <!-- add more bars as needed -->
</div>
```

Set `height` inline on each bar to control its relative size. The colour inherits from the parent card's `--em-card-accent`.

---

### 3. Branch Bar Chart

```html
<div class="em-dash-bar-row">
  <span class="em-dash-bar-row__label">CSE</span>
  <div class="em-dash-bar-row__track">
    <div class="em-dash-bar-row__fill" style="width: 92%"></div>
  </div>
  <span class="em-dash-bar-row__pct">92%</span>
</div>
```

Set `width` inline on `.em-dash-bar-row__fill` to match the actual percentage. Bars animate in from zero on page load.

---

### 4. Activity Feed Item

```html
<li class="em-dash-activity__item">
  <div class="em-dash-activity__dot em-dash-activity__dot--green"></div>
  <div class="em-dash-activity__content">
    <strong>Google posted a new job</strong>
    <span>SDE-1 · Bangalore · 2 mins ago</span>
  </div>
</li>
```

Dot variants: `--blue`, `--green`, `--amber`, `--red` — each pulses with a colour-matched glow.

---

## How the Animations Work

### Card Entrance — staggered slide-up + fade

```css
@keyframes em-kf-card-enter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

Cards 1–4 are delayed by `0.1s` increments so they cascade in from left to right.

### Bar Chart — scale from origin

```css
@keyframes em-kf-bar-fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
```

`transform-origin: left` makes each bar grow from its left edge, mimicking a real data-loading reveal.

### Sparkline — scaleY from bottom

```css
@keyframes em-kf-bar-grow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
```

`transform-origin: bottom` makes mini bars grow upward from their baseline.

### Live Dot Pulse

```css
@keyframes em-kf-dot-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.75);
  }
}
```

Gives a subtle heartbeat to the activity indicator dots.

---

## Customisation

Override any design token in your own `:root` or inline on a parent element:

```css
:root {
  --ease-dash-bg: #ffffff; /* light mode background */
  --ease-dash-surface: #f8fafc;
  --ease-dash-text-primary: #0f172a;
  --ease-dash-accent-blue: #3b82f6; /* change brand colour */
}
```

Adjust animation timing:

```css
:root {
  --ease-dur-slow: 1.2s; /* slower entrance */
  --ease-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## Why This Fits EaseMotion CSS

- **Human-readable classes** — `em-dash-card--green`, `em-dash-card__delta--up` describe intent, not implementation.
- **Animation-first** — every element has a purposeful motion: entrance, hover lift, bar grow, dot pulse. Nothing is static for its own sake.
- **Composable** — cards, sparklines, bar charts, and activity items are fully independent. Mix and match.
- **Zero JavaScript** — all animations are CSS keyframes. No runtime dependencies.
- **Accessible** — `prefers-reduced-motion` disables all animations; ARIA labels on progressbars; decorative elements use `aria-hidden`.

---

## Browser Support

| Browser       | Version | Notes        |
| ------------- | ------- | ------------ |
| Chrome / Edge | 80+     | Full support |
| Firefox       | 72+     | Full support |
| Safari        | 14+     | Full support |
| iOS Safari    | 14+     | Full support |

---

## License

Submitted under the same license as the EaseMotion CSS repository.
