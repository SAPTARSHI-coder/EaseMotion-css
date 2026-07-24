# Deep-Space Satellite Constellation Telemetry — Phase #867

**EaseMotion CSS Showcase** · `submissions/examples/deep-space-satellite-constellation-telemetry-phase-867/`

A complete, single-page, responsive HTML/CSS UI design showcase for a deep-space satellite telemetry and radar tracking interface.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/deep-space-satellite-constellation-telemetry-phase-867/demo.html
```

---

## Design Theme

High-tech, dark mode, radar/astronomy aesthetics.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg-void` | `#010308` | Deep space background |
| `--clr-radar-a` | `#00ff9d` | Radar Green (Nominal) |
| `--clr-radar-b` | `#00b8ff` | Deep Space Blue (UI Chrome) |
| `--clr-alert` | `#ff4757` | Critical Red (Signal Lost) |
| `--clr-warn` | `#ffa502` | Warning Orange (Thermal) |

---

## Component Breakdown

### 1. Deep Space Starfield & Grid
- **Starfield**: Generated entirely via CSS `radial-gradient` layered onto `body::before`. The `star-drift` keyframe translates the background infinitely to simulate slow movement through space.
- **Grid Overlay**: A subtle grid applied to `body::after` to ground the UI.

### 2. Header Status
- Glassmorphic header (`backdrop-filter: blur(10px)`).
- Brand icon uses a `ping` keyframe animation (scaling and fading box-shadow) to simulate a radar pulse.

### 3. Active Assets (Left Sidebar)
- List of satellites with severity-coded left borders (`warn`, `alert`).
- Hover interactions apply a subtle `translateX` and background glow.

### 4. Central CSS Radar
- A pure CSS radar system built with nested divs (`.radar-ring`).
- **Sweep Animation**: The `.radar-sweep` uses a `conic-gradient` and rotates infinitely over 4 seconds (`sweep` keyframe).
- **Orbiting Satellites**: Nested divs (`.orbit-path`) rotate at different speeds (`orbit-cw`, `orbit-ccw`). The `.sat-dot` elements sit on the edge of these paths and naturally orbit the center. Alert dots feature a `blink` animation.

### 5. Telemetry Data Stream (Right Sidebar)
- Simulated terminal output.
- The `.stream-content` container uses a CSS `scroll-up` animation (translating Y from 100% to -100%) to create a continuous scrolling marquee of log data.
- A gradient overlay on the container creates a smooth fade-out effect at the bottom.

### 6. Signal Graph & Uplink
- **Signal Graph**: A pure CSS bar chart built with flexbox. Heights are set via inline styles. Hovering over a bar brightens it and changes its color to Radar Green.
- **Uplink Button**: High-tech bordered button with neon hover states (`box-shadow` glow).

---

## EaseMotion CSS Techniques Used

| Technique | Applied To |
|---|---|
| `fadeIn` entrance + delay | All sidebars and main panels |
| `star-drift` translation | Deep space background |
| `ping` scale + box-shadow | Header radar icon |
| `sweep` conic-gradient rotation | Central radar sweep |
| `orbit-cw` / `orbit-ccw` rotation | Satellite orbits |
| `scroll-up` translation | Telemetry data stream |
| `backdrop-filter: blur` | Header, panels |

---

## File Structure

```
deep-space-satellite-constellation-telemetry-phase-867/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
