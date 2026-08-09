# Smart Hydroponic Vertical Forest Skyscraper Studio — Phase #744

**EaseMotion CSS Showcase** · `submissions/examples/smart-hydroponic-vertical-forest-skyscraper-studio-phase-744/`

An eco-architecture UI showcase representing a control studio for a vertical forest skyscraper. Features CSS-rendered vines swaying in the wind, growing leaves, an orbiting sun, and flowing water droplet animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/smart-hydroponic-vertical-forest-skyscraper-studio-phase-744/demo.html
```

---

## Design Theme

Eco-architecture, Vertical farming, Botany, and Sustainable urban living.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#f0fdf4` | Light Eco Green background |
| `--clr-green-leaf`| `#22c55e` | Flora Green / Plants |
| `--clr-water`| `#38bdf8` | Glass Blue / Hydration |
| `--clr-sun`| `#f59e0b` | Sun Yellow / Energy |
| `--clr-earth`| `#78350f` | Earth Brown / Soil & Structure |

---

## Component Breakdown

### 1. Vertical Forest Cross-Section (Center View)
- The central `.skyscraper` acts as the building structure, divided into `.floor` elements.
- From the floors hang `.vine` elements. These vines use the `sway` keyframe to gently rotate back and forth, simulating wind.
- Each vine has a `::before` pseudo-element styled as a leaf using `border-radius: 50% 0 50% 50%`. The leaf uses the `leaf-grow` keyframe to scale up and down, simulating growth/breathing.
- The `.sun` element orbits the skyscraper using the `sun-arc` keyframe, translating across the sky and changing opacity.

### 2. Hydration Systems (Left Sidebar)
- The `.drop-track` represents a pipe or flow channel.
- Inside, the `.droplet` (shaped like a water drop using `border-radius: 50% 0 50% 50%` and `transform: rotate(-45deg)`) travels horizontally back and forth using the `drop-flow` keyframe.

### 3. Environment Background
- `body::before` creates a soft gradient background representing the sun and earth.
- `body::after` generates a falling leaves particle effect. It uses multiple `radial-gradient` dots layered over each other, animated via `background-position` (`fall-leaves` keyframe) to create a continuous downward parallax scroll.

---

## File Structure

```
smart-hydroponic-vertical-forest-skyscraper-studio-phase-744/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
