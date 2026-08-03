# Smart Cyber-Physical Power Grid Command — Phase #740

**EaseMotion CSS Showcase** · `submissions/examples/smart-cyber-physical-power-grid-command-phase-740/`

A cyber-physical control UI showcase representing a national smart power grid command center. Features CSS-rendered animated power lines, pulsing grid nodes, rotating generation icons, and marching-ant energy flows.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/smart-cyber-physical-power-grid-command-phase-740/demo.html
```

---

## Design Theme

Power Grid, Cyber-Physical Systems, Energy Flow, and High-voltage control.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0b1121` | Circuit Dark background |
| `--clr-blue`| `#0ea5e9` | Grid Blue / Primary UI |
| `--clr-yellow`| `#facc15` | High-Voltage Yellow / Core stats & alerts |
| `--clr-orange`| `#f97316` | Warning Orange / Security anomalies |

---

## Component Breakdown

### 1. Cyber-Physical Grid Map (Center View)
- The central node `.n-core` and surrounding `.node` elements use absolute positioning over a `radial-gradient` background.
- `.node` elements use the `node-pulse` keyframe on their `::after` pseudo-element to simulate active connection states.
- Power connections are drawn using an inline `<svg>` for precise rendering. The `.p-flow` lines use `stroke-dasharray: 10 10` and the `line-flow` keyframe to animate `stroke-dashoffset`, creating a "marching ants" effect that simulates energy transferring from nodes to the core.

### 2. Power Generation Sources (Left Sidebar)
- Each `.gen-item` has an animated `.g-icon`:
  - Wind icon rotates using `spin-slow`.
  - Solar icon pulses using `pulse-core`.
  - Nuclear icon rotates in reverse.
- The output `.g-fill` bars have an `::after` pseudo-element with a repeating 45-degree `linear-gradient`. The `energy-flow` keyframe translates this horizontally to create a continuous flowing energy effect inside the bar.

### 3. Cyber-Physical Grid Background
- `body::before` creates a large grid pattern using intersecting `linear-gradient` backgrounds on a 50px scale.
- `body::after` is a thin blue line with a box shadow that sweeps down the entire screen using the `grid-scan` keyframe, simulating a continuous security or radar scan of the cyber-physical environment.

---

## File Structure

```
smart-cyber-physical-power-grid-command-phase-740/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
