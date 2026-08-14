# CSS Responsive Dashboard Horizontal Roll Accordion

A pure CSS animated accordion component utilizing flex-growth transitions to create a smooth "horizontal roll" expansion. Styled specifically for **Responsive Dashboard** layouts, this component acts as both a sleek side navigation menu and the main content area simultaneously.

## Features
- **Zero JavaScript:** Powered entirely by the CSS hidden radio state hack and `flex` property transitions.
- **Horizontal Roll:** Unselected items act as a vertical sidebar (`flex: 1`, dark background). The selected item expands horizontally (`flex: 8`, light background) to reveal the main dashboard view, pushing unselected items to the side.
- **Dashboard Aesthetics:** Includes styled metric cards, data tables, status badges, and settings layouts typical of modern Admin Panels.
- **Responsive Flow:** Automatically detects smaller viewports and stacks the layout vertically for a standard accordion experience on mobile devices.
- **Accessible:** Fully keyboard navigable using Tab/Space/Arrow keys with native radio button behavior.

## CSS Custom Properties
```css
:root {
    --roll-timing: 0.4s;
    --roll-easing: cubic-bezier(0.4, 0, 0.2, 1); /* Quick material ease for dashboards */
    --panel-collapsed-flex: 1; /* Width ratio when closed (sidebar state) */
    --panel-expanded-flex: 8;  /* Width ratio when open (main content state) */
}
```
