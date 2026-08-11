# Global Smart Grid Renewable Energy Dispatch — Phase #764

**EaseMotion CSS Showcase** · `submissions/examples/global-smart-grid-renewable-energy-dispatch-phase-764/`

A complete, single-page, responsive HTML/CSS UI design showcase for a global smart grid monitoring dashboard, built entirely with vanilla CSS.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/global-smart-grid-renewable-energy-dispatch-phase-764/demo.html
```

---

## Design Theme

High-tech, neon-illuminated dark mode aesthetic.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg-base` | `#0a0f12` | Deep grid background |
| `--clr-volt` | `#39ff14` | Volt Green (Hydro / Base Grid) |
| `--clr-solar`| `#ffea00` | Solar Yellow |
| `--clr-wind` | `#00f0ff` | Wind Cyan |
| `--clr-warn` | `#ff3366` | High Load / Alert Red |

---

## Component Breakdown

### 1. Grid & Pulse Background
- **Grid Pattern**: A fixed `body::before` utilizing overlapping `linear-gradient` backgrounds to create a subtle 40x40 grid.
- **Ambient Pulse**: `body::after` uses a large `radial-gradient` mapped to the `grid-pulse` keyframe, softly scaling and fading opacity to simulate background energy surges.

### 2. Animated Header Icon
- The main `⚡` icon utilizes the `flash` keyframe to rapidly blink opacity and text-shadow, simulating electrical sparking.

### 3. Generation Source Sidebars
- Hovering over a source card applies a `translateX` effect and a subtle background tint.
- **Solar**: Sun icon uses `pulse-sun` to scale up and increase its box-shadow.
- **Wind**: Turbine blade icon uses `spin` for a continuous 360-degree rotation.
- **Hydro**: Icon uses a smooth `float` animation on the Y-axis.

### 4. SVG Energy Dispatch Map
- The central map routes power using SVG `<path>` elements.
- **Energy Flow**: The `.power-flow` paths use `stroke-dasharray` and animate `stroke-dashoffset` infinitely to simulate packets of energy traveling along the lines toward the central core. Each flow line is color-coded to its energy source.
- **Node Hubs**: Absolute-positioned divs (`.hub`) representing regions. The warning hub uses a `warn-ping` keyframe to flash a warning ring.

### 5. Analytics & Dispatch Log
- **Load Meters**: CSS progress bars with colored `.meter-fill` elements that drop distinct box-shadow glows.
- **Live Dispatch Log**: Simulated terminal output using the `log-scroll` animation to continuously slide text upward, complete with a gradient fade-out at the bottom.

---

## EaseMotion CSS Techniques Used

| Technique | Applied To |
|---|---|
| `fadeUp` entrance + delay | All sidebars and main panels |
| `grid-pulse` ambient scale | Background energy glow |
| `spin` rotation | Wind turbine icon |
| `float` translation | Hydro icon |
| `energy-flow` stroke-dashoffset | SVG power routing lines |
| `log-scroll` translation | Live dispatch log |
| `backdrop-filter: blur` | Header, panels |

---

## File Structure

```
global-smart-grid-renewable-energy-dispatch-phase-764/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
