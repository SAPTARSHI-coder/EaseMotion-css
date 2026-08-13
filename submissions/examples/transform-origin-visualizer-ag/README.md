# CSS Transform Origin Visualizer

## Description
An interactive demo demonstrating how the CSS `transform-origin` property establishes the anchor point or pivot of rotation transformations on an element.

## What transform-origin Does
By default, standard 2D/3D visual transforms (like rotation, scaling, or skewing) pivot around the exact center of an element (`50% 50%` or `center`). The `transform-origin` property allows developers to change this pivot point to any corner, edge, or arbitrary coordinate (using keywords, percentages, or absolute lengths), shifting how the kinematics of the motion look.

## How the Demo Works
- Select any of the preset button coordinates: **Center**, **Top Left**, **Top Right**, **Bottom Left**, or **Bottom Right**.
- A glowing red marker indicates the pivot coordinates.
- Click the **Rotate Element** button to trigger a 360-degree rotation animation.
- Observe how the element spins around the glowing marker. The code snippet below updates in real-time to show the corresponding CSS layout rules.

## Code Usage Example
Define your rotation and apply the custom `transform-origin` to pin the pivot:

```html
<div class="needle pivot-bottom"></div>
```

```css
.needle {
  width: 10px;
  height: 100px;
  background: #6366f1;
  animation: swing 3s ease-in-out infinite alternate;
}

/* Change origin to pin the needle at the bottom center */
.pivot-bottom {
  transform-origin: bottom center; /* Equivalent to 50% 100% */
}

@keyframes swing {
  0% { transform: rotate(-30deg); }
  100% { transform: rotate(30deg); }
}
```

## Why this is Useful for Learning
Transform origin is key to creating realistic structural physics and natural interactions (e.g. gauge dials, doors opening, swinging pendulums, clock hands, folding drawers, or scaling tooltips from their source). Visualizing the pivot point helps developers build intuition for coordinate grids and relative motion paths.

## Tech Stack
- HTML5
- CSS3 (Gradients, keyframes, transitions, `:focus-visible`, prefers-reduced-motion swing fallback)
- Minimal JavaScript (for tab clicks, setting preset classes, updating code snippets, and triggering reflow replays)

## Preview
Open [demo.html](demo.html) directly in any web browser to see it in action.
