# Global Ocean Acidification Monitoring Grid — Phase 828

**OceanGrid** is a scientific ocean monitoring platform showcase built with EaseMotion CSS. The demo presents a NOAA/NASA-inspired data dashboard for real-time tracking of ocean acidification, temperature, and carbon absorption across six global ocean regions.

## Folder Structure

```
global-ocean-acidification-monitoring-grid-phase-828/
├── demo.html    — Full page demo (open directly in browser)
├── style.css    — Layout, typography, colour tokens, responsive rules
└── README.md    — This file
```

## Sections

1. **Sticky Navigation** — OceanGrid logo, section links, Live Monitoring CTA
2. **Hero** — CSS ocean map with pulsing sensor nodes, floating data overlays, pH/temperature legend
3. **Global Monitoring Grid** — Six region cards (Pacific, Atlantic, Indian, Arctic, Southern, Mediterranean) with live pH, temperature, CO₂, and status indicators
4. **Live Analytics Dashboard** — Glassmorphism console with 6 stat panels, sensor data log, mini sensor map
5. **Research Insights** — Six research area cards: Ocean Chemistry, Coral Reef Health, Marine Biodiversity, Carbon Cycle, Climate Modeling, Satellite Observation
6. **Scientific Metrics** — Six data cards: CO₂ Trends, pH Change, Sea Surface Temperature, Salinity, Oxygen Levels, Biodiversity Index — each with trend badges and progress bars
7. **Testimonials** — Three scientist reviews from Woods Hole, MIT EAPS, and CSIRO
8. **Collaboration Plans** — Academic (free) / Research Institute (featured) / Global Partnership tiers
9. **Footer** — Platform, Research, Documentation, Support, Company columns + social links

## EaseMotion Classes Demonstrated

### Entrance (scroll-revealed via IntersectionObserver)
- `ease-fade-in` — nav bar, hero badge, hero stats
- `ease-slide-up` — section headings, region cards, research cards, metric cards, pricing cards
- `ease-slide-in-right` — hero ocean map panel
- `ease-zoom-in` — live analytics dashboard panel
- `ease-slide-in-from-bottom-right` — featured collaboration card
- `ease-slide-in-left` — (available via selector, paired with right column)

### Continuous
- `ease-pulse` — sensor nodes on ocean map, dashboard live dot, mini sensor map dots
- `ease-float` — floating data overlay cards on ocean map

### Hover / Interactive
- `ease-hover-lift` — nav CTA, region cards, research cards, testimonial cards, pricing cards, social links
- `ease-hover-glow` — (applied via ri-card:hover box-shadow)
- `ease-hover-grow` — secondary CTA, buy-percentage buttons, collaboration plan CTAs
- `ease-hover-underline` — footer navigation links

### Glassmorphism
- `ease-glass-card` — region cards, research cards, metric cards, testimonial cards
  (overridden with `!important` for dark ocean-blue theme — background, border, backdrop-filter)

### Delay Utilities
- `ease-delay-100` through `ease-delay-400` — stagger entrance animations across all grids

## Design System

| Token | Value |
|---|---|
| Background | `#010e1f` |
| Surface | `#031525` |
| Card | `#06192e` |
| Teal (primary) | `#0d9488` |
| Teal light | `#14b8a6` |
| Cyan (secondary) | `#06b6d4` |
| Amber (warning) | `#f59e0b` |
| Red (critical) | `#ef4444` |
| Text | `#d1f0f7` |
| Text muted | `#5d93ad` |

## Scientific Data Colour Coding

| Status | pH Range | Colour |
|---|---|---|
| Normal | 8.1+ | Teal (#14b8a6) |
| Warning / Elevated Risk | 8.0–8.1 | Amber (#f59e0b) |
| Critical | < 8.0 | Red (#ef4444) |

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Desktop (>1024px) | 3-column grids, 2-column hero |
| Tablet (768–1024px) | 2-column grids, stacked hero |
| Mobile (<768px) | Single-column, nav links hidden, map overlays hidden |
| Small mobile (<480px) | Stacked CTAs |

## Usage

Open `demo.html` directly in any modern browser — no build step, no dependencies beyond `../../easemotion.css`.

```bash
# From repo root
open submissions/examples/global-ocean-acidification-monitoring-grid-phase-828/demo.html
```

## Notes

- No `@keyframes` are defined anywhere in `style.css` — all animation is EaseMotion utility classes
- Scroll-reveal uses a vanilla `IntersectionObserver` inline script; no external JS
- The ocean map scene (sensor nodes, grid, overlays) is built entirely with CSS — no SVG or images
- `ease-glass-card` is overridden with `!important` on background, border, and backdrop-filter for the dark ocean theme
- pH and status colours are applied inline or via colour-utility classes (`.good`, `.warn`, `.crit`)
- Closes Issue [#28376](https://github.com/saptarshi-coder/easemotion-css/issues/28376)
