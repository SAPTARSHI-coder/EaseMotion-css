# Interactive Card

Documentation and standalone usage guide for issue #78684.

## Overview

The Interactive Card is a reusable content surface with subtle interaction feedback.
It can present features, products, profiles, dashboard items, or linked resources.
Hover and focus states add depth without hiding essential information.
The component is designed to remain readable across different viewport sizes.
Its structure can be used for both informational and fully interactive cards.

## Features

- Responsive card grid.
- Clear hover and keyboard focus treatment.
- Flexible content structure.
- Native action links.
- Subtle elevation and movement.
- Reduced-motion support.
- No external component dependency.

## Demo

Open `demo.html` in a modern browser to preview the card examples.
Each example includes a heading, supporting description, and action.
Move the pointer over a card to inspect its interactive treatment.
Use Tab to verify that keyboard focus receives equivalent visual feedback.
Resize the viewport to observe the responsive card arrangement.

## Usage

Use an `<article>` when the card represents a self-contained content item.
Use an anchor as the primary interactive element when the entire card navigates.
Keep the primary action identifiable and descriptive.
Do not make hover behavior necessary for understanding the content.
Link `style.css` through the host project's normal stylesheet pipeline.
Reuse the same structure when adding additional cards.

## Accessibility

Keyboard focus receives the same important visual treatment as pointer interaction.
Native links provide expected browser and assistive-technology behavior.
Card content remains readable without animation.
Hover-only information should never contain essential content.
Reduced-motion preferences remove unnecessary movement.
Maintain sufficient contrast between text, surface, and interactive states.

## Responsive Behavior

The card layout uses flexible columns on wider screens.
The number of columns decreases as available width becomes limited.
Cards remain readable when stacked on smaller screens.
Gaps are adjusted to prevent excessive whitespace on mobile layouts.
Long headings and descriptions wrap naturally inside each card.

## Customization

Adjust card padding to control content density.
Change border radius values to match the surrounding visual language.
Modify shadows to control the perceived elevation.
Update hover movement while keeping it subtle.
Change grid columns and gaps to fit the host container.
Keep focus styling visible when changing hover effects.

## Implementation Notes

The HTML keeps content and actions semantically meaningful.
CSS provides the grid, surface treatment, hover response, and responsive behavior.
The demo can be opened directly without a build process.
The component can be used as a standalone card or repeated inside a grid.
The structure can be adapted to application-specific data without a framework dependency.

## File Structure

- `demo.html` — expanded interactive card demonstration.
- `style.css` — card interaction and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard HTML, CSS grid, transitions, transforms, and media queries.
The content remains useful when decorative interaction effects are unavailable.

## Testing Checklist

- Verify every primary action is keyboard accessible.
- Confirm focus styling is visible without a pointer.
- Check that essential content is visible before interaction.
- Resize the viewport and inspect card stacking.
- Enable reduced-motion and verify movement is removed or simplified.
- Check text and action contrast across card states.

## Reuse

Replace the example copy, labels, and links with project-specific content.
Keep the primary action clear and avoid adding unnecessary interaction layers.
Follow repository contribution and licensing conventions when reusing the example.
