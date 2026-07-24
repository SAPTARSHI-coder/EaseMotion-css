# Autonomous Lunar Mining & Processing Rover Command — Phase #749

**EaseMotion CSS Showcase** · `submissions/examples/autonomous-lunar-mining-processing-rover-command-phase-749/`

An industrial space UI showcase representing a command dashboard for an autonomous lunar mining rover. Features a CSS-rendered drilling rig animation, a moving conveyor belt for mined ore, and dynamic battery/telemetry gauges.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/autonomous-lunar-mining-processing-rover-command-phase-749/demo.html
```

---

## Design Theme

Regolith, Heavy Machinery, Lunar Surface, and Industrial Space.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#1c1917` | Deep Crater background |
| `--clr-yellow`| `#eab308` | Rover Yellow / Heavy machinery |
| `--clr-orange`| `#f97316` | Heat Orange / Drill torque |
| `--clr-dust`| `#d6d3d1` | Lunar Dust / UI Accents |

---

## Component Breakdown

### 1. Lunar Surface Drill Visualizer (Center View)
- The central `.drill-view` simulates a drilling operation.
- The `.drill-head` uses a `repeating-linear-gradient` that scrolls vertically (`drill-bore` keyframe) to simulate the rotation of a drill bit.
- A secondary `.drill-shake` keyframe shifts the entire drill assembly slightly left and right to simulate mechanical vibration.
- Scattered `.debris` elements pop out and fade away (`fly-out` keyframes) to represent excavated regolith.

### 2. Conveyor Belt Processing (Right Sidebar)
- The `.conveyor-box` contains a `.belt` element with a striped background (`repeating-linear-gradient`) that translates horizontally (`belt-move` keyframe).
- Individually placed `.ore` elements are animated to travel across the belt (`ore-move` keyframe), simulating the extraction of resources (like Helium-3).

### 3. Telemetry & Power (Left Sidebar)
- Telemetry progress bars (`.t-fill`) use varying widths and colors. The "Drill Torque" bar uses a high-heat orange and pulses (`pulse-heat` keyframe) to indicate strain.
- The `.battery-pack` displays individual `.b-cell` elements. The active cells are fully opaque and glowing, while a single `.charging` cell pulses to simulate solar power input.

### 4. Lunar Regolith Background
- The background `body::before` uses a base SVG noise filter (`<feTurbulence>`) encoded as a data URI to provide a gritty, dusty texture to the deep crater background, accented by subtle CSS radial gradients.

---

## File Structure

```
autonomous-lunar-mining-processing-rover-command-phase-749/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
