# Volcanic Activity & Seismic Early Warning Grid — Phase #735

**EaseMotion CSS Showcase** · `submissions/examples/volcanic-activity-seismic-early-warning-grid-phase-735/`

A geoscience UI showcase representing an early warning system for volcanic and seismic activity. Features CSS-rendered magma chambers, rising conduit flows, gas plumes, ashfall particle effects, and global tremor animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/volcanic-activity-seismic-early-warning-grid-phase-735/demo.html
```

---

## Design Theme

Geoscience, Seismology, Volcano monitoring, and Disaster early warning.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#09090b` | Alert Black background |
| `--clr-magma`| `#ef4444` | Magma Red / Critical Alert |
| `--clr-lava`| `#f97316` | Lava Orange / High Activity |
| `--clr-seismic`| `#eab308`| Seismic Yellow / Moderate Activity |
| `--clr-ash`| `#71717a` | Ash Gray / UI Elements |

---

## Component Breakdown

### 1. Volcanic Cone Cross-Section (Center View)
- The `.volcano` shape is built entirely using CSS borders (`border-left`, `border-right`, `border-bottom`).
- The `.magma-chamber` sits at the bottom using a `radial-gradient` and pulses using the `chamber-boil` keyframe.
- The `.conduit` (the pipe to the surface) uses a `linear-gradient` for its base color. Its `::after` pseudo-element layers another `linear-gradient` scaled to `200%` height. The `magma-rise` keyframe animates `background-position` to create a continuous upward flow effect.
- `.plume` elements simulate gas/ash rising from the crater, animating upwards and fading out (`rise-plume`).

### 2. Global Tremor Animation
- The entire application is wrapped in an `.app-wrapper` div.
- This wrapper uses the `global-tremor` keyframe, which rests at `0, 0` for 95% of the time, and then violently translates by 1-2 pixels in random directions for the last 5% of the animation loop, simulating an occasional earthquake shaking the UI.

### 3. Seismic Tremor Logs (Left Sidebar)
- Displays recent quakes. The `.high` severity event has a pulsing red background (`bg-pulse` keyframe).
- A CSS-only `.waveform` graphic is created using flexbox and `.wf-bar` elements with randomized heights to simulate a seismograph reading.

### 4. Ashfall Background
- `body::before` creates a red geothermal glow at the bottom center.
- `body::after` simulates falling ash using multiple `radial-gradient` patterns on a `200vh` tall element, animated via `background-position` (`fall-ash` keyframe) to create a continuous downward parallax scroll.

---

## File Structure

```
volcanic-activity-seismic-early-warning-grid-phase-735/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
