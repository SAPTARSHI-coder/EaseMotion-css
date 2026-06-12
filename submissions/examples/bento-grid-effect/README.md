# Submission: Animated Bento Grid Layout

## 1. What does this do?

A responsive bento-style grid layout component where cards of different
sizes enter the viewport with staggered fade-in animations, lift on hover
with shadow elevation, and show a dynamic mouse-following shine layer.
Supports large, wide, and tall card variants with zero JavaScript
dependencies — the entrance animation uses a pure IntersectionObserver
and CSS transitions.

---

## 2. How is it used?

```html
<!-- Basic bento grid -->
<div class="bento-grid">
  <!-- large card: spans 2 cols × 2 rows -->
  <div class="bento-card bento-large bento-card--purple">
    <div class="bento-glow"></div>
    <span class="bento-chip">Animation First</span>
    <h2 class="bento-title">Build faster<br />with motion.</h2>
    <p class="bento-body">Your feature description here.</p>
  </div>

  <!-- regular card -->
  <div class="bento-card bento-card--dark">
    <div class="bento-glow"></div>
    <div class="bento-icon">⚡</div>
    <p class="bento-label">Zero Config</p>
    <p class="bento-sub">Link one file. Done.</p>
  </div>

  <!-- wide card: spans 2 cols -->
  <div class="bento-card bento-wide bento-card--glass">
    <div class="bento-glow"></div>
    <span class="bento-chip">Stable</span>
    <h3 class="bento-title bento-title--sm">One line. That's all.</h3>
    <code class="bento-code"
      >&lt;link rel="stylesheet" href="easemotion.css" /&gt;</code
    >
  </div>
</div>
```

Activate entrance animations by including the JS snippet from `demo.html`
once per page — it uses IntersectionObserver to add `.bento-card--visible`
on scroll with per-card stagger via a CSS `--stagger` variable.

---

## 3. Why is it useful?

EaseMotion CSS is animation-first and composable — class names describe
behavior in plain English. The bento grid follows the same philosophy:

- `bento-large`, `bento-wide`, `bento-tall` — readable size modifiers
- `bento-card--purple`, `bento-card--glass` — readable style variants
- Staggered entrance via IntersectionObserver — fires on scroll, once
- Mouse-following shine layer — expressive hover with zero layout thrash
- CSS `--stagger` variable — timing controlled by CSS, not JS
- Fully responsive — collapses gracefully to 2-col and 1-col on mobile
- Zero GSAP / zero external libraries — pure CSS transitions + vanilla JS

Bento layouts are widely used in landing pages, SaaS products, and
portfolio sites. This fills a gap in EaseMotion CSS's component library.

---

## Proposed class names (maintainer decides final naming)

| Raw name             | Proposed ease-\* name    |
| -------------------- | ------------------------ |
| `bento-grid`         | `ease-bento-grid`        |
| `bento-card`         | `ease-bento-card`        |
| `bento-large`        | `ease-bento-large`       |
| `bento-wide`         | `ease-bento-wide`        |
| `bento-tall`         | `ease-bento-tall`        |
| `bento-card--purple` | `ease-bento-card-purple` |
| `bento-card--glass`  | `ease-bento-card-glass`  |
| `bento-card--dark`   | `ease-bento-card-dark`   |
| `bento-glow`         | `ease-bento-glow`        |
