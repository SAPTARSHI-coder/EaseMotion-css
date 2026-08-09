# Exoplanet Bio-Habitability Exploration Index — Phase #712

**EaseMotion CSS Showcase** · `submissions/examples/exoplanet-bio-habitability-exploration-index-phase-712/`

An astrobiology UI showcase representing a real-time habitability index dashboard for exoplanet candidates. Features a CSS-rendered live solar system orrery with orbiting planets, a pulsing habitable zone ring, host star corona animation, and per-planet HBI scoring bars.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/exoplanet-bio-habitability-exploration-index-phase-712/demo.html
```

---

## Design Theme

Deep space astrobiology, exoplanet science, habitability scoring, and stellar systems.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#030509` | Void Black background |
| `--clr-life` | `#4ade80` | Bio-Life Green / High HBI |
| `--clr-water` | `#38bdf8` | Liquid Water Blue / Metrics |
| `--clr-star` | `#fde68a` | Star Yellow / Moderate HBI |
| `--clr-danger` | `#f87171` | Danger Red / Low HBI / Hostile |
| `--clr-aurora` | `#a78bfa` | Aurora Purple / Nebula Glow |

---

## Component Breakdown

### 1. Solar System Orrery (Center View)
- Four `.orbit-track` elements are CSS circles with dashed/solid borders, representing planetary orbits at increasing radii.
- The fourth orbit track uses a CSS `perspective` + `rotateX(72deg)` transform, rendering it as an inclined ellipse to add visual depth.
- The `.hab-zone` is a special orbit ring styled with `rgba(74, 222, 128, 0.25)` and an inner glow. It uses `habzone-breathe` keyframe to pulse in and out, highlighting the region where liquid water could exist.
- Each planet (`.p-kepler`, `.p-toi`, `.p-proxima`) is a CSS circle styled with `radial-gradient` to simulate a 3D sphere. Each uses a dedicated `revolve-*` keyframe: `rotate(Ndeg) translateX(Rpx) rotate(-Ndeg)`. This pattern moves the planet in a circle while keeping it facing forward (no counter-rotation of the body itself).
- The `.host-star` uses a radial gradient from bright white-yellow to deep amber, with a multi-layered `box-shadow` that pulses with `star-corona` keyframe.

### 2. Candidate List (Left Sidebar)
- Each `.planet-card` has `border-left-color` encoding HBI tier: `--clr-life` (green, high), `--clr-star` (amber, moderate), `--clr-danger` (red, low).
- A `.pc-fill` progress bar visually maps the 0–1 HBI score to a percentage width.

### 3. Deep Space Background
- `body::before` uses many small `radial-gradient` dots at fixed `background-position` values to create a static star field with a mix of white, cyan, green, and purple stars.
- `body::after` adds three large `radial-gradient` ellipses in Aurora Purple, Water Blue, and Life Green to simulate a diffuse nebula. The `nebula-breathe` keyframe slowly pulses the entire layer's opacity.

---

## File Structure

```
exoplanet-bio-habitability-exploration-index-phase-712/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
