# Sticky Stacked Cards Component

Resolves Issue #59859.

This submission implements a modern stacked cards layout pattern built entirely with pure CSS. As the user scrolls down, individual cards stick to the top of the viewport and beautifully stack on top of one another.

## Implementation Details
- **`style.css`**: Utilizes `position: sticky` on the `.ease-stacked-card` elements to lock them into place. A customizable CSS variable `--stack-offset` manages the incremental vertical spacing. Furthermore, if the browser supports `animation-timeline: view()`, a scroll-driven animation applies a subtle scale-down and darken effect to lower cards as higher cards overlap them, simulating 3D depth.
- **`demo.html`**: Provides a semantic and accessible markup structure to demonstrate the feature with varied offset values.

## Integration
Once the core directory contribution freeze is lifted, these styles can be migrated to `components/stacked-cards.css`.
