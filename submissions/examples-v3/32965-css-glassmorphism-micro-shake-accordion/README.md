# CSS Glassmorphism Micro Shake Accordion

A pure CSS animated accordion component utilizing a highly requested "Micro Shake" interaction transition synchronized with vertical grid expansion. Styled specifically for **Glassmorphism UI** layouts, this component focuses on frosted glass aesthetics, background blur, and satisfying haptic visual feedback.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Micro Shake Interaction:** When an accordion panel is clicked (checked), a CSS keyframe animation (`@keyframes micro-shake-y`) is triggered on the left-hand icon circle. This provides a subtle, physical haptic-like visual feedback mechanism entirely via CSS.
- **Glassmorphism Aesthetics:** Features a fully translucent layout utilizing `backdrop-filter: blur()`, `rgba` backgrounds, and delicate white borders, perfect for modern OS-style settings panels. Includes vibrant CSS background blobs to demonstrate the frosted glass effect.
- **Accessible:** Includes clear `:focus-visible` outlines for keyboard navigation, distinct hover affordances, and aria attributes.

## CSS Custom Properties
```css
:root {
    /* Shake Animation Parameters */
    --shake-duration: 0.35s;
    --shake-easing: cubic-bezier(0.36, 0.07, 0.19, 0.97);
    --shake-distance: 4px;
    
    /* Layout Expand Parameters */
    --expand-timing: 0.4s;
    --expand-easing: cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Glassmorphism Theme */
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.15);
    --blur-amount: 16px;
}
```
