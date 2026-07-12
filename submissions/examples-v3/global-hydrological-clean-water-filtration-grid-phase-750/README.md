# Global Hydrological Clean Water Filtration Grid — Phase #750

**EaseMotion CSS Showcase** · `submissions/examples/global-hydrological-clean-water-filtration-grid-phase-750/`

An eco-tech UI showcase representing a global clean water filtration network dashboard. Features a central CSS-rendered filtration tank with liquid wave animations, rising bubbles, and simulated water flow indicators.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/global-hydrological-clean-water-filtration-grid-phase-750/demo.html
```

---

## Design Theme

Eco-tech, Water filtration, Global sustainability, and Liquid UI.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#0f172a` | Deep Ocean Blue background |
| `--clr-aqua`| `#06b6d4` | Aqua Blue / Primary UI & Water |
| `--clr-green`| `#10b981` | Filtration Green / Optimal Status |
| `--clr-white`| `#f8fafc` | Pure Water White / Text & Highlights |

---

## Component Breakdown

### 1. Main Filtration Tank (Center View)
- The `.tank-container` holds the liquid level.
- `.tank-liquid` represents the water, styled with a vertical linear gradient.
- The top surface of the liquid uses a pseudo-element (`::before`) with a radial-gradient and the `wave-surface` keyframe (scaling and translating horizontally) to simulate a gentle sloshing wave.
- `.bubble` elements are scattered at the bottom. They use the `rise` keyframe to float upward, scaling up and fading out as they reach the top. CSS variables (`--dur`) and `animation-delay` randomize their movement.

### 2. Regional Grid Nodes (Left Sidebar)
- Displays network nodes. The active node has an animated `.n-flow` bar.
- The `.n-fill` bar represents water flow. Its `::after` pseudo-element uses a striped `linear-gradient` set to 45 degrees, which is animated via `background-position` (`flow-stripe` keyframe) to create a continuous flowing water effect inside the bar.

### 3. Purity & Contaminants (Right Sidebar)
- Shows water purity metrics.
- The `.c-filter` bars act as a visual representation of the filtration process, showing the percentage of contaminants blocked versus clean water passing through.

### 4. Liquid Gradient & Rain Background
- `body::before` creates large, soft radial gradients in aqua and green to set the atmospheric tone.
- `body::after` creates a subtle falling rain/droplet effect using a repeating vertical linear gradient, animated via `background-position` (`rain-fall` keyframe).

---

## File Structure

```
global-hydrological-clean-water-filtration-grid-phase-750/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
