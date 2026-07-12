# Global Biodiversity Ecological Protection Network — Phase #738

**EaseMotion CSS Showcase** · `submissions/examples/global-biodiversity-ecological-protection-network-phase-738/`

A clean, nature-inspired glassmorphic UI representing a global ecological monitoring dashboard. Features CSS-simulated topographic contour maps, a radar-swept biome visualizer, and animated data charts.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/global-biodiversity-ecological-protection-network-phase-738/demo.html
```

---

## Design Theme

Ecological, nature-inspired, glassmorphic panels, and soft topographic textures.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#f0fdf4` | Soft mint background |
| `--clr-primary`| `#10b981` | Emerald Green / Main brand |
| `--clr-secondary`| `#0ea5e9` | Ocean Blue / Accents |
| `--clr-text`| `#064e3b` | High contrast emerald text |

---

## Component Breakdown

### 1. Topographic Background (CSS Patterns)
- The entire background utilizes `repeating-radial-gradient` patterns to simulate the look of topographic map contour lines.
- An overarching `breathe` keyframe slowly scales and fades the background to give a living, organic feel to the UI.

### 2. Glassmorphic UI Panels
- Main layout panels use a highly translucent white background (`rgba(255, 255, 255, 0.85)`) paired with `backdrop-filter: blur(12px)` to float cleanly over the topographic background.
- Soft green box-shadows (`--shadow-soft`) add depth without harshness.

### 3. Interactive Biome Map Visualizer
- **Radar Sweep**: A continuous `conic-gradient` overlay rotates infinitely to simulate a satellite scan of the biomes.
- **Pulsing Zones**: Dashed circular borders represent monitored biomes (e.g., Amazon, Congo, Coral Reefs) that pulse using CSS `transform: scale`.
- **Sensor Nodes**: Solid dots representing physical sensors. Alert nodes pulse red (`pulse-alert` keyframe) utilizing animated `box-shadow` rings.

### 4. Animated Data Charts
- Simple, effective bar charts built entirely with CSS. The `.m-bar` elements use a `grow-bar` keyframe (scaling on the Y-axis from `transform-origin: bottom`) to animate into place on load.

---

## File Structure

```
global-biodiversity-ecological-protection-network-phase-738/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
