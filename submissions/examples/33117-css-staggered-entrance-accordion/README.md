# CSS Staggered Entrance Accordion

A pure CSS animated accordion component utilizing dynamic `transition-delay` logic to create a sophisticated "staggered entrance" sequence for internal elements upon opening. Styled for an aesthetic Creative Portfolio layout.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden checkbox state hack and modern Grid `1fr` transitions.
- **Staggered Entrance:** Child elements elegantly slide up and fade in sequentially when the accordion opens, driven by purely mapped `transition-delay` properties.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.
- **Responsive & Fluid:** Adjusts seamlessly to varying container widths and mobile screens without recalculating animation math.

## CSS Custom Properties
```css
:root {
    --stagger-timing: 0.5s;
    --stagger-easing: cubic-bezier(0.25, 1, 0.5, 1);
    --stagger-delay-step: 0.1s; /* Controls the gap between each element's entrance */
    --stagger-offset: 20px; /* Controls the distance the element travels during entrance */
}
```
