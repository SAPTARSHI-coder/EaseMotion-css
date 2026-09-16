# Neumorphic Spinner — Theming

## Overview
This guide documents theme customization for the neumorphic spinner.
The component uses CSS variables so visual values can be changed cleanly.

## Theme Tokens
Define variables for surface, shadow, highlight, accent, and size.
Keep theme values close to the component scope.
Avoid hard-coding repeated colors across multiple selectors.

## Surface
The surface controls the base neumorphic appearance.
Choose a value that contrasts with the surrounding page.

## Shadows
Use paired light and dark shadows to create depth.
Keep shadow strength moderate so the component remains clear.
Do not use shadow alone to communicate loading state.

## Accent
The accent identifies the animated spinner element.
Choose an accent that remains visible against the surface.
Check contrast when changing the accent token.

## Accessibility
Include a meaningful loading label in the markup.
If loading is dynamic, expose state changes appropriately.
Respect reduced-motion preferences for the rotation.

## Responsive Behavior
Allow the spinner to scale with its container.
Avoid fixed positioning that breaks smaller layouts.
Keep surrounding status text readable.

## Motion
The animation is decorative feedback around the loading state.
Provide a nonanimated appearance when reduced motion is requested.

## Customization
Override variables from a theme wrapper.
Adjust size for dense or spacious interfaces.
Change shadow values to match the host surface.

## Integration
Load the component stylesheet after the base stylesheet.
Use the theme wrapper to avoid changing component selectors.
Keep application loading logic separate from presentation styles.

## Testing
Check the spinner against each supported theme.
Test reduced motion.
Test small and large sizes.
Test the accessible loading label.
Check contrast after accent changes.

## Files
`README.md` documents the theme tokens.
`demo.html` demonstrates themed spinner variants.
`style.css` contains the default styling.

## Summary
The spinner is designed to be themeable without changing its structure.
Keep semantic loading information intact while adjusting the visual treatment.
Use the supplied variables as the preferred customization interface.
