# Nuclear Thermal Propulsion Spacecraft Bridge — Phase #739

**EaseMotion CSS Showcase** · `submissions/examples/nuclear-thermal-propulsion-spacecraft-bridge-phase-739/`

A deep-space, aerospace HUD UI showcase representing the command bridge of a spacecraft utilizing Nuclear Thermal Propulsion (NTP). Features a CSS-rendered parallax starfield, an animated reactor core visualizer, and fluid propellant flow UI components.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/nuclear-thermal-propulsion-spacecraft-bridge-phase-739/demo.html
```

---

## Design Theme

Aerospace/Military HUD, Deep Space, Reactor telemetry, and high-contrast neon colors on void black.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#000000` | Void Black background |
| `--clr-green`| `#84cc16` | Uranium Green / Primary HUD |
| `--clr-orange`| `#f97316` | Plasma Orange / Core Heat |
| `--clr-blue`| `#3b82f6` | Cold Core Blue / Propellant |

---

## Component Breakdown

### 1. Parallax Starfield Background (CSS Gradients)
- The background utilizes multiple layered `radial-gradient` patterns on the `body::before` and `body::after` pseudo-elements to create a starfield.
- A `star-warp` keyframe animates the `transform: translateZ` and `translateY` properties. The `::after` element is scaled up and animates faster to create a parallax 3D warp effect without WebGL.

### 2. NTP Reactor Core Visualizer (Center View)
- A central interface representing the nuclear reactor core.
- **Core Heat**: The central `.reactor-core` uses a `radial-gradient` and heavy `box-shadow` to simulate intense heat, pulsing via a `core-breathe` keyframe.
- **Magnetic Containment Rings**: CSS circles with selective `border-color` (top/bottom or left/right) rotate continuously at different speeds (`spin-core`) to represent magnetic containment fields.

### 3. Propellant Flow UI (Left Sidebar)
- Liquid Hydrogen (LH2) propellant flow is visualized using horizontal CSS bars.
- **Flow Animation**: The `.prop-fill` element utilizes an `::after` pseudo-element with a `repeating-linear-gradient`. Animating the `background-position` of this gradient creates a fluid "flowing" effect along the bar.

### 4. Caution Strip
- A classic hazard stripe built using a `repeating-linear-gradient(45deg)` animated with a `caution-slide` keyframe for a mechanical, scrolling warning effect.

---

## File Structure

```
nuclear-thermal-propulsion-spacecraft-bridge-phase-739/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
