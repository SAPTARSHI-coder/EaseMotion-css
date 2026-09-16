# Volumetric 3D Layer-Stack Explode Card

## What does this do?
This feature introduces a volumetric 3D card layout where internal components (background, midground visual assets, and foreground textual elements) reside on isolated spatial planes, separating fluidly along the Z-axis (depth axis) when hovered.

## How is it used?
Create a container card with `.em-layer-explode-card`, and place nested children with the `.em-layer` class alongside their depth designations (`.em-layer-bg`, `.em-layer-mid`, `.em-layer-fg`):

```html
<div class="em-layer-explode-card">
  <!-- Background Layer -->
  <div class="em-layer em-layer-bg">
    <div class="card-bg-mesh"></div>
  </div>
  
  <!-- Midground Layer (e.g. Floating graphic/icon) -->
  <div class="em-layer em-layer-mid">
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    </svg>
  </div>
  
  <!-- Foreground Layer (e.g. Text and Call-to-action) -->
  <div class="em-layer em-layer-fg">
    <h4>Deployment Grid</h4>
    <p>Multi-region stack replication.</p>
  </div>
</div>
```

## Why is this useful for EaseMotion CSS?
Static, flat components can fail to keep users engaged. Standard card designs typically hover-scale in a single flat plane. 

This component addresses this by:
- **Offering tactile depth shifts:** Translating elements forward on the Z-axis creates a realistic, physical sense of volumetric depth (like an exploded stack schematic).
- **Being extremely composable:** Developers can put anything they want (SVGs, icons, text, buttons) inside the relative depth containers, configuring custom extrusion shifts by altering CSS `translateZ` values.
- **Requiring zero JavaScript:** The entire volumetric calculation and transition loop runs natively on GPU threads using CSS transforms, maintaining a stable 60fps frame rate.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser and hover over the cards to watch the depth layers separate in 3D space.

## Contribution Notes
- Class naming was handled by the contributor (`.em-layer-explode-card`, `.em-layer-bg`, `.em-layer-mid`, `.em-layer-fg`).
- Maintainer will rename to `ease-*` convention before merging.
