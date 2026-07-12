# Desalination Plant Clean Water Distribution Grid — Phase #869

**EaseMotion CSS Showcase** · `submissions/examples/desalination-plant-clean-water-distribution-grid-phase-869/`

A complete, single-page, responsive HTML/CSS UI design showcase for an industrial desalination facility management dashboard.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/desalination-plant-clean-water-distribution-grid-phase-869/demo.html
```

---

## Design Theme

Clean, aquatic, and industrial.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg-deep` | `#031020` | Deep water background |
| `--clr-water-pure` | `#00f0ff` | Fresh / pure water accent |
| `--clr-water-raw` | `#3b82f6` | Seawater accent |
| `--clr-brine` | `#a855f7` | Brine discharge status |
| `--clr-success` | `#00ff88` | Operational status |

---

## Component Breakdown

### 1. Ambient Caustic Background
- `.caustic-overlay` utilizes overlapping `radial-gradient` backgrounds mapped to large background sizes.
- The `caustic-shift` animation slowly translates and scales these gradients to create a slow-moving, underwater light reflection effect (caustics).

### 2. Header & Branding
- Glassmorphic header (`backdrop-filter: blur(10px)`).
- Brand icon features a pure CSS rotating wave animation using a pseudo-element (`.brand-icon::after`).

### 3. Process Flow Sidebar
- Interactive stepper showing stages: Seawater Intake -> Pre-Treatment -> Reverse Osmosis -> Remineralization.
- Hover states with `translateX` and `box-shadow` inset glowing.

### 4. Animated Distribution Grid (Center)
- A schematic map of water pipes (`.pipe`) and distribution hubs (`.hub`).
- **CSS Flow Animation**: Pseudo-elements (`.flow`) inside the pipes use a `linear-gradient` mask and translate across the pipe's length/height infinitely, simulating fluid movement.
- Hub nodes pulse using a `scale` and `opacity` keyframe (`pulse-node`).

### 5. Animated Reservoir Tank
- A CSS-drawn water tank (`.tank`).
- Water level (`.water-fill`) is a simple `height` percentage.
- **Wave Effect**: Two overlapping SVGs encoded as `background-image` data URIs (`.water-wave`). They animate horizontally at different speeds and opposite directions to create a fluid, overlapping wave motion.

### 6. Live Metrics
- Clean tabular readout for Output, Grid Pressure, TDS (Purity), and Energy Consumption.

---

## EaseMotion CSS Techniques Used

| Technique | Applied To |
|---|---|
| `fadeUp` entrance + delay | All sidebars and main panels |
| `caustic-shift` background | Full page ambient effect |
| `wave-spin` rotation | Brand logo water effect |
| `flow-h` / `flow-v` | Distribution grid pipe animations |
| `pulse-node` | Grid hub nodes |
| `wave-flow` horizontal shift | SVG Reservoir tank waves |
| `backdrop-filter: blur` | Header, panels |

---

## File Structure

```
desalination-plant-clean-water-distribution-grid-phase-869/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
