# Cyberpunk Masonry — Quickstart

## Overview
This quickstart introduces a cyberpunk masonry content layout.
It is useful for galleries, dashboards, and irregular card collections.

## Purpose
Use the layout when cards have different content heights.
Keep each item meaningful without relying on decorative effects.

## Markup
Use a semantic container for the collection.
Give each item a descriptive heading.
Keep links and buttons native and keyboard accessible.

## Layout
The masonry presentation uses flexible columns and consistent gaps.
Items should remain readable when the column count changes.
Avoid fixed heights that clip card content.

## Styling
The cyberpunk visual language can use strong borders and accent glows.
Keep text contrast high against dark surfaces.
Treat glow effects as decoration rather than information.

## CSS Variables
Expose surface, border, accent, spacing, and shadow values.
Override variables within a component theme when needed.

## Accessibility
Use logical heading order inside cards.
Provide descriptive link names.
Keep focus indicators visible.
Do not use color alone to distinguish categories.

## Responsive Behavior
Reduce the number of columns as the viewport narrows.
Allow cards to stack naturally on small screens.
Avoid horizontal overflow.

## Reduced Motion
Disable decorative glow transitions when reduced motion is requested.
The masonry layout remains functional without animation.

## Usage
Copy the demo structure into the target page.
Load `style.css` after base styles.
Replace sample cards with project content.

## Customization
Change variables to match the host cyberpunk palette.
Adjust column widths and gaps for the target content density.
Keep card semantics intact.

## Testing
Test different card lengths.
Test mobile and desktop widths.
Test keyboard navigation.
Test focus visibility.
Test reduced motion.

## Browser Support
The example uses standard HTML and CSS.
Modern browsers support the responsive layout features used here.

## Files
`README.md` contains this quickstart.
`demo.html` contains the standalone masonry example.
`style.css` contains the presentation rules.

## Summary
The masonry layout combines irregular content with a structured responsive grid.
Keep the visual effects secondary to content clarity.
Use the demo as the integration starting point.
