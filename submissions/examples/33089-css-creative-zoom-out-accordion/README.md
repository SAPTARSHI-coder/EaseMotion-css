# CSS Creative Portfolio Zoom-Out Accordion

A pure CSS animated accordion component utilizing a highly cinematic "Zoom-Out" scale transition on background images. Styled specifically for **Creative Portfolio** layouts, this component focuses on large-scale imagery, bold typography, and smooth, staggered text reveals.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Zoom-Out Interaction:** Unselected items display a tightly cropped (`scale(1.25)`) background image. Upon clicking, the accordion smoothly opens vertically while the image simultaneously scales down (`scale(1)`) to reveal the full composition, creating a deep sense of parallax and space.
- **Creative Aesthetics:** Features large bold typography, dark gradients, and staggered text entrances (`transition-delay` on child elements) perfectly suited for case studies and portfolios.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.

## CSS Custom Properties
```css
:root {
    --zoom-timing: 0.8s;
    --zoom-easing: cubic-bezier(0.16, 1, 0.3, 1); /* Dramatic cinematic ease */
    --scale-zoomed-in: 1.25; /* Starting scale of the image when closed */
    --scale-zoomed-out: 1;   /* Final scale of the image when opened */
}
```
