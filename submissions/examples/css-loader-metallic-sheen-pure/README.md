# CSS Loader: Metallic Sheen

A premium, physical-feeling spinner utilizing complex conic gradients and multiple inset box shadows to simulate light sweeping across brushed metal.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG assets.
- **Component Architecture**: 
  - **The Metallic Gradient**: The core visual (`.metallic-ring`) relies on a highly complex `conic-gradient`. By rapidly alternating between 10 hard color stops of dark gray, mid gray, and bright white, it perfectly simulates the sharp, anisotropic light reflections characteristic of spun metal (like the bottom of a frying pan or a brushed steel knob).
  - **The Spinning Sweep**: Applying a simple 360-degree rotation animation (`metallic-spin`) to the entire ring element causes these gradient reflections to sweep around the circle, creating the illusion of a moving light source.
  - **Physical Depth**: To make the ring feel like a heavy physical object rather than a flat image, multiple `box-shadow` layers are applied. An outer `inset` shadow creates a beveled lip, while the inner `.metallic-core` div acts as a hole punch. The core applies its own heavy inner shadows to simulate depth.
  - **Counter-Rotation**: Because the entire outer ring is spinning, the inner core must apply a `metallic-spin-reverse` animation. This ensures that any directional shadows or textures applied to the center hole remain perfectly stationary relative to the page, while the metallic reflections spin around it.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`). The component aggressively swaps out its entire palette of metal colors and shadow opacities (switching from light grays and white drop-shadows to heavy slates and black inset-shadows) to ensure the metallic effect remains convincing in low-light environments.
- Fully accessible semantic structure. The decorative ring is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all rotations, locking the loader into a static metallic ring for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the metallic sheen loading animation.

## Files
- `demo.html`: The HTML structure defining the outer ring and the inner core.
- `style.css`: The styling, the complex `conic-gradient` color stops, the multi-layered `box-shadow` beveling, and the counter-rotation keyframes.
