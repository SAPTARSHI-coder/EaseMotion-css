# Zero-Trust Holographic Security Operations Center — Phase #757

**EaseMotion CSS Showcase** · `submissions/examples/zero-trust-holographic-security-operations-center-phase-757/`

A high-tech, hacker/cybersecurity SOC terminal showcase built entirely in CSS. Features simulated digital rain, threat pinging on a map, and CSS typing animations.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/zero-trust-holographic-security-operations-center-phase-757/demo.html
```

---

## Design Theme

Cybersecurity, terminal green, matrix vibes, and data streams.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020804` | Deep terminal black/green |
| `--clr-term-green`| `#00ff41` | Primary text and accents |
| `--clr-alert-red`| `#ff003c` | Critical threats and breaches |
| `--clr-panel`| `rgba(5, 15, 10, 0.85)` | Translucent UI Panels |

---

## Component Breakdown

### 1. Matrix Digital Rain & CRT Scanlines
- **Digital Rain**: A `repeating-linear-gradient` applied to `body::before` is animated on the Y-axis using `background-position` to create a continuous downward scrolling effect.
- **CRT Overlay**: A static `body::after` adds horizontal scanlines and slight RGB separation to simulate an old CRT terminal monitor.

### 2. Threat Map (Main View)
- **Scanning Line**: A horizontal bright green bar animates from top to bottom over the grid using the `map-scan` keyframe.
- **Map Nodes**: Absolutely positioned dots representing servers. They utilize a `node-ping` animation (scaling a border outwards and fading it) to simulate radar/sonar activity.
- **Attack Vectors**: SVG paths styled with `stroke-dasharray` and animated via `stroke-dashoffset` (`dash-flow` keyframe) to show attacks moving toward the central breach node.

### 3. Typing Text Animation
- The `.typewriter` class uses CSS `animation` with `steps()` to animate the `width` of the text container from 0 to 100%. A secondary animation toggles the `border-right-color` to simulate a blinking cursor.

### 4. Glitch Entrance Animation
- The `glitchFade` animation brings elements onto the screen by rapidly scaling, skewing, and shifting the hue before settling into their final state, adding to the hacked/cyber aesthetic.

---

## File Structure

```
zero-trust-holographic-security-operations-center-phase-757/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
