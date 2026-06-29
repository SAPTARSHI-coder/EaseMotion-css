# Aurora Biome Nexus

## Overview
This submission provides a premium, responsive, one-page biodiversity intelligence interface built with plain HTML, scoped CSS, local EaseMotion utilities, and inline SVG artwork. The page is designed to feel like a real environmental monitoring platform used by conservation scientists, reserve managers, and ecological research teams.

## Features
- Large immersive hero with an animated Earth illustration, orbital telemetry, and floating status pills
- Global conservation dashboard with biodiversity statistics, protected habitat metrics, and prediction confidence panels
- Monitoring sections for wildlife migration, forests, marine ecosystems, rainforest health, coral reef recovery, satellites, and drones
- Species recovery timeline, global heatmap, environmental alerts, mission summaries, research article cards, success stories, and partner panels
- CSS-only motion including orbit drift, node pulses, animated charts, wave movement, scan sweeps, and soft heatmap breathing
- Fully self-contained visuals using inline SVG and CSS only, with no JavaScript and no external assets

## Folder Structure
```text
submissions/examples/global-biodiversity-ecological-protection-network-phase-938/
|-- demo.html
|-- style.css
`-- README.md
```

## Browser Support
Designed for current Chromium-based browsers, Firefox, and Safari with support for CSS Grid, gradients, `backdrop-filter`, and inline SVG.

## How To Open
1. Open `demo.html` directly in a modern browser.
2. No build step, local server, package install, or JavaScript runtime is required.

## Design Decisions
- Uses the required dark ecological palette exactly, with high-contrast text on dark glass surfaces for strong readability
- Keeps the layout dense and editorial so the interface feels immersive rather than sparse
- Reuses the repository's local `easemotion.css` utilities for motion and interaction while keeping all page-specific styling isolated to `style.css`
- Builds every illustration with inline SVG or CSS shapes so the page remains portable and self-contained
