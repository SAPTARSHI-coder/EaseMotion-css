# Nanotech Molecular Assembler Control Panel — Phase 834

**NanoForge** is a futuristic nanotechnology laboratory interface showcase built with EaseMotion CSS. The demo presents a high-precision molecular assembler control panel for atom-scale engineering, inspired by quantum research consoles and advanced scientific laboratory dashboards.

## Folder Structure

```
nanotech-molecular-assembler-control-panel-phase-834/
├── demo.html    — Full page demo (open directly in browser)
├── style.css    — Layout, typography, colour tokens, responsive rules
└── README.md    — This file
```

## Sections

1. **Sticky Navigation** — NanoForge logo, section links, Launch Console CTA
2. **Hero** — CSS molecular assembler scene with rotating orbital rings, bond lines, pulsing nucleus, and floating control panels
3. **Assembly Modules** — Six feature cards: Molecular Design, Atomic Placement, Self-Assembly, Nano Fabrication, Material Simulation, Quality Verification
4. **Live Control Dashboard** — Glassmorphism console with 6 stat panels, assembly log, assembler location map
5. **Molecular Library** — Six molecule cards (Carbon Nanotube, Graphene Sheet, DNA Structure, Protein Complex, Nano Polymer, Quantum Crystal) with CSS diagram placeholders and completion bars
6. **Research Analytics** — Six data cards: Atomic Precision, Bond Stability, Assembly Speed, Material Strength, Energy Efficiency, Error Rate — with trend badges and progress bars
7. **Testimonials** — Three scientist reviews from Tokyo Tech, ETH Zurich, and Caltech
8. **Platform Plans** — Research Lab / Enterprise Lab (featured) / Global Research Network
9. **Footer** — Platform, Research, Documentation, Support, Company columns + social links

## EaseMotion Classes Demonstrated

### Entrance (scroll-revealed via IntersectionObserver)
- `ease-fade-in` — nav bar, hero badge, hero stats
- `ease-slide-up` — section headings, module cards, analytics cards, pricing cards
- `ease-slide-in-right` — hero assembler scene panel
- `ease-zoom-in` — live control dashboard panel
- `ease-slide-in-from-bottom-right` — featured pricing card

### Continuous
- `ease-rotate` — orbital rings around the assembler nucleus (3 rings at different delay offsets)
- `ease-pulse` — assembler nucleus, nucleus dot, dashboard live dot, assembler map nodes
- `ease-float` — floating control panel cards in the hero scene

### Hover / Interactive
- `ease-hover-lift` — nav CTA, module cards, molecule cards, testimonial cards, pricing cards, social links
- `ease-hover-grow` — secondary CTA, plan CTAs
- `ease-hover-underline` — footer navigation links

### Glassmorphism
- `ease-glass-card` — assembly module cards, molecule cards, analytics cards, testimonial cards
  (overridden with `!important` for dark lab theme — background, border, backdrop-filter)

### Delay Utilities
- `ease-delay-100` through `ease-delay-400` — stagger entrance animations and offset orbital ring rotations

## Design System

| Token | Value |
|---|---|
| Background | `#03040f` |
| Surface | `#05060f` |
| Card | `#080a1c` |
| Blue (primary) | `#3b82f6` |
| Blue light | `#60a5fa` |
| Violet (secondary) | `#8b5cf6` |
| Violet light | `#a78bfa` |
| Cyan (accent) | `#06b6d4` |
| Emerald (positive) | `#10b981` |
| Amber (warning) | `#f59e0b` |
| Text | `#e2e8f7` |
| Text muted | `#5d6fa8` |
| Mono font | `Courier New, Consolas` |

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Desktop (>1024px) | 3-column grids, 2-column hero |
| Tablet (768–1024px) | 2-column grids, stacked hero |
| Mobile (<768px) | Single-column, nav links hidden, floating panels hidden |
| Small mobile (<480px) | Stacked CTAs |

## Usage

Open `demo.html` directly in any modern browser — no build step, no dependencies beyond `../../easemotion.css`.

```bash
# From repo root
open submissions/examples/nanotech-molecular-assembler-control-panel-phase-834/demo.html
```

## Notes

- No `@keyframes` are defined anywhere in `style.css` — all animation is EaseMotion utility classes
- Scroll-reveal uses a vanilla `IntersectionObserver` inline script; no external JS
- The molecular assembler scene (orbital rings, bond lines, nucleus) is built entirely with CSS geometry — no SVG or canvas
- `ease-glass-card` is overridden with `!important` on background, border, and backdrop-filter for the dark lab theme
- Orbital rings use `ease-rotate` with `ease-delay-*` offsets to create an asynchronous multi-orbit effect
- Closes Issue [#28382](https://github.com/saptarshi-coder/easemotion-css/issues/28382)
