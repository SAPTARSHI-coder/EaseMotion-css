# CSS Mesh Gradient: Metallic Sheen

A collection of hardware-accelerated, JavaScript-free CSS gradients simulating polished metal, chrome reflections, and liquid gold.

## Features
- Pure CSS and HTML implementation. No WebGL or SVG required for the metallic lighting effects.
- **Component Architecture**: 
  - **Liquid Gold Button**: A button that simulates flowing molten gold. It utilizes a wide `linear-gradient` (`background-size: 400% 100%`) filled with contrasting yellow, brown, and bright white stops. An infinite `@keyframes` animation shifts the `background-position`, creating a continuous flowing reflection. A subtle inset `box-shadow` provides a physical 3D bevel.
  - **Brushed Steel Panel**: An interactive card that sweeps a reflection across its surface. It uses an absolute-positioned `.reflection-layer` that sits above the card content (`pointer-events: none`). This layer contains a sharp, angled `linear-gradient` (mostly transparent with stark white stripes). On `:hover`, the `background-position` transitions across the card, perfectly mimicking a light source reflecting off brushed steel as you move your head.
  - **Chrome Sphere Focus**: A pure CSS 3D sphere. It relies entirely on layered `radial-gradient` and `linear-gradient` properties within the `background`. By combining a sharp white specular highlight (radial), a dark artificial horizon line (linear), and a grey base tone (radial), it fakes a complex environmental reflection on a curved surface.
- **Theming**: Configured via CSS Custom Properties. The metallic palettes (Steel and Gold) are defined as complex `linear-gradient` variables at the root level, making them reusable across backgrounds and text masking.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the continuous flowing animations and the hover sweep transitions for users who prefer less motion, defaulting to static metallic textures.

## Usage
Open `demo.html` in your browser to view the gallery of metallic gradients. Observe the continuous flowing reflection on the Liquid Gold Button, hover the Brushed Steel Panel to trigger the light sweep, and inspect the complex radial geometry of the Chrome Sphere.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 metallic UI components.
- `style.css`: The styling, the complex multi-stop `linear-gradient` definitions, the text-masking techniques, and the `background-position` sweep animations.
