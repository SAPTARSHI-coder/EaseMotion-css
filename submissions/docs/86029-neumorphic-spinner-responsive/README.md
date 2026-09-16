# Neumorphic Spinner — Responsive

## Overview
This guide covers responsive use of the neumorphic spinner.
The component remains visually centered and readable across screen sizes.

## Layout
Place the spinner inside a flexible container.
Use relative sizing for decorative dimensions where appropriate.
Keep status text close to the spinner without forcing overlap.

## Mobile
Use a smaller spinner size when space is limited.
Keep the loading label readable.
Avoid fixed widths that can cause overflow.

## Desktop
Use the available space without creating excessive decorative scale.
Keep the spinner aligned with its surrounding content.

## Accessibility
The loading state should have a meaningful accessible label.
Do not make users depend on animation to understand the state.
Respect reduced-motion preferences.

## Motion
Disable or simplify rotation when reduced motion is requested.
The loading state should remain visible without animation.

## Customization
Use CSS variables for size, surface, accent, and shadow values.
Adjust responsive sizes through media queries or container rules.
Keep the semantic markup unchanged.

## Usage
Copy the demo markup into the target page.
Link the stylesheet and replace sample text with application-specific status text.
Control the spinner's visibility from the application's loading state.

## Testing
Test phone widths.
Test tablet widths.
Test desktop widths.
Test long loading labels.
Test reduced-motion preferences.
Test high browser zoom.

## Browser Support
The component relies on standard responsive CSS.
Modern browsers support the layout and animation features used here.

## Files
`README.md` explains responsive behavior.
`demo.html` provides the complete example.
`style.css` contains responsive component rules.

## Summary
The responsive spinner keeps loading feedback compact and readable.
Scale decoration before sacrificing text clarity.
Use the demo as the baseline for integration.
