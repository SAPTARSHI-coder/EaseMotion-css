# Interactive Fluid-Gradient Masked Typography

## What does this do?
This feature introduces a hover-responsive typography mask effect where a multi-stop radial gradient background shifts, zooms, and rotates inside display text outlines, creating an organic fluid color swirl.

## How is it used?
Wrap display text inside a container using `.em-masked-text-container`, and apply the `.em-masked-text-glow` class along with a layout theme (e.g. `.theme-cosmic`, `.theme-forest`, `.theme-solar`):

```html
<div class="em-masked-text-container">
  <h1 class="em-masked-text-glow theme-cosmic" data-text="Cosmic Space">
    Cosmic Space
  </h1>
</div>
```

## Why is this useful for EaseMotion CSS?
Static text highlights can fail to keep users engaged. Gradient text animations often rely on linear infinite scroll loops which can feel repetitive.

This component improves typography layouts by:
- **Interactive focal coordinate shifting:** The gradient scales and moves based on hover transitions, creating a tactile, fluid response to pointer interaction.
- **Being completely self-contained:** It uses CSS radial-gradient mapping, requiring zero external JPEG/PNG image resources or heavy vector shapes.
- **Zero JavaScript overhead:** The entire clipping mask transition runs on browser compositor threads, ensuring high-performance 60fps execution.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser and hover over the headers to watch the gradient colors flow.

## Contribution Notes
- Class naming was handled by the contributor (`.em-masked-text-container`, `.em-masked-text-glow`, `.theme-cosmic`, etc.).
- Maintainer will rename to `ease-*` convention before merging.
