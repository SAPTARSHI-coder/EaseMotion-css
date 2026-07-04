# Neuromorphic Chip Semiconductor Factory Monitor Showcase

> **Issue:** [#1013](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/1013)

## What does this do?

This is a futuristic, interactive single-page dashboard monitor for a Neuromorphic Chip Semiconductor Factory, utilizing modern CSS Grid, Flexbox, glassmorphic layout principles, and hardware-accelerated, pure-CSS animations to visualize real-time factory telemetry.

## How is it used?

The showcase demonstrates EaseMotion CSS utility classes directly on HTML elements. You include the library stylesheet and declare animation classes on your components:

```html
<link rel="stylesheet" href="../../easemotion.css" />
<!-- Example elements utilizing EaseMotion utility classes -->
<header class="topbar ease-slide-in-from-top">...</header>
<section class="hero-card ease-fade-in">...</section>
<div class="metric-card ease-slide-up">...</div>
```

## Why is it useful?

It fits EaseMotion's philosophy of delivering highly performant, lightweight, and accessible CSS-only motion designs. By achieving interactive visual feedback, glowing semiconductor diagrams, and progress indicators without using any JavaScript, it exemplifies how developers can build rich, high-fidelity interfaces that remain performant and respect accessibility preferences (e.g. `prefers-reduced-motion`).

## Features

- **Large Glowing Neuromorphic Chip Visualizer:** An interactive, animated SVG schematic showcasing concentric rings, radial lines, glowing circuit nodes, rotating core elements, and flowing electric packet animations.
- **Live Statistics Cards:** Six detailed tracking panels for Yield Rate, Temperature, Wafer Count, Neural Cores, Factory Health, and Power Usage, styled with custom floating physics, hover lift, and neon border glows.
- **Production Pipeline Workflow:** A horizontal workflow representation that automatically transitions to a vertical stream on mobile viewports, featuring flowing neon lasers and pulsing active nodes.
- **Fabrication Units Grid:** Diagnostics cards for FAB-01 to FAB-06 containing load ratings, status badges, and animated progress bars.
- **Performance Telemetry:** Clean diagnostics list featuring CPU, Power, Temperature, Efficiency, and Production Speed progress loaders overlaid with linear shimmer gradients.
- **Facility Alert Logs:** Styled system alerts signaling cooling, voltages, and quantum validation states.
- **Modern Responsive Aesthetics:** Deep space neon background grid, backdrop filters, clamp-based responsive typography, and mobile-friendly grids.

## Folder Structure

```
submissions/examples/neuromorphic-chip-semiconductor-factory-monitor-phase-1013/
├── demo.html    # Showcase markup and SVG layout
├── style.css    # Color tokens, visual styling, and custom keyframe animations
└── README.md    # Documentation and usage guide
```

## Responsive Design

- **Desktop (Default):** Multi-column split grid with centered hero visualizer, inline stat grids, horizontal workflow, and dual-column monitoring.
- **Tablets (≤ 1024px):** Reflows columns to single stack, adjusting SVG scaling and statistics grid count.
- **Mobile (≤ 768px):** Adapts navigation bars, shrinks metrics grid to vertical panels, transitions production pipeline from horizontal to vertical flow, and disables hover transformations on touch viewports for native-like interactions.

## EaseMotion Animations Used

- `ease-slide-in-from-top`: Applied to the main application header.
- `ease-fade-in`: Applied to the hero showcase card, pipeline container, factory grids, and footer.
- `ease-slide-up`: Applied to the six live statistics cards with staggered custom delays.

## Technologies

- HTML5 (Semantic elements)
- CSS3 (Variables, Grid, Flexbox, Keyframes, Custom Properties, SVGs)
- EaseMotion CSS (Core utility animation rules)

## Installation & Preview Instructions

1. Clone the repository locally.
2. Navigate to: `submissions/examples/neuromorphic-chip-semiconductor-factory-monitor-phase-1013/`
3. Double-click or open `demo.html` in any web browser of your choice. No build tools, servers, or packages are needed.

## Browser Compatibility

- Google Chrome (v85+)
- Mozilla Firefox (v80+)
- Safari (v14+)
- Microsoft Edge (v85+)
- Opera (v70+)

## Author

Open-source contribution to EaseMotion CSS.
