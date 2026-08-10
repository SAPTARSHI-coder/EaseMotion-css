# Geothermal Energy Sub-Surface Drilling Rig Console — Phase #730

**EaseMotion CSS Showcase** · `submissions/examples/geothermal-energy-sub-surface-drilling-rig-console-phase-730/`

A heavy-industrial HUD UI representing a sub-surface drilling rig control console. Features CSS-simulated downward scrolling strata, a rotating drill bit animation, and magma heat effects.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/geothermal-energy-sub-surface-drilling-rig-console-phase-730/demo.html
```

---

## Design Theme

Heavy Industrial HUD, Magma flow, Geological Strata, and rugged monospaced interfaces.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#1c1917` | Deep Crust Charcoal background |
| `--clr-ind-yel`| `#eab308` | Industrial Yellow / Borders |
| `--clr-magma`| `#ea580c` | Magma Orange / Heat alerts |
| `--clr-alert`| `#ef4444` | Alert Red / Strobe warnings |

---

## Component Breakdown

### 1. Geothermal Strata Background
- The background utilizes a `repeating-linear-gradient` to simulate rock strata.
- A `drill-down` keyframe animates the `background-position` vertically to create a continuous sinking/drilling effect.
- A secondary `body::after` element uses a bottom-aligned `linear-gradient` that pulses with the `magma-pulse` keyframe to simulate approaching geothermal heat.

### 2. Drill Shaft Visualizer (Center View)
- The drill bit (`.drill-bit`) uses a CSS `clip-path` for a sharp, mechanical shape and a linear gradient that cycles colors (`bit-spin` keyframe) to simulate rapid rotation.
- **Magma Sparks**: A `radial-gradient` placed below the bit pulses rapidly (`sparks-fly`) to simulate intense friction heat.

### 3. Industrial Telemetry Bars
- Rig telemetry (RPM, Torque, Temp) utilizes rugged, mechanical gauge bars. The `.gauge-bar` uses an `::before` pseudo-element with a `repeating-linear-gradient` to draw precise measurement tick marks over the top of the fill bar.

### 4. Warning Strobe
- The thermal anomaly alert box utilizes a `strobe` keyframe that toggles the background opacity and box-shadow to grab the operator's attention.

---

## File Structure

```
geothermal-energy-sub-surface-drilling-rig-console-phase-730/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
