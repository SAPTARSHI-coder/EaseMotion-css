# CSS Product Catalog Staggered Entrance Accordion

A pure CSS animated accordion component utilizing dynamic `transition-delay` logic to create a snappy "staggered entrance" sequence for internal product details upon opening. Styled specifically for modern E-commerce/Product Catalog layouts.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden checkbox state hack and modern Grid `1fr` transitions.
- **Staggered Entrance:** Child elements (specs, reviews, descriptions) elegantly slide up and fade in sequentially when the accordion opens, driven by mapped `transition-delay` properties.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.
- **Responsive & Fluid:** Adjusts seamlessly to varying container widths and mobile screens without recalculating animation math.

## CSS Custom Properties
```css
:root {
    --stagger-timing: 0.4s;
    --stagger-easing: cubic-bezier(0.16, 1, 0.3, 1); /* Snappy e-commerce ease-out */
    --stagger-delay-step: 0.05s; /* Controls the gap between each element's entrance */
    --stagger-offset: 15px; /* Controls the distance the element travels during entrance */
}
```
