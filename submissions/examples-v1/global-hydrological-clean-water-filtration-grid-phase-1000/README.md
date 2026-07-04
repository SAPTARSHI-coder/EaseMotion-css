# AquaGrid — Global Hydrological Clean Water Filtration Grid

**EaseMotion CSS contributor submission** for *UI Design: Global Hydrological Clean Water Filtration Grid Showcase — Phase #1000*

A static, dependency-free dashboard concept for monitoring a global clean-water filtration and distribution network — built as a control-room console an operator might actually use, not a generic "futuristic UI."

---

## Overview

AquaGrid visualizes the full lifecycle of municipal-scale water treatment: intake, multi-stage filtration, reservoir telemetry, distribution-line topology, and the analytics an operator checks during shift handoff. The visual language borrows from real SCADA/hydrology instrumentation — monospace numeric readouts, status pills, and a signature animated pipeline rail — rather than decorative "AI dashboard" tropes.

The submission is **pure HTML + CSS**. There is no JavaScript anywhere in `demo.html` or `style.css`; every animation (flowing pipelines, particles, pulsing nodes, drawing charts) runs on CSS keyframes and transitions only.

---

## Features

- **Hero section** — mission statement, live key metrics, and an animated reservoir gauge card (conic-gradient ring + readouts)
- **Status overview cards** — four glassmorphic KPI cards with trend pills and animated mini-sparklines
- **Filtration process rail** *(signature element)* — a five-stage horizontal schematic (intake → coagulation → sand filtration → UV/carbon polish → distribution-ready) connected by a continuously flowing animated pipeline, with each stage node pulsing on its own offset and reporting a live instrument reading
- **Distribution network map** — an SVG pipeline topology with idle and actively-flowing links, a primary hub, standard junctions, and a flagged low-pressure junction, paired with a legend panel
- **Analytics widgets** — a bar chart (water quality index by reservoir), a donut chart (filtration efficiency), and a self-drawing SVG line chart (pH stability trend)
- **Statistics strip** — four large animated counters for global delivery, facility count, uptime, and country coverage
- **Monitoring timeline** — a vertical event log distinguishing informational, maintenance, alert, and resolved entries
- **Facility control panel** — visual-only sliders and toggles styled to match real plant-control widgets
- **Footer** — sitemap-style link columns and a status strip
- **Floating particle field & ambient gradients** — a fixed atmospheric background layer suggesting suspended sediment / aeration without being literal
- **Fully responsive** — reflows from a 4-column dashboard down to a single-column mobile layout, including a vertical re-orientation of the pipeline rail
- **Accessible by default** — visible focus rings on all interactive elements and full `prefers-reduced-motion` support

---

## Folder structure

```
submissions/examples/global-hydrological-clean-water-filtration-grid-phase-1000/
├── demo.html      # Markup for all sections (hero → footer)
├── style.css      # All styling, tokens, and animations
└── README.md      # This file
```

This submission does **not** modify `core/` or `components/` and introduces no dependency on either — `demo.html` only links a local `style.css` and a Google Fonts stylesheet.

---

## How to use

1. Drop the folder into `submissions/examples/` of the EaseMotion CSS repository (already in the correct location).
2. Open `demo.html` directly in any modern browser — no build step, no package install, no server required.
3. To preview locally with a server instead of `file://`, run from inside the folder:
   ```bash
   python3 -m http.server 8080
   ```
   then visit `http://localhost:8080/demo.html`.

---

## Customization

All visual decisions are centralized as CSS custom properties at the top of `style.css` under **`01. DESIGN TOKENS`**, so the whole theme can be re-skinned without touching markup:

| Token group | What it controls |
|---|---|
| `--color-abyss`, `--color-ink`, `--color-panel*` | Background and panel surface colors |
| `--color-cyan`, `--color-green`, `--color-amber`, `--color-coral` | Signal colors (clarity, safe, attention, critical) |
| `--font-display`, `--font-body`, `--font-mono` | Typeface roles — headline, UI text, instrument readouts |
| `--space-*` | Spacing scale used across every section |
| `--radius-*`, `--shadow-*`, `--glass-*` | Corner rounding, elevation, and glassmorphism blur/opacity |
| `--dur-*`, `--ease-*` | Shared animation durations and easing curves |

Common tweaks:

- **Swap the accent palette** — change `--color-cyan` / `--color-green` / `--color-amber` and every card glow, pill, and chart updates automatically.
- **Adjust pipeline speed** — edit the `animation` duration on `.pipeline-track::after` (`flow-dash` keyframe) and `.stage-node::before` (`node-pulse` keyframe).
- **Add or remove particles** — duplicate/delete `<span class="particle">` elements in `demo.html`; each only needs `--x`, `--size`, `--dur`, and `--delay` inline custom properties.
- **Re-theme status cards** — apply `.status-card--cyan`, `--green`, or `--amber` modifier classes to retarget the accent color per card.

---

## Browser support

Built on widely supported modern CSS — no vendor-specific hacks beyond a `-webkit-backdrop-filter` fallback for Safari.

| Feature used | Support |
|---|---|
| CSS Custom Properties | All modern browsers |
| `backdrop-filter` (glassmorphism) | Chrome, Edge, Safari, Firefox 103+ |
| CSS Grid & Flexbox | All modern browsers |
| `conic-gradient` | Chrome, Edge, Safari 12.1+, Firefox 83+ |
| `clamp()` for fluid type | All modern browsers |
| `prefers-reduced-motion` | All modern browsers |

Tested against current Chrome, Firefox, Safari, and Edge. Recommended minimum: any browser released in the last ~3 years.

---

## Preview description

A deep ink-teal control console opens on a hero promising clean water "monitored everywhere," anchored by a floating reservoir gauge card with a glowing conic-gradient ring. Scrolling down moves through a live KPI overview, then the page's centerpiece: a horizontal five-stage filtration rail where a cyan dashed line continuously streams left to right beneath pulsing stage nodes, each stamped with a real instrument reading (turbidity, chlorine residual, log-reduction). A distribution network diagram follows, rendered as an SVG schematic with actively flowing links and one junction flagged amber for low pressure. The page closes through analytics widgets, a four-up statistics strip, a chronological monitoring timeline, and a facility control panel styled like real plant hardware — all wrapped in a quiet particle-and-gradient atmosphere that never competes with the data.