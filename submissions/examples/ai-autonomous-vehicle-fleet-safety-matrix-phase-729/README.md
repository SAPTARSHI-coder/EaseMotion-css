# AI Autonomous Vehicle Fleet Safety Matrix — Phase #729

**EaseMotion CSS Showcase** · `submissions/examples/ai-autonomous-vehicle-fleet-safety-matrix-phase-729/`

A sleek automotive HUD UI representing an autonomous vehicle safety monitoring system. Features CSS-simulated LiDAR sweeps, scrolling road backgrounds, and animated hazard alerts.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ai-autonomous-vehicle-fleet-safety-matrix-phase-729/demo.html
```

---

## Design Theme

Automotive HUD, LiDAR visualization, clean geometric interfaces, and high-contrast alert colors.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0f172a` | Asphalt Black background |
| `--clr-cyan`| `#0ea5e9` | LiDAR Blue / Primary HUD |
| `--clr-red`| `#ef4444` | Hazard Red / Critical alerts |
| `--clr-green`| `#10b981` | Safety Green / Optimal status |

---

## Component Breakdown

### 1. 3D Road Grid Background (CSS Perspective)
- The entire body background utilizes `linear-gradient` patterns scaled and rotated using `transform: perspective(600px) rotateX(60deg) scale(2)` to create a 3D road-like grid.
- A `road-scroll` keyframe animates the `background-position` to create a continuous forward-motion effect without WebGL.

### 2. LiDAR Intersection Map (Center View)
- An overhead representation of an intersection.
- **LiDAR Scanner**: A CSS circle (`.scanner`) overlaid with a `conic-gradient` that rotates continuously (`scan-spin`), mimicking a LiDAR or radar sweep.
- **AV & Obstacles**: The "ego" vehicle features a CSS-gradient path prediction line extending forward. Obstacles (`.obj`) are plotted, with `.hazard` objects flashing via a `pulse-haz` keyframe animation.

### 3. Glassmorphic Data Panels
- UI panels float over the 3D grid using deep translucent backgrounds and `backdrop-filter: blur(10px)`.
- **Telemetry Bars**: Simple CSS width animations for speed and temperature.
- **Safety Score Ring**: Built using a static `conic-gradient` masked by an inner solid circle to create a circular progress UI element.

---

## File Structure

```
ai-autonomous-vehicle-fleet-safety-matrix-phase-729/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
