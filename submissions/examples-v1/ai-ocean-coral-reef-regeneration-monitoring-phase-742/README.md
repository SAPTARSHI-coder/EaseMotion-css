# AI Ocean Coral Reef Regeneration Monitoring — Phase #742

**EaseMotion CSS Showcase** · `submissions/examples/ai-ocean-coral-reef-regeneration-monitoring-phase-742/`

A marine biology UI showcase representing an AI-driven dashboard for monitoring coral reef regeneration. Features CSS-rendered underwater caustics, floating plankton, scanning sonar rings, and growing coral polyps.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/ai-ocean-coral-reef-regeneration-monitoring-phase-742/demo.html
```

---

## Design Theme

Underwater research, Marine biology, Eco-monitoring, and Oceanic AI.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020617` | Midnight Abyss background |
| `--clr-coral`| `#fb7185` | Coral Pink / Regeneration |
| `--clr-cyan`| `#06b6d4` | Marine Cyan / Sonar & AI |
| `--clr-algae`| `#34d399` | Algae Green / Flora |
| `--clr-purple`| `#8b5cf6` | Bioluminescent Purple / Anomalies |

---

## Component Breakdown

### 1. AI Coral Polyp Analyzer (Center View)
- The `.sonar-center` uses multiple absolute-positioned `.sonar-ring` elements. They animate using the `sonar-ping` keyframe, expanding in width/height and fading out, staggered via `animation-delay` to create a continuous scanning effect.
- The `.reef-bed` acts as the base.
- `.polyp` elements grow upwards from the bottom using the `grow-polyp` keyframe (`transform-origin: bottom center`, scaling Y axis) and gently sway back and forth (`sway-polyp` keyframe). 
- The `.polyp::after` pseudo-element adds a glowing tip that pulses using the `filter-feed` keyframe.

### 2. Water Quality Metrics (Left Sidebar)
- The `.therm-bar` uses a linear gradient to represent a temperature scale, with a `.therm-marker` overlaid.
- The `.ph-graph` displays a simulated sine wave using a clever CSS technique: a wide `.ph-wave` element with a `radial-gradient` pattern set to `repeat-x` and a top border. The `ph-scroll` keyframe animates `transform: translateX()` to make the wave scroll continuously.

### 3. Oceanic Environment Background
- `body::before` creates deep water gradients fading to black.
- `body::after` simulates underwater caustics (sunlight shimmering through water) using intersecting `radial-gradient` patterns. The `caustics-sway` keyframe moves and scales these patterns to mimic water surface refraction.
- Floating `.plankton` particles drift upwards and sideways across the screen (`drift` keyframe), with randomized animation durations and positions.

---

## File Structure

```
ai-ocean-coral-reef-regeneration-monitoring-phase-742/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```
