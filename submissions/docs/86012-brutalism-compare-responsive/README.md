# Brutalism Compare — Responsive

## Overview
This guide covers responsive behavior for the Brutalism Compare component.
The layout is designed to remain readable across viewport sizes.
Its bold visual language uses simple structure and strong boundaries.

## Purpose
Use this pattern for side-by-side product or option comparisons.
Keep the most important information visible at every breakpoint.
Let comparison items stack when horizontal space becomes constrained.

## Layout
The component uses a flexible grid for comparison items.
Each item receives consistent spacing and internal padding.
The layout should never require accidental horizontal scrolling.
Cards remain visually distinct through borders and spacing.

## Responsive Rules
Wide screens can display multiple comparison columns.
Medium screens can reduce the number of columns.
Small screens should stack items vertically.
Text should wrap naturally rather than being clipped.
Buttons and links should remain comfortably tappable.

## Markup
Use semantic sections for groups of comparison content.
Give each item a descriptive heading.
Keep action controls as native buttons or links.
Avoid placing interactive elements inside noninteractive labels.

## Accessibility
Responsive changes must not alter logical reading order.
Focus order should remain predictable after columns stack.
Maintain readable contrast at every breakpoint.
Do not communicate differences using color alone.

## Typography
Use scalable text sizes that remain readable on small screens.
Allow long headings to wrap instead of truncating them.
Maintain adequate line height for dense comparison content.

## Spacing
Use consistent gaps between comparison items.
Reduce decorative spacing before reducing content readability.
Keep touch targets separated on narrow screens.

## Customization
CSS variables can control borders, spacing, surfaces, and typography.
Change the breakpoint values to match the host layout.
Preserve the stacked mobile behavior after customization.

## Reduced Motion
Avoid unnecessary movement when the layout changes.
Respect `prefers-reduced-motion` for optional transitions.
The component remains functional without animation.

## Usage
Copy the markup from `demo.html` into the target page.
Link `style.css` after the project's base stylesheet.
Replace the example content with actual comparison data.

## Testing
Resize from desktop to mobile gradually.
Test long titles and descriptions.
Test browser zoom at increased levels.
Test keyboard navigation after stacking occurs.
Check that no content becomes clipped.

## Browser Support
The pattern relies on standard responsive CSS.
Modern browsers support the layout features used by the demo.
Verify the final appearance in the project's supported browsers.

## Files
`README.md` explains responsive implementation.
`demo.html` provides the complete standalone example.
`style.css` contains the responsive component styles.

## Summary
The responsive version preserves comparison clarity on every screen.
Keep structure semantic while adapting layout with CSS.
Use the demo as the baseline for future variants.
