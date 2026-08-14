# Smooth 3D Hover Lift Utility (`.ease-hover-lift`)

## Description
This submission fulfills Issue #57084. It introduces a premium utility class that gives UI elements (like cards, buttons, or images) a tactile, physical feel when interacted with.

By combining `transform: translateY` with a layered, expanding `box-shadow`, the element appears to lift off the page smoothly on hover, and compress slightly when clicked.

## Features
- **Premium Easing:** The animation uses a highly tuned `cubic-bezier(0.16, 1, 0.3, 1)` curve for a buttery smooth, snappy response.
- **Hardware Accelerated:** We apply `will-change: transform, box-shadow` to ensure the browser processes the transition on the GPU, avoiding jank.
- **Active State Included:** Includes an `:active` state that compresses the element downwards slightly, mimicking a physical button press.
- **Accessible:** Respects `prefers-reduced-motion` by disabling the Y-axis translation, but keeps the shadow transition so visually impaired users still get interactive feedback without nausea.

## Files Included
- `demo.html`: A mock layout showing the utility applied to various card types.
- `style.css`: The component CSS, ready to be integrated into the core framework.
- `README.md`: This documentation.
