# Global Ocean Acidification Monitoring Grid — Phase #728

**EaseMotion CSS Showcase** · `submissions/examples/global-ocean-acidification-monitoring-grid-phase-728/`

A deep-sea, sonar-themed UI showcase representing a global monitoring system for ocean acidification. Features a CSS-rendered sonar sweep, floating bubble animations, and fluid caustic overlays.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/global-ocean-acidification-monitoring-grid-phase-728/demo.html
```

---

## Design Theme

Aquatic, marine telemetry, sonar-style interfaces, and bioluminescent colors.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#082f49` | Deep Ocean Blue background |
| `--clr-aqua`| `#2dd4bf` | Bio-Luminescent Aqua / Primary UI |
| `--clr-pink`| `#fb7185` | Acidification Alert |
| `--clr-coral`| `#f43f5e` | Severe Alert Red |

---

## Component Breakdown

### 1. Ocean Caustics Overlay (Background)
- The background utilizes a slowly drifting grid (`grid-drift` keyframe) combined with a `radial-gradient` overlay simulating underwater light caustics (`pulse-caustics` keyframe). This provides depth without relying on external media.

### 2. Sonar Grid Visualizer (Center View)
- A central circular interface simulating a sonar scope.
- **Rings & Sweep**: Uses CSS `border-radius: 50%` for distance rings, overlaid with a `conic-gradient` that rotates continuously (`sweep-spin` keyframe) acting as the sonar arm.
- **Buoy Markers**: Positioned absolutely on the grid. Critical markers flash with a `sonar-ping` animation utilizing an expanding `box-shadow`.

### 3. Coral Reef Alerts & pH Scale
- **Alert Cards**: Feature a custom `float-up` animation attached to the `::before` pseudo-element, creating the effect of a warning bubble rising out of the card.
- **pH Scale**: A static CSS `linear-gradient` representing the pH spectrum from acidic (red) to basic (aqua), featuring an absolute-positioned indicator line.

---

## File Structure

```
global-ocean-acidification-monitoring-grid-phase-728/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
