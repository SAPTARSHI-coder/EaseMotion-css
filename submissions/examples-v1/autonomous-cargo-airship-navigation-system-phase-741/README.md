# Autonomous Cargo Airship Navigation System — Phase #741

**EaseMotion CSS Showcase** · `submissions/examples/autonomous-cargo-airship-navigation-system-phase-741/`

An aviation logistics UI showcase representing a navigation and payload dashboard for a modern autonomous cargo airship. Features CSS-rendered cruising airships, sweeping LIDAR radars, parallax clouds, and animated thrusters.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/autonomous-cargo-airship-navigation-system-phase-741/demo.html
```

---

## Design Theme

Aviation tech, logistics, modern airships, navigation grids, calm/steady flight UI.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0f172a` | Navy Blue background |
| `--clr-sky`| `#38bdf8` | Sky Blue / Navigation & Radar |
| `--clr-cargo`| `#f97316` | Cargo Orange / Payload |
| `--clr-twilight`| `#6366f1` | Twilight Purple / Accents |
| `--clr-white`| `#f1f5f9` | Cloud White / Text & Clouds |

---

## Component Breakdown

### 1. Airship Profile View (Center View)
- The `.airship` container uses the `airship-cruise` keyframe to gently translate up and down while slightly rotating, simulating a massive, steady vessel in flight.
- Built using CSS shapes: `.envelope` for the balloon (with a linear gradient for shading), and `.gondola` for the cargo bay/cockpit.
- The `.thruster` elements feature a `.t-flame` pseudo-flame that rapidly scales horizontally (`thrust-flicker` keyframe).
- Background `.speed-lines` use a `linear-gradient` dashed pattern moving horizontally (`speed-dash`) to create a parallax sense of forward motion.

### 2. LIDAR Navigation (Left Sidebar)
- The `.radar-view` creates a circular radar screen.
- `.radar-grid` uses multiple `radial-gradient` and `linear-gradient` lines to draw the concentric circles and crosshairs.
- `.radar-sweep` uses a `conic-gradient` that rotates continuously 360 degrees (`radar-spin` keyframe) to simulate the radar scan.
- `.radar-blip` elements represent tracked objects and fade in/out (`blip-fade`).

### 3. Sky Background & Parallax Clouds
- `body::before` creates a deep sky gradient.
- `body::after` generates large, faint cloud layers using `radial-gradient` ellipses. The `cloud-drift-slow` keyframe translates these very slowly across the background to enhance the sense of high-altitude flight.

---

## File Structure

```
autonomous-cargo-airship-navigation-system-phase-741/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
