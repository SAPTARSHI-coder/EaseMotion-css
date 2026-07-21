# Neuromorphic Chip Semiconductor Factory Monitor — Phase #713

**EaseMotion CSS Showcase** · `submissions/examples/neuromorphic-chip-semiconductor-factory-monitor-phase-713/`

A semiconductor fabrication UI showcase representing a real-time factory monitor for neuromorphic 3nm chip production. Features a CSS-rendered interactive wafer map with pass/fail/scan die states, a scanning probe animation, process stage progress bars, a yield donut chart, and defect analytics.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/neuromorphic-chip-semiconductor-factory-monitor-phase-713/demo.html
```

---

## Design Theme

Silicon fabrication, clean room, semiconductor process monitoring, and chip analytics.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#07080f` | Silicon Dark background |
| `--clr-neuro` | `#6ee7f7` | Neuromorphic Cyan / Primary |
| `--clr-silicon` | `#a78bfa` | Silicon Purple / Accent |
| `--clr-gate` | `#34d399` | Logic Gate Green / Pass / OK |
| `--clr-fault` | `#f87171` | Fault Red / Fail / Error |
| `--clr-wafer` | `#fbbf24` | Wafer Amber / Paused / Warning |

---

## Component Breakdown

### 1. Wafer Map (Center View)
- The `.wafer` element is a CSS circle with a deep `radial-gradient` background, simulating a silicon wafer viewed from above under inspection equipment.
- The `.die-grid` is a flexbox container with `flex-wrap: wrap` that fills the circular wafer with individual `.die` elements (22×22px squares with border). The wafer uses `overflow: hidden` and `border-radius: 50%` to clip the grid into the circular shape, avoiding any JavaScript-based die position calculations.
- Three visual states are applied to individual dies: `.pass` (green tint), `.fail` (red tint), and `.scan` (bright cyan with `die-active` blink keyframe indicating a die currently being probed).
- The `.wafer-scan` is an absolutely positioned horizontal bar that translates from top (30px) to bottom (310px) of the wafer using the `scan-wafer` keyframe, simulating an automated probe station scanning the wafer.

### 2. Process Stages (Left Sidebar)
- Each `.stage-item` represents one photolithographic step. `border-left-color` encodes the state: green for OK, cyan for Running, amber for Paused/Warning, red for Fault.
- Running stages have an `::after` pseudo-element that pulses vertically using `stage-run` keyframe, acting as a live activity indicator.
- Progress bars (`.stage-fill`) show completion percentage, filled with the state color.

### 3. Yield Donut Chart (Right Sidebar)
- The `.yield-donut` is a CSS circle with a `conic-gradient` background. The green segment covers 0%–94% (yield) and the red segment covers 94%–100% (loss), cleanly split without any JavaScript or SVG.
- A `.yield-donut::before` pseudo-element creates an inner circle (inset 15px) in the surface color, creating the "donut hole" effect.

### 4. Circuit Background
- `body::before` creates a layered double-grid using four `linear-gradient` lines at 80px and 20px spacings, simulating circuit board trace patterns at two scales.

---

## File Structure

```
neuromorphic-chip-semiconductor-factory-monitor-phase-713/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
