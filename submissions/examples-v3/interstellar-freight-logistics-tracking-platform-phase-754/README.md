# Interstellar Freight Logistics Tracking Platform — Phase #754

**EaseMotion CSS Showcase** · `submissions/examples/interstellar-freight-logistics-tracking-platform-phase-754/`

An industrial spacepunk UI showcase representing a tracking dashboard for interstellar cargo fleets. Features a CSS-rendered 3D holographic starmap, animated hyperspace trajectory lines, and a scrolling live manifest feed.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/interstellar-freight-logistics-tracking-platform-phase-754/demo.html
```

---

## Design Theme

Space Cargo, Sci-Fi Logistics, Trade Routes, and Industrial Spacepunk.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#030712` | Void Deep background |
| `--clr-orange`| `#f97316` | Freight Orange / Primary UI |
| `--clr-blue`| `#38bdf8` | Orbit Blue / Secondary UI |
| `--clr-slate`| `#334155` | Cargo Slate / Surface accents |

---

## Component Breakdown

### 1. 3D Starmap & Freighter Trajectory (Center View)
- The `.map-view` contains a 3D perspective grid (`.map-grid`) using `transform: perspective(600px) rotateX(60deg)`. The `conic-gradient` provides the radar-like sectors. The `map-rotate` keyframe spins it along the Z-axis.
- The `.freighter` marker is created using `clip-path: polygon(...)` to make a stylized ship shape, animated with a subtle `ship-hover` keyframe.
- The `.trajectory` line shoots out from behind the ship, using a `linear-gradient` and animated width (`trajectory-pulse` keyframe) to simulate hyperspace travel.

### 2. Fleet Tonnage Gauge (Left Sidebar)
- The `.t-fill` progress bar uses a `repeating-linear-gradient` to create diagonal warning stripes.
- The `barberpole` keyframe animates the `background-position` linearly to make the stripes continuously scroll horizontally.

### 3. Live Manifest Feed (Left Sidebar)
- A scrolling marquee of active cargo ships.
- The `.manifest-list` container moves vertically using the `manifest-scroll` keyframe. Duplicating items inside allows for a seamless looping effect.

### 4. Starfield Background
- The background `body::before` uses multiple scattered `radial-gradient` dots that pan horizontally (`star-pan` keyframe) to simulate the movement of the platform through space.

---

## File Structure

```
interstellar-freight-logistics-tracking-platform-phase-754/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
