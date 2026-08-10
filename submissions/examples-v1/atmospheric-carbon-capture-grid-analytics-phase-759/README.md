# Atmospheric Carbon Capture Grid Analytics — Phase #759

**EaseMotion CSS Showcase** · `submissions/examples/atmospheric-carbon-capture-grid-analytics-phase-759/`

A clean, environmental-tech UI showcase representing the analytics dashboard for a Direct Air Capture (DAC) grid. Features CSS-animated fan arrays, atmospheric flow simulation, and a bubbling liquid carbon storage tank.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/atmospheric-carbon-capture-grid-analytics-phase-759/demo.html
```

---

## Design Theme

Clean Air, Environmental Tech, grid arrays, and atmospheric visualizations.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#f1f5f9` | Light atmospheric background |
| `--clr-sky`| `#38bdf8` | Clean Sky Blue / Active UI |
| `--clr-green`| `#10b981` | Eco Green / Efficiency |
| `--clr-carbon`| `#475569` | Carbon Gray / CO2 data |

---

## Component Breakdown

### 1. Wind Flow Simulation (Background)
- The `.wind-layer` element simulates atmospheric air currents passing through the background. It uses a `linear-gradient` stretched to 200% width and animated horizontally using the `wind-blow` keyframe.

### 2. Capture Array Grid (Center View)
- A CSS Grid displaying 16 individual `.fan-unit` modules.
- **Fan Blades**: The `.fan-blade` uses a `conic-gradient` to draw a simple 2-blade fan. A `spin` keyframe rotates it.
- **Modifiers**: Units can have a `.fast` class (spins faster, blue blades) or a `.maint` class (stops spinning, gray blades, alert text).
- **Airflow Particles**: The `.airflow` overlay uses multiple layered `radial-gradient` dots that travel diagonally (`air-move` keyframe) over the entire array.

### 3. Geologic Sequestration Tank (Right Sidebar)
- Simulates liquid CO2 being pumped into a sub-surface tank.
- The `.tank-fill` element has a `linear-gradient`.
- **Bubbling Effect**: An `::before` pseudo-element on the liquid fill uses scattered `radial-gradient` dots animated vertically (`bubble-up` keyframe) to simulate compression bubbles.

### 4. Progress Rings
- The `.circle-chart` in the left sidebar utilizes a CSS `conic-gradient` with a hard stop (`var(--clr-carbon) 68%, #e2e8f0 0`) to create a donut chart purely with CSS.

---

## File Structure

```
atmospheric-carbon-capture-grid-analytics-phase-759/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
