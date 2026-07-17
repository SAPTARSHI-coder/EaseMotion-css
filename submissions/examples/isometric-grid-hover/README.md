# Isometric 3D Hover Grid

## What does this do?
A premium 3D isometric card grid layout. When hovering over cards, it lifts them on the Z-axis, casts a dynamic neon-colored backdrop shadow, and runs a linear-gradient glare reflection over the card surface.

## How is it used?
Add the markup to your HTML structure:

```html
<div class="isometric-container">
    <div class="isometric-grid">
        <div class="isometric-card card-cyan">
            <div class="card-glow"></div>
            <div class="card-inner">
                <div class="card-icon">⚡</div>
                <h2 class="card-heading">Card Title</h2>
                <p class="card-text">Card description text goes here.</p>
                <span class="card-action">Learn More &rarr;</span>
            </div>
        </div>
    </div>
</div>
```

Ensure `style.css` is loaded to apply the perspective parameters, card tilt matrix configurations, and theme variables.

## Why is it useful?
It creates depth and premium visuals in features grids, service listings, or pricing tables. By relying on CSS variables and 3D transformations, it operates entirely without JavaScript or complex canvas renderers, providing hardware-accelerated layouts that automatically flatten into clean vertical stacks on smaller screen sizes.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open [demo.html](file:///c:/Users/fawaz/.cursor/projects/EaseMotion-css/submissions/examples/isometric-grid-hover/demo.html) directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
