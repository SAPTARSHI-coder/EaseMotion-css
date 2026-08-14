# CSS Interactive Interface Neon Glow Accordion

A pure CSS animated accordion component utilizing an intense "Neon Glow" illumination transition synchronized with vertical grid expansion. Styled specifically for **Interactive Interface** layouts with a Cyberpunk/Terminal aesthetic, this component focuses on multi-layered `box-shadow` and `text-shadow` ignitions.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Neon Glow Interaction:** When an item is selected, the panel's borders, typography, and status indicators smoothly transition from a dim, dormant state into a bright, glowing active state using highly customized, layered shadow properties.
- **Interactive Aesthetics:** Features a deep dark mode terminal layout, monospace typography, CSS scanline overlays, and fully styled internal dashboard components (data grids, auth forms, progress tracks) that match their parent's neon theme (Cyan, Magenta, Green).
- **Accessible:** Includes `:focus-visible` dashed outlines for keyboard navigation and ARIA-hidden structural attributes.

## CSS Custom Properties
```css
:root {
    --glow-timing: 0.4s;
    --expand-timing: 0.5s;
    
    /* Core Neon Colors */
    --neon-cyan: #0ff;
    --neon-magenta: #f0f;
    --neon-green: #0f0;
}
```
