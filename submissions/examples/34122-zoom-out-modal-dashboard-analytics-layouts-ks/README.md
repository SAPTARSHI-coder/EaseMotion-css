# Zoom-Out Modal for Dashboard Analytics Layouts

**Issue:** #34122
**Category:** Modal / Animation / Dashboard
**Tech Stack:** Pure HTML + CSS — zero JavaScript

---

## Overview

A CSS-only modal component built around a realistic analytics dashboard interface. The page simulates a modern SaaS analytics dashboard — sticky navigation bar, live badge, four KPI cards, a revenue bar chart, a traffic source donut chart, and a CTA row. Clicking **View Analytics Report →** opens a white modal card with a smooth Zoom-Out entrance animation (`@keyframes zoom-out`) containing detailed metrics, performance progress bars, and action buttons. The overlay fades in simultaneously. Everything is driven by a hidden `<input type="checkbox">` and CSS `:checked` sibling selectors — zero JavaScript.

---

## Features

- **Pure HTML & CSS** — no JavaScript, no external libraries, no build step.
- **Zoom-Out entrance animation** — `@keyframes zoom-out` scales the modal from `scale(1.08), opacity: 0` to `scale(1), opacity: 1` using a spring-like `cubic-bezier(0.22, 1, 0.36, 1)` easing. Plays once per open.
- **Dashboard analytics theme** — dark navy page with blue/cyan/indigo accent palette, KPI cards with coloured top borders, bar chart, donut chart, and performance progress bars. Entirely different from marketing and portfolio submissions.
- **Real dashboard structure** — sticky navbar with brand, nav links, and live badge; main content with page heading, date range tag, KPI grid, chart row, and CTA row.
- **Staggered page entrance** — navbar, heading, KPI grid, charts, and CTA fade up in sequence on load.
- **Responsive** — KPI grid and modal metrics reflow at 520px and 380px; chart row stacks at 768px; footer buttons stack on mobile.
- **Keyboard accessible** — all interactive elements have `tabindex="0"` and visible `:focus-visible` rings.
- **CSS Custom Properties** — twelve variables cover animation, overlay, modal geometry, brand colors, and background surfaces.
- **Reduced-motion safe** — `@media (prefers-reduced-motion: reduce)` removes all animations and transitions instantly.

---

## Files

```
submissions/
└── examples/
    └── 34122-zoom-out-modal-dashboard-analytics-layouts-ks/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--modal-duration` | `0.38s` | Duration of the zoom animation and overlay fade |
| `--modal-scale` | `1.08` | Initial scale of the modal before zoom-out plays |
| `--modal-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Spring-like easing for the zoom animation |
| `--overlay-opacity` | `0.75` | Opacity of the dark backdrop overlay |
| `--modal-radius` | `16px` | Border-radius of the modal card |
| `--modal-shadow` | layered box-shadow | Depth shadow applied to the modal card |
| `--primary` | `#3b82f6` | Primary blue accent — buttons, progress bars, focus rings |
| `--accent-cyan` | `#06b6d4` | Cyan accent — KPI card, gradient endpoints |
| `--accent-indigo` | `#6366f1` | Indigo accent — third KPI card |
| `--positive` | `#10b981` | Green — positive deltas and live dot |
| `--page-bg` | `#0d1117` | Dashboard page background |
| `--primary-hover` | `#2563eb` | Hover state for primary buttons |

**Example — teal dark theme:**

```css
:root {
  --primary:       #0d9488;
  --accent-cyan:   #22d3ee;
  --page-bg:       #0a0f0d;
  --modal-radius:  12px;
  --modal-duration: 0.3s;
}
```

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (> 768px) | Full dashboard layout: sticky nav, 4-column KPI grid, 2-column chart row |
| Tablet (≤ 768px) | Nav links hidden; chart row stacks to single column; modal metrics 2-column |
| Mobile (≤ 520px) | KPI grid 2-column; modal metrics 2-column; footer buttons full-width stacked |
| Small mobile (≤ 380px) | KPI grid and modal metrics single column |

Modal width uses `clamp(300px, 92vw, 560px)` for fluid adaptation.

---

## Accessibility

- **Semantic HTML** — `<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`, `<h1>`, `<h2>`, `<ul>`, `<li>`, `<p>`. No unnecessary wrappers.
- **Keyboard navigation** — every interactive element has `tabindex="0"` and is reachable via `Tab`.
- **Focus styles** — `:focus-visible` rings on all interactive elements with a 3px contrasting blue outline, meeting WCAG 2.1 SC 2.4.7.
- **ARIA** — modal carries `role="dialog"` and `aria-modal="true"`; `aria-labelledby` references the `<h2>` title; `aria-describedby` references the subtitle. Progress bars use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`. KPI deltas carry `aria-label` with percentage context. Decorative elements use `aria-hidden="true"`.
- **Reduced motion** — `@media (prefers-reduced-motion: reduce)` strips all `animation` and `transition` declarations. The modal renders at its final state immediately.

---

## Usage

Navigate to:

```
submissions/examples/34122-zoom-out-modal-dashboard-analytics-layouts-ks/
```

Open `demo.html` in any modern browser to preview the component. No server or build step required.

Click **View Analytics Report →** in the CTA row to open the modal and observe the Zoom-Out entrance. Click the **×** button, **Close**, or **↓ Download Report** to dismiss it.

Customize the component by editing the CSS custom properties in `style.css` to adjust animation timing, scale, easing, colors, overlay opacity, border radius, shadow, and dashboard accent palette.

---

## Preview

The page renders as a dark dashboard: a sticky navy navbar with brand, nav links, and a pulsing "Live" badge sits at the top. Below, a page heading with a date range tag introduces four KPI cards (Total Revenue, Active Users, Conversion Rate, Avg. Session) each with a colored top accent and percentage delta. A two-column chart row follows — a blue bar chart for revenue growth and a conic-gradient donut for traffic sources. A gradient CTA banner at the bottom contains the "View Analytics Report →" trigger button.

The modal opens with a zoom-out animation over a frosted dark overlay. Inside: a blue eyebrow tag, a bold report title, a subtitle, three metric tiles (Revenue, Active Users, Conversion), three animated performance progress bars (Revenue Growth 82%, User Retention 74%, Goal Completion 61%), and a footer with a date range note plus "Close" and "↓ Download Report" buttons.
