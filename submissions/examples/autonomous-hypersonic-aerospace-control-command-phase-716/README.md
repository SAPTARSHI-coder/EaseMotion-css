# Autonomous Hypersonic Aerospace Control Command — Phase #716

**EaseMotion CSS Showcase** · `submissions/examples/autonomous-hypersonic-aerospace-control-command-phase-716/`

A military/aerospace UI showcase representing the command terminal for an autonomous hypersonic vehicle traveling at Mach 12+. Features a CSS-rendered hypersonic vehicle with plasma heat shield, shockwave mach rings, animating HUD horizon line, speed rush lines, and real-time flight system gauges.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/autonomous-hypersonic-aerospace-control-command-phase-716/demo.html
```

---

## Design Theme

Hypersonic aviation, re-entry heat, military command, heads-up displays, high-performance aerospace.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#08090c` | Stealth Black background |
| `--clr-heat` | `#ff4500` | Re-entry Heat Red / Critical |
| `--clr-plasma` | `#ff8c00` | Plasma Orange / Exhaust/Engine |
| `--clr-mach` | `#00bcd4` | Mach Cyan / Systems Data |
| `--clr-hud` | `#76ff03` | HUD Green / Guidance / OK |

---

## Component Breakdown

### 1. HUD Flight Display (Center View)
- The `.hud-grid` creates a subtle green grid background using `linear-gradient`, giving the display a heads-up display feel.
- The `.horizon` is a glowing horizontal line using `linear-gradient` (transparent → `--clr-hud` → transparent). It uses the `horizon-pitch` keyframe to translate vertically and rotate slightly to simulate the vehicle pitching.
- The `.crosshair` is a square with border. Its `::before` and `::after` pseudo-elements are two thin rectangles extending above and to the left respectively, forming the classic targeting crosshair shape.
- The `.vehicle` is built from four layered CSS elements: `.v-body` (the main fuselage using `clip-path: polygon`), `.v-heat` (a radial gradient glow on the leading edge using matching `clip-path`), `.v-wing` (a triangular delta wing), and `.v-exhaust` (a wide linear gradient cone shaped with `clip-path`). The `.vehicle` floats using `vehicle-fly` keyframe.
- `.shockwave` elements simulate Mach shockwave cones. Three staggered copies expand from scale(1) to scale(4) while fading out using `mach-ring` keyframe.
- `.speed-line` elements with staggered `animation-delay` sweep from left to right using `speed-rush` keyframe, creating a sense of extreme forward velocity.

### 2. Flight Systems (Left Sidebar)
- Each `.sys-item` has a label, current value, and a filled progress bar. The `.si-fill` bar width is set inline to represent the current system reading.
- `.warn` items use `--clr-caution` for immediate visual attention.

### 3. Atmosphere Background
- `body::before` creates a vertical gradient from deep space (top) through atmospheric blue into a hot re-entry orange glow (bottom), representing the view from a hypersonic trajectory.
- `body::after` adds two `radial-gradient` ellipses (heat glow at top, plasma at bottom) that pulse slowly using `atmo-shift` keyframe.

---

## File Structure

```
autonomous-hypersonic-aerospace-control-command-phase-716/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
