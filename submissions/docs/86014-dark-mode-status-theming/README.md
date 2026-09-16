# Dark Mode Status — Theming

## Overview
This guide explains how to theme the Dark Mode Status component.
The component separates structure from presentation through CSS variables.
It is suitable for dark dashboards and application interfaces.

## Theme Tokens
Use custom properties for the component surface and foreground.
Define an accent token for the active status indicator.
Use separate tokens for muted text and borders.
Keep tokens scoped to the component when possible.

## Recommended Tokens
`--status-surface` controls the component background.
`--status-text` controls primary text.
`--status-muted` controls secondary text.
`--status-accent` controls the active indicator.
`--status-border` controls the component boundary.

## Color States
Create clear positive, warning, neutral, and inactive states.
Give every state a textual label.
Do not depend on color as the only state signal.
Check contrast after changing any token.

## Markup
Keep semantic labels in the HTML.
Use modifier classes for intentional variants.
Do not place theme-specific meaning only in pseudo-elements.
Interactive controls should remain native buttons or links.

## Dark Mode
Use a sufficiently dark surface without eliminating contrast.
Use lighter text for primary information.
Keep muted text readable against the dark surface.
Use subtle borders to define component boundaries.

## Accessibility
Check normal text and status indicators for contrast.
Ensure status changes are understandable without color perception.
Use live announcements only for meaningful dynamic changes.
Keep focus indicators visible for interactive controls.

## Responsive Behavior
Allow the component to fit narrow containers.
Let longer status text wrap naturally.
Maintain comfortable spacing around indicators and controls.

## Reduced Motion
Treat animation as decorative rather than essential.
Respect `prefers-reduced-motion` for status transitions.
The component remains fully understandable without motion.

## Customization
Override variables in a theme class or parent scope.
Avoid editing the component selectors for simple palette changes.
Keep spacing and typography tokens consistent with the host design system.

## Integration
Load the component stylesheet after the base stylesheet.
Place theme overrides after component defaults.
Use one theme source of truth when multiple status components exist.

## Testing
Test every status variant in dark mode.
Check contrast with the final palette.
Test focus visibility on interactive states.
Test narrow and wide containers.
Test with reduced motion enabled.

## Files
`README.md` documents the theming model.
`demo.html` demonstrates themed states.
`style.css` defines component defaults and layout.

## Summary
CSS variables keep the component adaptable without changing its structure.
Use the supplied tokens as the integration point for a design system.
Preserve semantic state labels after every visual customization.
