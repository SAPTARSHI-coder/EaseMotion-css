# CSS Glass Effect: Diamond Facet Edge

A hardware-accelerated, JavaScript-free glassmorphism UI element. Features complex `clip-path` polygons and multi-layered gradient borders to simulate the chamfered, reflective edges of cut glass.

## Features
- Pure CSS and HTML implementation. No SVGs or JavaScript required for the geometric shaping or the glass refractions.
- **Component Architecture**: 
  - **Ambient Mesh Background**: True glassmorphism requires a visually complex background to refract. This scene uses a beautiful, slow-moving mesh gradient created by layering four `radial-gradient` backgrounds and animating their `background-position`.
  - **The Diamond Geometry**: The `.glass-card-diamond` container and its internal elements (the icon and the button) completely reject `border-radius`. Instead, they use complex CSS `clip-path: polygon()` configurations to physically cut the corners off at exact 45-degree angles, creating a geometric "chamfered" look reminiscent of a cut diamond.
  - **The Reflective Facet Edge**: When you use `clip-path` on an element, it clips off its own `box-shadow` and standard `border`. To create the reflective edge of cut glass:
    1. A `::before` pseudo-element is placed behind the card, slightly larger (inset: -2px).
    2. It is given a sharp, diagonal `linear-gradient` that transitions from bright white to transparent.
    3. It is clipped with the *exact same* polygon shape. 
    4. *Result*: The slightly larger pseudo-element peeks out from behind the main glass panel, creating what looks like a perfectly shaped, reflective physical border catching the light.
  - **Shadow Retention Hack**: Because `clip-path` destroys `box-shadow`, depth is restored by applying a CSS `filter: drop-shadow()` to the main wrapper. `drop-shadow` perfectly conforms to the complex geometry of the clipped children.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The mesh background and glass reflections adapt dynamically to the system theme.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the ambient mesh gradient animation and the subtle pulsing of the reflective facets are disabled.

## Usage
Open `demo.html` in your browser. Observe the sharp, chamfered edges of the glass panel. Notice how the bright diagonal gradient border creates the illusion of light hitting a physically faceted edge, while the heavy `backdrop-filter` smoothly refracts the animated mesh gradient in the background.

## Files
- `demo.html`: The HTML structure defining the ambient mesh background and the geometrically faceted glassmorphism container.
- `style.css`: The styling, the multi-layered `radial-gradient` mesh logic, the complex `clip-path: polygon()` geometry, and the `drop-shadow` hacks required to maintain depth on clipped elements.
