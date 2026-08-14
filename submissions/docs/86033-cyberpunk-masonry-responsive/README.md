# Cyberpunk Masonry — Responsive

## Overview
This guide covers responsive behavior for the Cyberpunk Masonry layout.
The component adapts column count while preserving card readability.

## Layout
Use flexible columns and gaps for the main collection.
Reduce columns as the viewport becomes narrower.
Stack items when a multi-column layout becomes cramped.

## Mobile
Cards should use the full available content width.
Long text should wrap naturally.
Avoid fixed card heights that cause clipping.

## Tablet
Use an intermediate column count when space permits.
Keep consistent spacing between columns and rows.

## Desktop
Multiple columns can display irregular card heights.
Keep the maximum content width controlled for readability.

## Accessibility
Responsive layout changes should not alter reading order.
Use semantic headings inside cards.
Keep focus order predictable.
Do not hide card content at smaller breakpoints.

## Styling
Use borders and glow accents for the cyberpunk aesthetic.
Keep decorative effects separate from semantic information.
Maintain strong text contrast against dark surfaces.

## Reduced Motion
Respect `prefers-reduced-motion` for glow and transition effects.
The layout remains complete without animation.

## Customization
Use variables for colors, borders, gaps, and surfaces.
Adjust breakpoints to match the host layout.
Keep mobile stacking as the safe fallback.

## Usage
Copy the markup from the demo.
Link the stylesheet and replace sample card content.
Test inside the actual parent container.

## Testing
Test narrow phones.
Test tablets.
Test desktop widths.
Test long card content.
Test keyboard navigation.
Test reduced motion.

## Browser Support
The layout uses standard CSS grid and responsive media queries.
Modern browsers support the intended behavior.

## Files
`README.md` documents responsive behavior.
`demo.html` provides the standalone masonry page.
`style.css` contains the responsive styling.

## Summary
The responsive masonry layout keeps irregular cards usable at every width.
Let content determine the final column arrangement.
Use the supplied demo as the integration baseline.
