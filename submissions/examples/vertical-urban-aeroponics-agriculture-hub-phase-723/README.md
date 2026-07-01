# Vertical Urban Aeroponics Agriculture Hub — Phase #723

**EaseMotion CSS Showcase** · `submissions/examples/vertical-urban-aeroponics-agriculture-hub-phase-723/`

A green tech UI showcase representing an automated vertical farming dashboard. Features CSS-rendered growing plants, aeroponic misting effects, scanning UV lights, and nutrient flow animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/vertical-urban-aeroponics-agriculture-hub-phase-723/demo.html
```

---

## Design Theme

Green tech, sustainable farming, clean environment, botany, and modern agriculture.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0c0a09` | Soil Dark background |
| `--clr-leaf`| `#16a34a` | Leaf Green / Organic Growth |
| `--clr-hydro`| `#0ea5e9` | Hydro Blue / Water Systems |
| `--clr-uv`| `#8b5cf6` | UV Purple / Lighting |
| `--clr-sun`| `#fde047` | Sunlight Yellow / Climate |

---

## Component Breakdown

### 1. Vertical Farming Racks (Center View)
- The `.rack` elements act as shelves.
- The `.plant` elements represent crops. They are built entirely with CSS (`.stem`, `.leaf` elements rotated into position). 
- Growth Animation: The `.plant` uses `transform-origin: bottom` and scales on the Y-axis from 0 to 1 (`grow` keyframe). Staggered `animation-delay` and `animation-duration` are applied to different racks to simulate staggered growth cycles.
- The `.mist-layer` creates a fog effect using a `radial-gradient` that slowly pulses and drifts horizontally (`mist-drift` keyframe) to simulate aeroponic root misting.
- A global UV scan line overlays the rack view, using a `linear-gradient` that translates downward continuously (`uv-scan` keyframe).

### 2. Aeroponic Systems (Left Sidebar)
- The `.droplet` icon is a square with `border-radius: 50% 0 50% 50%`, rotated 45 degrees. It uses the `drip` keyframe to animate scaling, translating downward, and fading to simulate a falling water drop.
- Nutrient bars use the `.ni-fill` element. An `::after` pseudo-element creates a shiny white sweeping gradient (`sweep` keyframe) to simulate liquid flowing through a tube.

### 3. Greenhouse Background
- `body::before` creates subtle purple and green radial glows at the top and bottom.
- `body::after` uses a grid pattern created with `linear-gradient`, rotated in 3D space (`perspective`, `rotateX`) to look like the glass panes of a large greenhouse roof receding into the distance.

---

## File Structure

```
vertical-urban-aeroponics-agriculture-hub-phase-723/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
