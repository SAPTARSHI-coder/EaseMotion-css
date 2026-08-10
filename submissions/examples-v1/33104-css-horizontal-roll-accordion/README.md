# CSS Horizontal Roll Accordion

A pure CSS animated accordion component utilizing flex-growth transitions to create a smooth "horizontal roll" expansion. Styled for high-impact Interactive Interface layouts (e.g., media galleries, destination showcases).

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `flex` property transitions.
- **Horizontal Roll:** Items expand horizontally utilizing `flex: 1` to `flex: 6` transitions, while unselected siblings smoothly collapse.
- **Image Filters:** Uses CSS `filter: grayscale()` and scaling effects to draw focus dynamically to the active element.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.
- **Responsive:** Automatically stacks vertically on mobile devices for optimal UX.

## CSS Custom Properties
```css
:root {
    --roll-timing: 0.6s;
    --roll-easing: cubic-bezier(0.25, 1, 0.5, 1);
    --panel-collapsed-flex: 1; /* Width ratio when closed */
    --panel-expanded-flex: 6;  /* Width ratio when open */
}
```
