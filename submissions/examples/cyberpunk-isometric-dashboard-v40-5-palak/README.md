# Cyberpunk Isometric Dashboard

## What does it do?

A futuristic cyberpunk command-center dashboard built using pure HTML and CSS.

The interface combines a neon HUD-inspired design with a 3D isometric transformation and layered Z-axis elevation.

Hover over the dashboard to activate the isometric effect.

## Features

- Pure HTML and CSS.
- No JavaScript or external libraries required.
- Cyberpunk HUD-inspired interface.
- CSS perspective-based 3D transformation.
- Individual dashboard layers use `translateZ()`.
- Neon cyan, pink and purple accents.
- Network activity visualization.
- Live node status panel.
- Responsive design.
- `prefers-reduced-motion` support.
- Cyber grid and scanline background effects.

## How is it used?

Open `demo.html` in a browser and hover over the dashboard.

The dashboard rotates into an isometric perspective while individual interface sections rise along the Z-axis.

## How does it work?

The `.iso-stage` element provides the 3D perspective.

The `.dashboard` uses:

- `transform-style: preserve-3d`
- `rotateX()`
- `rotateY()`
- `rotateZ()`

On hover, the dashboard transforms into an isometric perspective.

Individual sections use different `translateZ()` values to create the layered 3D effect.

## Files

- `demo.html` — Dashboard structure and content.
- `style.css` — Styling, 3D transforms, animations and responsive behavior.
- `README.md` — Component documentation.

## Usage

Open `demo.html` directly in a modern browser.

No build step or dependencies are required.