# CSS Minimalist Tech Micro Shake Accordion

A pure CSS animated accordion component utilizing a highly requested "Micro Shake" interaction transition synchronized with vertical grid expansion. Styled specifically for **Minimalist Tech** layouts, this component focuses on clean API documentation aesthetics, utilizing whitespace, monospace typography, and stark borders.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Micro Shake Interaction:** When an accordion panel is clicked (checked), a CSS keyframe animation (`@keyframes micro-shake`) is triggered on the right-hand icon cluster. This provides a subtle, haptic-like visual feedback mechanism entirely via CSS.
- **Minimalist Tech Aesthetics:** Features a highly legible, clean layout ideal for system configurations, API documentation, or technical dashboards. Uses native system font stacks, `ui-monospace`, and stark monochromatic borders with subtle semantic color accents.
- **Accessible:** Includes clear `:focus-visible` outlines for keyboard navigation, distinct hover affordances, and semantic HTML structure.

## CSS Custom Properties
```css
:root {
    /* Shake Animation Parameters */
    --shake-duration: 0.4s;
    --shake-easing: cubic-bezier(0.36, 0.07, 0.19, 0.97);
    --shake-distance: 3px;
    
    /* Layout Expand Parameters */
    --expand-timing: 0.3s;
    --expand-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```
