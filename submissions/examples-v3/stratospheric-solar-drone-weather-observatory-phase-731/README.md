# Stratospheric Solar Drone Weather Observatory — Phase #731

**EaseMotion CSS Showcase** · `submissions/examples/stratospheric-solar-drone-weather-observatory-phase-731/`

An aerospace UI showcase representing an atmospheric monitoring dashboard for a high-altitude solar drone. Features CSS-rendered hovering drones, spinning propellers, glowing solar arrays, and high-altitude cloud currents.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/stratospheric-solar-drone-weather-observatory-phase-731/demo.html
```

---

## Design Theme

Aerospace, high-altitude flight, solar energy, atmospheric monitoring, and weather patterns.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0f172a` | Deep Stratosphere background |
| `--clr-solar`| `#facc15` | Solar Gold / Energy systems |
| `--clr-ozone`| `#22d3ee` | Ozone Cyan / Flight Data |
| `--clr-white`| `#f8fafc` | Cloud White / Secondary UI |
| `--clr-data`| `#c084fc` | Data Purple / Telemetry |

---

## Component Breakdown

### 1. Drone Telemetry View (Center View)
- The `.drone-body` represents the main fuselage and uses the `hover-drone` keyframe to gently translate up and down while slightly rotating, simulating flight turbulence.
- The `.wing` elements extend outward. Their `::after` pseudo-element uses a `repeating-linear-gradient` to look like solar panels.
- The `.prop` elements represent the drone's propellers. They are styled as horizontal lines that animate using `transform: scaleX(0.1)` rapidly (`spin-prop` keyframe) to create the illusion of fast 3D rotation.

### 2. Solar & Battery Systems (Left Sidebar)
- The `.charge-bar` displays energy metrics.
- Its `.c-fill` uses an `::after` pseudo-element with a repeating 45-degree `linear-gradient`. The `energy-flow` keyframe translates this horizontally to create a continuous energy flow effect representing solar charging and motor power draw.

### 3. Atmospheric Background
- `body::before` creates a deep vertical gradient from dark space down to atmospheric blue.
- `body::after` simulates high-altitude wind currents or thin cirrus clouds. It uses wide `radial-gradient` patterns and animates them horizontally using the `wind-currents` keyframe to give a sense of high-speed flight relative to the atmosphere.

---

## File Structure

```
stratospheric-solar-drone-weather-observatory-phase-731/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
