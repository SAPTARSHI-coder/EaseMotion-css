# Float-Drift Accordion for Gaming Hub Layouts

A lightweight, accessible, pure HTML5/CSS accordion component featuring a subtle **Float-Drift** animation effect tailored for Gaming Hub telemetry, matchmaking metrics, and system patch notes.

---

## Overview

The **Float-Drift Accordion** combines native HTML `<details>` and `<summary>` elements with an out-of-phase floating keyframe motion system. Each card gently drifts vertically to create an engaging gaming atmosphere while smoothly anchoring upon hover, keyboard focus, or activation to maintain content readability.

---

## Features

- **Zero JavaScript**: Built entirely using standard HTML5 disclosure elements and CSS3 animations.
- **Float-Drift Motion Physics**: Staggered vertical floating using CSS variables (`--drift-delay`) and 3D transforms (`translate3d`).
- **Interactive Motion Anchor**: Cards automatically pause continuous drifting and anchor smoothly when hovered, focused, or opened.
- **Developer-Grade UI**: Clean dark theme inspired by professional telemetry panels (GitHub/Vercel slate theme).
- **Accessible**: Built with native `<details>`/`<summary>` semantics, high contrast, and focus indicators (`:focus-visible`).
- **Reduced Motion Support**: Fully respects `prefers-reduced-motion: reduce` by disabling floating keyframes and instant transitions.
- **Responsive**: Fluid layout adapted across desktop, tablet, and mobile viewports.

---

## Usage

Include `style.css` in your project or showcase document:

```html
<link rel="stylesheet" href="style.css">
```

Create accordion cards using standard HTML `<details>` tags:

```html
<div class="float-drift-accordion">
  
  <details class="accordion-item" open style="--drift-delay: 0s;">
    <summary class="accordion-summary">
      <div class="summary-header">
        <span class="summary-title">Server Infrastructure & Regions</span>
        <span class="summary-subtitle">Live latency and tick rate telemetry</span>
      </div>
      <div class="summary-aside">
        <span class="badge badge-success">ONLINE</span>
        <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </summary>
    <div class="accordion-body">
      <!-- Content -->
    </div>
  </details>

</div>
```

---

## EaseMotion Integration

This component integrates EaseMotion CSS tokens and design primitives for timing and easing:

| Token Name | Applied Value | Purpose |
|------------|---------------|---------|
| `--ease-speed-fast` | `150ms` | Fast color/status hover transitions |
| `--ease-speed-medium` | `300ms` | Card transform settlement & chevron rotation |
| `--ease-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth ease-in-out card transitions |
| `--ease-ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic bounce physics for chevron rotation |
| `--ease-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Panel expansion slide-down effect |

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
|-----------------|---------------|-------------|
| `--drift-delay` | `0s` | Stagger offset to desynchronize float keyframes across cards |
| `--hub-bg` | `#0d1117` | Main background color |
| `--hub-surface` | `#161b22` | Accordion card background surface |
| `--hub-accent` | `#58a6ff` | Accent highlight color |
| `--hub-border-active` | `#58a6ff` | Active card border highlight |

---

## Accessibility

- **Native Disclosure Semantics**: Uses `<details>` and `<summary>` elements natively supported by screen readers and browser accessibility APIs.
- **Keyboard Navigation**: Native tab navigation with a crisp accent focus ring provided by `:focus-visible`.
- **Motion Restraint**: `@media (prefers-reduced-motion: reduce)` removes all `@keyframes floatDrift` motion and ensures instantaneous open/close behavior.

---

## Responsive Behavior

- **Desktop (1024px+)**: Multi-column telemetry grid and metric breakdowns.
- **Tablet (768px)**: Flexible single/double column telemetry nodes and fluid font sizing.
- **Mobile (<600px)**: Single column stacked layout, touch-friendly interactive targets, and auto-wrapping metadata.
