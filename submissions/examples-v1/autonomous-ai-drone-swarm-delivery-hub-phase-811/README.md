# Autonomous AI Drone Swarm Delivery Hub — Phase 811

**DroneGrid AI** is a futuristic autonomous logistics platform showcase built with EaseMotion CSS. The demo presents a cinematic, AI command-center experience for drone fleet management at planetary scale.

## Folder Structure

```
autonomous-ai-drone-swarm-delivery-hub-phase-811/
├── demo.html    — Full page demo (open directly in browser)
├── style.css    — Layout, typography, colour tokens, responsive rules
└── README.md    — This file
```

## Sections

1. **Sticky Navigation** — DroneGrid AI logo, section links, Launch Dashboard CTA
2. **Hero** — CSS drone illustration with animated rotors, telemetry HUD cards, entrance animations
3. **Fleet Capabilities** — Six feature cards: AI Navigation, Swarm Coordination, Real-Time Routing, Obstacle Avoidance, Predictive Maintenance, Weather Intelligence
4. **Operations Dashboard** — Live mock console with 6 stat panels, mission log, mini map
5. **Delivery Network** — Six global region cards (North America, Europe, Asia-Pacific, South America, Middle East, Africa)
6. **AI Technology Stack** — Six tech cards: Computer Vision, Edge AI, LiDAR Mapping, Satellite Navigation, Cloud Coordination, Predictive Analytics
7. **Testimonials** — Three enterprise customer reviews
8. **Pricing** — Startup / Business (featured) / Enterprise plans
9. **Footer** — Platform, Developers, Support, Company columns + social links

## EaseMotion Classes Demonstrated

### Entrance (scroll-revealed via IntersectionObserver)
- `ease-fade-in` — nav bar, hero eyebrow
- `ease-slide-up` — section headings, feature cards, pricing cards
- `ease-slide-in-right` — hero drone illustration panel
- `ease-zoom-in` — operations dashboard panel
- `ease-slide-in-from-bottom-right` — featured pricing card

### Continuous
- `ease-float` — drone rig and telemetry HUD cards
- `ease-rotate` — drone rotor circles
- `ease-pulse` — status LEDs, live-dot indicator, mini-map drone dots

### Hover / Interactive
- `ease-hover-lift` — nav CTA, fleet cards, region cards, pricing cards, social links
- `ease-hover-glow` — AI tech stack cards
- `ease-hover-grow` — secondary CTA, tech-bar progress fills
- `ease-hover-underline` — footer navigation links

### Glassmorphism
- `ease-glass-card` — fleet cards, region cards, tech cards, testimonial cards
  (overridden with `!important` for dark-theme compatibility)

### Delay Utilities
- `ease-delay-100` through `ease-delay-400` — stagger entrance animations across grids

## Design System

| Token | Value |
|---|---|
| Background | `#020a06` |
| Surface | `#040e09` |
| Card | `#071510` |
| Emerald (primary) | `#10b981` |
| Emerald light | `#34d399` |
| Cyan (secondary) | `#06b6d4` |
| Cyan light | `#22d3ee` |
| Amber (advisory) | `#f59e0b` |
| Text | `#e2faf0` |
| Text muted | `#7fa897` |

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
open submissions/examples/autonomous-ai-drone-swarm-delivery-hub-phase-811/demo.html
```

## Notes

- No `@keyframes` defined anywhere in `style.css` — all motion is EaseMotion utility classes
- Scroll-reveal uses a vanilla `IntersectionObserver` inline script; no external JS
- The CSS drone illustration (body, arms, rotors) is built entirely with CSS geometry — no images or SVG
- `ease-glass-card` background and `backdrop-filter` are overridden with `!important` for the dark theme
- Closes Issue [#28359](https://github.com/saptarshi-coder/easemotion-css/issues/28359)
