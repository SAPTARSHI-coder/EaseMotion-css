# CSS Creative Portfolio Neon Glow Accordion

A pure CSS animated accordion component utilizing an intense "Neon Glow" illumination transition synchronized with vertical grid expansion. Styled specifically for **Creative Portfolio** layouts with a Synthwave/Retrowave artistic aesthetic, focusing on large imagery, glowing typography, and vibrant color themes.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Neon Glow Interaction:** When an item is selected, the panel's typography and image wrappers smoothly transition from a dim, dormant state into a bright, glowing active state using highly customized, layered `box-shadow` and `text-shadow` properties mapped to CSS variables.
- **Creative Aesthetics:** Features a deep purple synthwave palette, large portfolio image displays that ignite with inner/outer glows, and artistic typography suitable for digital art portfolios or creative agencies.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.

## CSS Custom Properties
```css
:root {
    --glow-timing: 0.5s;
    --expand-timing: 0.6s;
    
    /* Core Neon Colors */
    --neon-pink: #ff2a85;
    --neon-cyan: #00f3ff;
    --neon-purple: #b52aff;
}
```
