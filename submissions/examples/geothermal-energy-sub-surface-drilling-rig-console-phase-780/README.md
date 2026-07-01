# Geothermal Energy Sub-Surface Drilling Rig Console — Phase 780

**GeoCore** is an industrial-grade geothermal SCADA showcase built with EaseMotion CSS. The demo presents a cinematic operations control room for real-time sub-surface drilling telemetry, turbine analytics, and geological monitoring.

## Folder Structure

```
geothermal-energy-sub-surface-drilling-rig-console-phase-780/
├── demo.html    — Full page demo (open directly in browser)
├── style.css    — Layout, typography, colour tokens, responsive rules
└── README.md    — This file
```

## Sections

1. **Sticky Navigation** — GeoCore logo, section links, Launch Console CTA
2. **Hero** — CSS geological cross-section with stacked earth layers, animated drill shaft + bit, depth scale, steam vents, floating telemetry HUD
3. **Sub-Surface Intelligence** — Six feature cards: Drill Depth, Borehole Pressure, Rock Temperature, Flow Rate, Core Sampling, Seismic Activity
4. **Live Operations Dashboard** — Industrial SCADA console with macOS chrome, 6 live stat panels, operations mission log, depth visualisation widget
5. **Formation Intelligence** — Six geological zone cards: Volcanic Zone, Sedimentary Layer, Granite Formation, Water Reservoir, Magma Chamber, Fault Line
6. **Energy Analytics** — Six performance metric cards: Power Generation, Heat Extraction, Carbon Reduction, Turbine Efficiency, Energy Storage, Grid Contribution
7. **Industry Reviews** — Three testimonials from geothermal engineering professionals
8. **Service Plans** — Exploration / Industrial (featured) / Enterprise Energy plans
9. **Footer** — Platform, Technology, Support, Company columns + social links

## EaseMotion Classes Demonstrated

### Entrance (scroll-revealed via IntersectionObserver)
- `ease-fade-in` — nav bar, hero badge, hero stats
- `ease-slide-up` — section headings, ops cards, geo cards, energy cards, plan cards
- `ease-slide-in-right` — geological cross-section illustration panel
- `ease-zoom-in` — SCADA dashboard panel
- `ease-slide-in-from-bottom-right` — featured Industrial plan card

### Continuous
- `ease-float` — floating telemetry HUD cards in geo-scene
- `ease-bounce` — CSS drill bit animating at drilling depth
- `ease-pulse` — steam vent indicators, live dashboard dot, status indicators

### Hover / Interactive
- `ease-hover-lift` — nav CTA, operations cards, geo cards, energy cards, plan cards, social links, testimonial cards
- `ease-hover-grow` — secondary CTA buttons, plan action buttons
- `ease-hover-underline` — footer navigation links

### Glassmorphism
- `ease-glass-card` — operations cards, geo cards, energy cards, testimonial cards
  (overridden with `!important` for dark-theme compatibility)

### Delay Utilities
- `ease-delay-100` through `ease-delay-400` — stagger entrance animations across grids

## Design System

| Token | Value |
|---|---|
| Background | `#0b0602` |
| Surface | `#110904` |
| Card | `#160c06` |
| Orange (primary) | `#f97316` |
| Amber (secondary) | `#f59e0b` |
| Red (critical) | `#dc2626` |
| Red light | `#ef4444` |
| Cyan (accent) | `#06b6d4` |
| Emerald (positive) | `#10b981` |
| Text | `#fde8d4` |
| Text muted | `#9c7a61` |

## CSS Geological Cross-Section

The hero geological cross-section is built entirely with CSS — no images or SVG:

| Layer class | Depth | Background |
|---|---|---|
| `.gl-surface` | 0–14% | Dark surface soil gradient |
| `.gl-sediment` | 14–32% | Sedimentary rock warm gradient |
| `.gl-granite` | 32–52% | Dense granite grey-red gradient |
| `.gl-water` | 52–64% | Semi-transparent cyan aquifer |
| `.gl-hotrock` | 64–86% | Deep red hot rock formation |
| `.gl-magma` | 86–100% | Orange-red magma gradient |

The drill shaft is a 3px centered gradient vertical line. The drill bit is a CSS triangle using `border-left/right/top` trick. Steam vents are thin vertical `ease-pulse` bars.

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Desktop (>1024px) | 3-column grids, 2-column hero |
| Tablet (768–1024px) | 2-column grids, stacked hero |
| Mobile (<768px) | Single-column, hidden nav links |
| Small mobile (<480px) | Stacked CTAs, single-column dashboard |

## Usage

Open `demo.html` directly in any modern browser — no build step, no dependencies beyond `../../easemotion.css`.

```bash
# From repo root
open submissions/examples/geothermal-energy-sub-surface-drilling-rig-console-phase-780/demo.html
```

## Notes

- No `@keyframes` defined anywhere in `style.css` — all motion is EaseMotion utility classes
- Scroll-reveal uses a vanilla `IntersectionObserver` inline script; no external JS
- The geological cross-section, drill shaft, drill bit, steam vents, and depth scale are built entirely with CSS geometry — no images or SVG
- `ease-glass-card` background and `backdrop-filter` are overridden with `!important` for the dark theme
- Closes Issue [#28328](https://github.com/saptarshi-coder/easemotion-css/issues/28328)
