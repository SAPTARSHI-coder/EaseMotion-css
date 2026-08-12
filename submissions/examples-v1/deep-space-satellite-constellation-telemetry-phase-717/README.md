# Deep-Space Satellite Constellation Telemetry — Phase #717

**EaseMotion CSS Showcase** · `submissions/examples/deep-space-satellite-constellation-telemetry-phase-717/`

A space operations UI showcase representing a real-time telemetry dashboard for a deep-space satellite constellation. Features a CSS-rendered live orbital map with satellites in motion, sweeping signal beams, Earth ripple effects, staggered telemetry log entries, and signal strength gauges.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/deep-space-satellite-constellation-telemetry-phase-717/demo.html
```

---

## Design Theme

Deep space, satellite networking, orbital mechanics, telemetry stations.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020408` | Deep Space Black background |
| `--clr-signal` | `#00e5ff` | Signal Cyan / Primary UI |
| `--clr-orbital` | `#7c3aed` | Orbital Violet / Accents |
| `--clr-ok` | `#00ffa3` | Lock-On Green / Nominal Status |
| `--clr-alert` | `#ff6b35` | Alert Orange / Critical Status |

---

## Component Breakdown

### 1. Live Orbital Map (Center View)
- The `.earth` element is a CSS circle styled with layered `radial-gradient` to simulate blue ocean and a green landmass pseudo-element.
- `.orbit` elements are CSS circles with `border-style: dashed`, representing orbital paths. Each rotates continuously via the `orbit-spin` keyframe at different speeds and directions. `.orbit-3` uses `perspective` and `rotateX` to render as an inclined ellipse.
- `.satellite` elements sit at the top of each `.orbit` container, with their `transform-origin` set to point toward the Earth's center, so as the container rotates they appear to travel along the orbital path.
- `.sat-dot::before` and `::after` pseudo-elements create small rectangular solar panels extending from either side of the satellite body.
- The `.signal-beam` is a tall thin element anchored at Earth's center and rotating via `beam-rotate` keyframe, simulating a ground-tracking signal beam sweeping across orbits.
- `.ripple` elements expand outward from Earth using the `data-ripple` keyframe (`scale(1)` → `scale(4)`, `opacity: 0.5` → `opacity: 0`). Three staggered copies create a continuous pulsing data-uplink effect.

### 2. Constellation Status (Left Sidebar)
- Each `.sat-item` represents a satellite node. Different `border-left-color` values (`--clr-ok`, `--clr-warn`, `--clr-alert`) give an immediate visual health indicator.
- `.si-badge` elements use matching border colors to reinforce status (Nominal / Degraded / ALERT).

### 3. Signal Telemetry (Right Sidebar)
- Each `.signal-gauge` contains a progress bar. The `.sg-bar::after` pseudo-element creates a sweeping highlight using `animation: signal-sweep`, simulating live data flowing through the bar.
- The `.telem-log` section displays log entries that fade in sequentially using staggered `animation-delay` on the `log-appear` keyframe.

### 4. Starfield & Nebula Background
- `body::before` uses many small `radial-gradient` dots at fixed `background-size` positions to create a static star field. A slow `star-twinkle` keyframe pulses the entire layer's opacity.
- `body::after` creates two large `radial-gradient` ellipses in Orbital Violet and Signal Cyan to simulate a deep-space nebula.

---

## File Structure

```
deep-space-satellite-constellation-telemetry-phase-717/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
