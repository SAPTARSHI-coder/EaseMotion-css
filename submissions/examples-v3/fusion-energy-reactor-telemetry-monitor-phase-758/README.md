# Fusion Energy Reactor Telemetry Monitor — Phase #758

**EaseMotion CSS Showcase** · `submissions/examples/fusion-energy-reactor-telemetry-monitor-phase-758/`

A high-energy, clean tech HUD UI showcase representing the telemetry monitor for a Tokamak fusion reactor. Features a 3D CSS-rendered plasma torus, animated magnetic flux bars, and an inline SVG thermal exhaust graph.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/fusion-energy-reactor-telemetry-monitor-phase-758/demo.html
```

---

## Design Theme

Tokamak UI, High-Energy Physics, Plasma containment, and deep space aesthetics.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020617` | Deep Void background |
| `--clr-plasma`| `#d946ef` | Intense Violet/Pink / Core Heat |
| `--clr-cyan`| `#22d3ee` | Magnetic Cyan / Primary UI |
| `--clr-alert`| `#f43f5e` | Overload Red / Warnings |

---

## Component Breakdown

### 1. 3D Tokamak Plasma Torus (Center View)
- A 3D representation of a fusion reactor's plasma torus using CSS `transform-style: preserve-3d`.
- **Torus Rings**: Three `.torus-ring` elements are rotated in 3D space (`rotateX`, `rotateZ`) and grouped within a parent `.torus` that spins continuously (`spin-torus` keyframe) to create a spherical wireframe effect.
- **Core Heat**: A central radial gradient that pulses (`pulse-heat` keyframe) to simulate the intense heat of the plasma core.

### 2. Animated Magnetic Flux Bars (Left Sidebar)
- Represents the magnetic field strength of Poloidal Field coils.
- The `.flux-bar` background uses a `repeating-linear-gradient` to create diagonal hazard stripes. The overlaying `.flux-fill` element animates its opacity (`flux-wave` keyframe) to simulate energy surging through the coils.

### 3. Thermal Exhaust SVG Graph Simulation (Right Sidebar)
- A rolling graph simulating the heat load on the reactor's divertor.
- Built without external assets using an inline SVG encoded in a Data URI applied as a `background-image` to the `.graph-line` element. A `scroll-graph` keyframe translates it horizontally to create a continuous feed.

---

## File Structure

```
fusion-energy-reactor-telemetry-monitor-phase-758/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
