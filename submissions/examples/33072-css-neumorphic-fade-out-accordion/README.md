# CSS Neumorphic Soft Fade-Out Accordion

A pure CSS animated accordion component that utilizes the modern `:has()` selector to create a "sibling fade-out" interaction. Styled specifically with **Neumorphic Soft UI** aesthetics, featuring extruded drop shadows, pressed inner shadows, and rounded pill shapes.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `grid-template-rows` transitions.
- **Fade-Out Interaction:** Uses the CSS `:has()` pseudo-class on the parent container to detect when an accordion item is active. It then dims (`opacity: 0.5`) and flattens (`box-shadow` reduction) all unselected sibling items to bring focus exclusively to the opened content.
- **Neumorphic Aesthetics:** Beautiful implementation of soft UI shadows (combining a bright top-left shadow and a dark bottom-right shadow) that morph between "extruded" and "pressed" states when interacted with.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.

## CSS Custom Properties
```css
:root {
    --fade-timing: 0.4s;
    --expand-timing: 0.5s;
    --neu-easing: cubic-bezier(0.25, 0.8, 0.25, 1);
    
    /* Neumorphic Shadow Configuration */
    --shadow-light: #ffffff;
    --shadow-dark: #a3b1c6;
}
```
