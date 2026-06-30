# Atmospheric Carbon Capture Grid Analytics Showcase

A futuristic, dark-themed eco-tech single-page showcase demonstrating direct air capture metrics, scrubbing grids, and carbon mineralization pipelines. This contribution represents a responsive glassmorphic dashboard built using pure HTML5 and CSS3 animations.

## Project Overview

The **Atmospheric Carbon Capture Grid Analytics** showcase is a simulated industrial control center tracking carbon scrubbers, air filtration volumes, net-negative power indexes, and subterranean basalt storage injection feeds. The layout utilizes rich green, cyan, and blue neon highlights on a translucent glass baseline to present data clearly.

## Features

- **Eco-Tech Aesthetics**: A curated forest green, emerald, and glowing cyan color scheme designed to mimic clean technology interfaces.
- **Dynamic Vapor Background**: Rising atmospheric bubbles/particles simulated dynamically through hardware-accelerated CSS keyframe loops.
- **Carbon Telemetry Statistics**: Real-time KPI summaries covering capture rate, filtration volume, net-negative power parity, and total sequestration.
- **Analytics Visualization Panels**: Detailed glass cards plotting capture volatility charts (using pure CSS height variables) and active scrubber nodes.
- **Pure CSS Circular Gauges**: Conic-gradient radial loops measuring capacity progress (Adsorption, Desorption, Pressure, and Grid Efficiency) without external JavaScript.
- **Facility Telemetry Matrix**: High-contrast, interactive datatable contrasting regional arrays (Orca-1, Texas Aero-1, Zurich Sky-X).
- **Mineralization Pipeline Timeline**: Operational phases illustrating the carbon sequestration lifecycle from intake to stone crystallization.
- **Environmental Impact Metrics**: Progress bars indicating historical atmospheric PPM offsets and active volume metrics.

## Folder Structure

```text
submissions/examples/atmospheric-carbon-capture-grid-analytics-phase-1009/
├── demo.html     # Semantic HTML5 dashboard layout
├── style.css     # Modular stylesheet containing variables, styles, and keyframes
└── README.md     # Project documentation
```

## Technologies

- **HTML5**: Structured semantic layout utilizing standard elements (`<header>`, `<main>`, `<section>`, `<article>`, `<table>`, and inline `<svg>`).
- **CSS3**: Layout properties (Flexbox, Grid), custom CSS variables, and animation keyframes.
- **Google Fonts**: Integration of `Plus Jakarta Sans` (for clean labels) and `Share Tech Mono` (for data values).

## Responsive Design

The showcase dynamically reflows elements for optimal screen sizes:

- **Desktop (>1024px)**: 2-column hero with orbiting grid visual, 2-column analytics splits, 4-column progress circles, and a 5-step horizontal timeline.
- **Tablet (768px - 1024px)**: Single-column centered layouts, vertical timeline nodes, and horizontal overflow scroll parameters for comparative databases.
- **Mobile (<768px)**: Stretched layouts optimized for touch interaction, scaled typography, and stacked grid flows.

## Animations Used

Performance-tuned transitions configured via CSS keyframes:

- `fadeIn`: Fades elements into view on initialization.
- `slideUp`: Raises card blocks smoothly with customized bezier curves.
- `float`: Oscillates the central grid sphere visual to convey weightlessness.
- `pulseGlow`: Twinkles indicator signals via shadow expansion keyframes.
- `gradientShift`: Slides active highlight bands along the central grid model.
- `shine`: Sweeps a light reflections line across card faces on hover.
- `cardLift`: Elevates cards slightly while deepening drop shadows on hover.
- `glowBorder`: Outlines card parameters with glowing green highlights on hover.
- `rotateSlow`: Slowly rotates telemetry rings and scanning grids.
- `floatUp`: Rises background bubbles at offset delays to represent vapor.

## EaseMotion Compatibility

This project aligns with the core philosophy of **EaseMotion CSS**:

1. **Separated Style & Action**: Employs utility modifiers (like `.glowBorder` and `.cardLift`) to stack transitions.
2. **Reduced Motion Compatibility**: Honors system animation constraints.
3. **Pure Static Pipeline**: Uses pure HTML/CSS state behaviors without scripts or network CDNs.

## Installation

To integrate this contribution into your local EaseMotion-css setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/Hasini2706/EaseMotion-css.git
   ```
2. Navigate to the example showcase folder:
   ```bash
   cd EaseMotion-css/submissions/examples/atmospheric-carbon-capture-grid-analytics-phase-1009/
   ```

## Preview Instructions

Preview the dashboard by opening `demo.html` in any modern web browser. You can also host the folder using a local web server (e.g. `npx serve` or Live Server) to preview the dashboard with local asset paths.

## Contribution Notes

- Scoped variables prevent global style leaks.
- Focus rings are styled to maintain high-contrast keyboard navigation.
- Accessible color ratios conform to GSSOC contributor guidelines.
