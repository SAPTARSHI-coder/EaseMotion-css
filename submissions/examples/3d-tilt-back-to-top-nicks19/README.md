# 3D Tilt Back to Top (Dark Mode Theme)

A modern, highly interactive "Back to Top" component styled with a sleek Dark Mode aesthetic. It utilizes a tiny JavaScript snippet to track mouse position, combined with CSS 3D Transforms to create a physical, tilting card effect.

## Features

- **Perspective Tracking**: A lightweight JS event listener tracks mouse coordinates relative to the button's bounding box and maps them to CSS Custom Properties (`--tilt-x`, `--tilt-y`).
- **Z-Axis Popping**: The inner chevron icon uses `translateZ(10px)` by default, and pushes out to `translateZ(30px)` on hover, breaking out of the 2D plane and enhancing the 3D illusion.
- **Dark Mode Aesthetic**: Uses a Deep Slate (`#1e293b`) background, subtle borders, and a vibrant Cyan (`#38bdf8`) glow and stroke color on hover, reminiscent of modern developer tools and gaming interfaces.
- **Ambient Glow**: Includes an `.ease-btt-glow` element that renders a blurred radial gradient strictly behind the button face (`translateZ(-1px)`), blooming outward when hovered.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Copy the HTML structure from `demo.html`, ensuring the `.ease-3d-tilt-wrapper` has the ID expected by the JS snippet (e.g., `id="btt-tilt"`).
3. Include the small JavaScript script provided in `demo.html` to handle the coordinate tracking and CSS variable updates.

## Usage Example

```html
<div class="ease-3d-tilt-wrapper" id="btt-tilt">
  <!-- The clickable button -->
  <button class="ease-btt-btn" aria-label="Back to Top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
    
    <!-- Ambient back-glow -->
    <div class="ease-btt-glow"></div>
    
    <!-- The icon that pops out in Z-space -->
    <div class="ease-btt-icon">
      <svg>...</svg>
    </div>
    
  </button>
</div>
```

## Why it fits EaseMotion CSS

- **CSS Engine Dominance**: While JavaScript handles capturing the coordinates, the actual rendering, interpolation, and spring physics are completely offloaded to the CSS engine via `transition: transform` and `transform-style: preserve-3d`. This ensures peak performance.
- **Tactile Feedback**: The spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`) applied to the Z-axis translations makes the button feel physical and satisfying to interact with, a core tenet of EaseMotion.
