# Orbital Solar Power Satellite Energy Receiver Grid — Phase #747

**EaseMotion CSS Showcase** · `submissions/examples/orbital-solar-power-satellite-energy-receiver-grid-phase-747/`

A futuristic UI showcase representing a control dashboard for an orbital solar power satellite beaming microwave energy to a terrestrial rectenna grid. Features CSS-rendered microwave beam animations, a glowing 3D hexagonal grid, and targeting crosshairs.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/orbital-solar-power-satellite-energy-receiver-grid-phase-747/demo.html
```

---

## Design Theme

Solar Energy, Orbital Infrastructure, Microwave Transmission, and Hexagonal Grids.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020617` | Deep Space Black background |
| `--clr-cyan`| `#22d3ee` | Microwave Cyan / Primary UI |
| `--clr-plasma`| `#facc15` | Plasma Yellow / High energy |
| `--clr-orange`| `#f97316` | Energy Orange / High load |

---

## Component Breakdown

### 1. Microwave Beam & Rectenna Grid (Center View)
- The central `.transmission-view` connects space to ground.
- **The Beam**: `.energy-beam` uses a `linear-gradient` to fade from yellow to cyan to transparent. An `::before` pseudo-element provides a scrolling striped pattern (`beam-flow` keyframe) to simulate the flow of microwave energy downward. It pulses slightly in width/opacity (`beam-pulse` keyframe).
- **The Ground Grid**: The `.ground-grid` has a 3D perspective. Inside, the `.hex-plane` is rotated 60 degrees along the X-axis (`transform: rotateX(60deg)`) and uses an embedded SVG `data:image/svg+xml` to draw a glowing hexagonal rectenna pattern.

### 2. Alignment Radar (Left Sidebar)
- A circular `.alignment-radar` with a crosshair in the center.
- The `.crosshair` uses the `lock-on` keyframe to gently float around the center, simulating minor orbital station-keeping adjustments to stay locked onto the ground grid.

### 3. Starfield & Atmospheric Horizon
- The `body::before` creates a panning starfield using multiple radial gradients.
- The `body::after` creates a soft cyan `radial-gradient(ellipse ...)` at the bottom of the screen, simulating the Earth's atmospheric glow seen from orbit.

---

## File Structure

```
orbital-solar-power-satellite-energy-receiver-grid-phase-747/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
