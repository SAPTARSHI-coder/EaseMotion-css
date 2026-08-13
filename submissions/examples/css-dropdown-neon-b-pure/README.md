# Interactive Neon Dropdown (Variant B)

A cyber-aesthetic dropdown menu featuring glowing neon hover states, staggered reveal animations, and a sleek dark mode grid.

## Features
- **Neon Glitch Aesthetics**: Uses heavily layered `box-shadow` and `text-shadow` combinations to create authentic, glowing neon effects that transition smoothly on hover.
- **Color Shifting**: The trigger button dynamically shifts its glow color from Cyan to Magenta when the dropdown is activated.
- **Staggered Entry Animation**: The dropdown items slide in sequentially (staggered) utilizing CSS inline variables (`--i: 1`) combined with the `calc()` function in the `transition-delay` property.
- **Scanline Hover Effect**: Hovering over individual menu items triggers a glossy, animated scanline effect sweeping across the item using the `::before` pseudo-element.
- **Alert Variations**: Includes a specific style class (`.alert-link`) for destructive actions, featuring a harsh red neon glow.
- **Responsive**: Adapts to full width on mobile viewports for easier tap targets.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Orbitron` font is loaded in your `<head>` to maintain the cyberpunk aesthetic.
