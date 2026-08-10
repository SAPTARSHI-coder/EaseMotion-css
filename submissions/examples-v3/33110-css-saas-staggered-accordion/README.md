# CSS SaaS Staggered Entrance Accordion

A pure CSS animated accordion component utilizing dynamic `transition-delay` logic to create a sleek "staggered entrance" sequence for internal elements upon opening. Styled specifically for modern SaaS Showcase layouts, featuring glass-like gradients, soft shadows, and rounded aesthetics.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden checkbox state hack and modern Grid `1fr` transitions.
- **Staggered Entrance:** Child elements (paragraphs, lists) elegantly slide up and fade in sequentially when the accordion opens, driven by mapped `transition-delay` properties.
- **Modern CSS Features:** Utilizes the `:has()` pseudo-class to elevate the entire accordion card visually when opened.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.
- **Responsive & Fluid:** Adjusts seamlessly to varying container widths and mobile screens without recalculating animation math.

## CSS Custom Properties
```css
:root {
    --stagger-timing: 0.45s;
    --stagger-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
    --stagger-delay-step: 0.08s; /* Controls the gap between each element's entrance */
    --stagger-offset: 12px; /* Controls the distance the element travels during entrance */
}
```
