# Atmospheric Carbon Capture Grid Analytics Showcase

> **Issue:** [#1009](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/1009)

## What does this do?

This is a futuristic, interactive single-page dashboard monitor for tracking global atmospheric carbon capture turbines, gas sensors, sequestration storage pools, and credit analytics entirely through HTML5 and CSS3.

## How is it used?

The showcase integrates the EaseMotion CSS library animations directly on HTML components using standard classes:

```html
<link rel="stylesheet" href="../../easemotion.css" />
<!-- Showcase tags using the animation utility classes -->
<header class="topbar ease-slide-in-from-top">...</header>
<section class="hero-card ease-fade-in">...</section>
<div class="metric-card ease-slide-up">...</div>
```

## Why is it useful?

It demonstrates how complex eco-tech dashboard visuals, high-fidelity circular conic-gradient gauges, comparison tables, and progress indicators can be built at 60fps without the need for JavaScript, reinforcing EaseMotion's core philosophy of building lightweight, performant, and accessible motion stylesheets.

## Features

- **Active Capture Turbine Schematic:** SVG visualizer mapping turbine cores with rotating fan blades and animated grid line flow paths.
- **Facility Grid Diagnostic Boards:** Cards detailing Nordic, Pacific, Sahara, Amazon, Siberian, and Oceanic arrays with status indicators.
- **CO₂ Capture Statistics Grid:** Six animated diagnostics cards for Capture Rate, Turbine Velocity, Storage Pressure, Filter Saturation, Grid Efficiency, and Carbon Credits.
- **Air Quality Gauges:** CSS-only circular conic-gradient progress indicators displaying AQI, PM2.5, and humidity levels.
- **Storage Analytics Charts:** A CSS-only bar graph showing daily sequestration volume in kilotons with interactive tooltips.
- **Environmental Impact Metrics:** Panels displaying net global cooling offset ratios, credit indexes, and grid security state.
- **Facility Comparison Benchmarks:** Responsive HTML compare table highlighting design capacity, current output, and active efficiency ratios.
- **Operational Timeline logs:** Daily logs showing calibration events, sensor flushes, and grid synchronizations.
- **Manual Calibrations CTAs:** Glassmorphic override center providing clear control buttons.
- **Responsive Layout:** Adaptive styling using CSS Grid and flex structures to maintain aesthetic consistency across screen form-factors.

## Folder Structure

```
submissions/examples/atmospheric-carbon-capture-grid-analytics-phase-1009/
├── demo.html    # Showcase markup and turbine rotor SVG
├── style.css    # Color tokens, visual templates, and custom CSS animations
└── README.md    # Documentation and usage guide
```

## Responsive Design

- **Desktop (Default):** Dual-column grid layouts for charts and gauges, side-by-side lists, and centered SVG turbine visualizers.
- **Tablets (≤ 1024px):** Reflows columns to single stacks, rescales radial orbit shapes, and adjusts stats grid counts.
- **Mobile (≤ 768px):** Adapts navigation bars, transitions circular progress panels to vertical lists, centers headers, and modifies table widths.

## EaseMotion Animations Used

- `ease-slide-in-from-top`: Applied to the main Sentinel header.
- `ease-fade-in`: Applied to the hero showcase card, comparison table, timeline, CTA panel, and footer.
- `ease-slide-up`: Applied to the six CO₂ capture statistics cards with custom staggered delays.

## Technologies

- HTML5 (Semantic elements)
- CSS3 (Variables, Grid, Flexbox, Keyframes, Custom Properties, SVGs)
- EaseMotion CSS (Core utility animation rules)

## Installation & Preview Instructions

1. Clone the repository.
2. Navigate to: `submissions/examples/atmospheric-carbon-capture-grid-analytics-phase-1009/`
3. Open `demo.html` in any web browser of your choice. No server, package manager, or compilation step is needed.

## Browser Compatibility

- Google Chrome (v85+)
- Mozilla Firefox (v80+)
- Safari (v14+)
- Microsoft Edge (v85+)
- Opera (v70+)

## Author

Open-source contribution to EaseMotion CSS.
