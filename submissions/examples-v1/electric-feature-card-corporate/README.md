# Electric Feature Card (`electric-feature-card`)

An advanced feature card component with a living animated arc border, power-on flicker sequence, HUD corner brackets, scanline sweep, and hover voltage surge — all driven by pure CSS keyframes. Zero JavaScript.

## EaseMotion Keyframes Defined

| Name | Purpose |
|---|---|
| `ease-arc-border` | Rotates the conic-gradient arc around the card border (4s ambient, 0.8s on hover) |
| `ease-scanline` | Horizontal sweep line travels top → bottom on a 3.5s loop |
| `ease-power-on` | Multi-flicker power-on entrance at load |
| `ease-hud-in` | Title and body fade up with letter-spacing collapse |
| `ease-charge-bounce` | Icon bounces with a brightness surge every 3s |
| `ease-bracket-in` | Corner brackets draw in via `clip-path` reveal |
| `ease-volt-blink` | Status dot blinks like a real indicator LED |
| `ease-levitate` | Card breathes slowly up and down (5s cycle) |
| `ease-data-stream` | Background binary digits scroll vertically |
| `ease-tag-appear` | Tags slide in from the left on load |
| `ease-bar-fill` | Metric progress bars animate from 0 to target width |
| `ease-hover-volt-surge` | Box-shadow brightens in a staged surge on hover |

## Animation Architecture

The card's electric border is achieved entirely with CSS pseudo-elements and `conic-gradient`:

- `::before` — a full-bleed `conic-gradient` rotated by `ease-arc-border`; contains the arc highlight
- `::after` — fills the card interior, masking `::before` to produce a border-only glow

On hover, `::before`'s `animation-duration` drops from `4s` to `0.8s` and the gradient sharpens (narrower arc, white hotspot), creating the voltage surge effect.

## Variants

| Class | Arc color | Use case |
|---|---|---|
| (default) | `#b8ff00` volt lime | Tech, compute, energy |
| `efc-variant-cyan` | `#00e5ff` plasma cyan | Data, streaming, cloud |
| `efc-variant-ghost` | `rgba(200,212,240)` steel | Security, defence, stealth |

## Component Structure

```
.efc-wrap                     perspective parent (3D tilt context)
└── .electric-feature-card    card surface + arc border via ::before/::after
    ├── .efc-noise            SVG fractal noise texture overlay
    ├── .efc-scanline         animating horizontal sweep line
    ├── .efc-corner ×4        HUD bracket corners (tl/tr/bl/br)
    ├── .efc-data-stream ×n   decorative binary digit columns
    ├── .efc-header           icon + tag row
    │   ├── .efc-icon-wrap    bouncing icon container
    │   └── .efc-tags         volt tag + status indicator
    ├── .efc-title            headline with .volt-word accent
    ├── .efc-body             description paragraph
    ├── .efc-metrics          stat bar group
    │   └── .efc-metric ×n   label + bar per stat
    ├── .efc-divider          separator line
    └── .efc-footer           CTA button + uptime display
```

## Accessibility

- `prefers-reduced-motion` disables all animations and shows a static card with a partial arc border visible
- CTA is a native `<button>` element — keyboard focusable by default
- Corner brackets and scanline are `pointer-events: none` — never interfere with interaction

## Workspace Tree Map

```
submissions/examples/electric-feature-card-pari/
├── demo.html     # Three card variants side by side with usage snippet
├── style.css     # All keyframes, component styles, variants, responsive rules
└── README.md     # This file
```

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**