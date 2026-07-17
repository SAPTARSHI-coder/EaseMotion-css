# Smart City Autonomous Traffic Flow Nexus — Phase #732

**EaseMotion CSS Showcase** · `submissions/examples/smart-city-autonomous-traffic-flow-nexus-phase-732/`

A city management UI showcase representing an autonomous vehicle traffic control dashboard. Features CSS-rendered top-down city grids, moving vehicles, animated traffic light sequences, and route density indicators.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/smart-city-autonomous-traffic-flow-nexus-phase-732/demo.html
```

---

## Design Theme

Modern city dashboard, autonomous vehicles, traffic grids, and neon lights at night.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0a0b10` | Night City Deep background |
| `--clr-transit`| `#3b82f6` | Transit Blue / Standard Vehicles |
| `--clr-fleet`| `#a855f7` | Autonomous Purple / AI Fleet |
| `--clr-go`| `#10b981` | Traffic Green / Good Flow |
| `--clr-stop`| `#ef4444` | Traffic Red / Heavy Traffic |

---

## Component Breakdown

### 1. Top-Down City Grid Map (Center View)
- The `.map-view` uses absolute positioning for `.city-block` elements to create a crossroad layout.
- The `.traffic-light` in the center uses the `traffic-cycle` keyframe to change background color and box-shadow between Green, Amber, and Red over a 10-second loop.
- The `.vehicle` elements represent cars. They use `drive-h` (horizontal) and `drive-v` (vertical) keyframes to translate across the screen. The animations pause briefly in the middle (`45%` to `55%` keyframes) to simulate waiting at an intersection.

### 2. Traffic Density (Left Sidebar)
- The `.density-bar` displays traffic flow speed.
- The `.d-fill` element changes color based on density classes (`.med`, `.high`).
- It uses an `::after` pseudo-element styled as a glowing white box that animates across the bar (`car-travel` keyframe). The animation duration changes based on the density class to simulate faster or slower traffic flow.

### 3. Cityscape Background
- `body::before` creates soft blue and purple glowing orbs in opposite corners.
- `body::after` generates a scanning lidar grid effect. It uses `repeating-linear-gradient` transformed with `perspective` and `rotateX` to lay it flat, and animates `translateY` (`lidar-scan` keyframe) to create a forward-moving 3D scan line effect.

---

## File Structure

```
smart-city-autonomous-traffic-flow-nexus-phase-732/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
