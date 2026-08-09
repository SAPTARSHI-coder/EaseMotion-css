# CSS SaaS Showcase Horizontal Roll Accordion

A pure CSS animated accordion component utilizing flex-growth transitions to create a smooth "horizontal roll" expansion. Styled specifically with **SaaS Showcase** aesthetics, featuring crisp typography, soft drop shadows, subtle gradients, and clean iconography.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `flex` property transitions.
- **Horizontal Roll:** Items expand horizontally utilizing `flex: 1` to `flex: 5` transitions, while unselected siblings smoothly collapse.
- **SaaS Aesthetics:** Features modern design patterns including dynamic background gradients (`linear-gradient(135deg, white 0%, var(--accent-bg) 100%)`) that reveal themselves upon expansion.
- **Accessible:** Includes `:focus-visible` outlines for keyboard navigation and ARIA-hidden structural attributes.
- **Responsive:** Automatically detects smaller viewports and stacks the horizontal layout vertically for an optimal mobile experience.

## CSS Custom Properties
```css
:root {
    --roll-timing: 0.5s;
    --roll-easing: cubic-bezier(0.2, 0.8, 0.2, 1); /* Sleek SaaS ease-out */
    --panel-collapsed-flex: 1; /* Width ratio when closed */
    --panel-expanded-flex: 5;  /* Width ratio when open */
}
```
