# Holographic Pricing Cards (Ultimate Edition)

A massive, premium, enterprise-grade pricing tier component. This submission goes beyond a simple CSS layout by injecting complex HTML5 Canvas rendering, Lerp-based momentum physics, and deeply interactive UI elements.

## Features Included

- **Interactive Node Network**: An HTML5 `<canvas>` background that renders glowing particles and connecting lines. The particles intelligently dodge the user's cursor.
- **Momentum 3D Physics**: Javascript tracks the mouse position and uses Linear Interpolation (Lerp) to apply a smooth, weighty 3D `rotateX` and `rotateY` tilt to the cards.
- **Dynamic Billing Engine**: A custom CSS toggle switch allows users to flip between "Monthly" and "Annually". Javascript dynamically animates and updates the prices based on `data-` attributes.
- **Holographic Box Illusion**: Extreme CSS parallax! Geometric shapes are placed inside the card with huge `translateZ()` values. As the card tilts, these blurred shapes parallax independently, creating a "hologram in a box" illusion.
- **Expandable Accordions**: Clean, animated CSS/JS dropdowns for long feature lists.
- **Physical Foil Texture**: A `mix-blend-mode` overlay utilizing complex `repeating-linear-gradient` scanlines to simulate authentic, physical iridescent foil reflecting a spotlight.

## How it works

1. **The Grid Background**: Pure CSS using masked linear gradients to create a wireframe floor that moves endlessly.
2. **The 3D Tilt**: Javascript calculates the mouse's offset from the center of the `.holographic-card`. It limits the rotation to a subtle `4deg` max. The `requestAnimationFrame` loop continually eases the card's current rotation toward the target rotation, creating a beautiful spring/momentum effect.
3. **The Glare Spotlight**: Javascript sets `--mouse-x` and `--mouse-y` CSS variables on the card. The `.glare` and `.foil` layers use these variables in their `radial-gradient` definitions so the light perfectly follows the cursor.
