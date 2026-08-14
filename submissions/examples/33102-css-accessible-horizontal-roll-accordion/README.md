# CSS Accessible Horizontal Roll Accordion

A pure CSS animated accordion component utilizing flex-growth transitions to create a smooth "horizontal roll" expansion. Styled specifically with **Accessible Web Aesthetics**, focusing on high contrast, robust focus states, legible typography, and semantic flow.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `flex` property transitions.
- **Horizontal Roll:** Items expand horizontally utilizing `flex: 1` to `flex: 4` transitions, while unselected siblings smoothly collapse to make room.
- **Accessible Design:** 
  - Meets high contrast ratio requirements for text against backgrounds.
  - Implements thick, highly visible `:focus-visible` outlines ensuring keyboard users always know their position.
  - Uses large tap targets (`min-height: 44px`) on all interactive elements.
- **Responsive Flow:** Automatically detects smaller viewports and stacks the horizontal layout vertically for an optimal, scrolling reading experience.

## CSS Custom Properties
```css
:root {
    --roll-timing: 0.5s;
    --roll-easing: cubic-bezier(0.4, 0, 0.2, 1);
    --panel-collapsed-flex: 1; /* Width ratio when closed */
    --panel-expanded-flex: 4;  /* Width ratio when open */
}
```
