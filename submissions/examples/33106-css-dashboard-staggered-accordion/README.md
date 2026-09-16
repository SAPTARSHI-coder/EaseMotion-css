# CSS Dashboard Analytics Staggered Entrance Accordion

A pure CSS animated accordion component utilizing dynamic `transition-delay` logic to create a snappy "staggered entrance" sequence for internal data elements upon opening. Styled specifically for modern Dashboard Analytics layouts featuring dark mode aesthetics, neon accents, and data-viz styled metric cards.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden checkbox state hack and modern Grid `1fr` transitions.
- **Staggered Entrance:** Child elements (metric cards, charts) elegantly slide up and scale in sequentially when the accordion opens, driven by mapped `transition-delay` properties.
- **Modern CSS Features:** Utilizes the `:has()` pseudo-class to elevate and highlight the entire accordion card visually when opened.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.
- **Responsive & Fluid:** Adjusts seamlessly to varying container widths and mobile screens, automatically reflowing the CSS Grid `stats-grid`.

## CSS Custom Properties
```css
:root {
    --stagger-timing: 0.5s;
    --stagger-easing: cubic-bezier(0.2, 0.8, 0.2, 1); /* Dashboard snappy ease */
    --stagger-delay-step: 0.08s; /* Controls the gap between each card's entrance */
    --stagger-offset: 15px; /* Controls the distance the card travels during entrance */
}
```
