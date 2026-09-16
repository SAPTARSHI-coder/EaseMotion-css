# Minimalist Modal — Theming

## Overview
This guide explains theme customization for the minimalist modal.
The structure remains stable while visual tokens can change.

## Tokens
Use variables for surface, text, border, overlay, radius, and spacing.
Keep theme overrides in a local scope when possible.

## Surface
Choose a surface with strong contrast against the overlay.
Keep the dialog distinct from the underlying page.

## Typography
Use the host design system's heading and body scale.
Keep action labels concise and readable.

## Borders
A restrained border can define the modal without excessive decoration.
Adjust border strength when the theme changes contrast.

## Overlay
The overlay should separate the dialog from background content.
Do not make the overlay so opaque that context becomes confusing.

## Accessibility
Theme changes must preserve text and control contrast.
Keep focus indicators visible.
Do not communicate action meaning through color alone.

## Responsive Behavior
The themed dialog must remain usable at narrow widths.
Allow content to scroll instead of clipping it.

## Reduced Motion
Optional theme transitions should respect reduced motion.
The modal remains usable without animated effects.

## Customization
Override CSS variables instead of rewriting selectors.
Keep theme tokens consistent with the host design system.

## Integration
Load component styles after base styles.
Apply theme overrides after component defaults.
Keep application behavior separate from visual theme code.

## Testing
Check light and dark themes.
Check contrast after changing colors.
Test focus visibility.
Test long content.
Test narrow widths.
Test reduced motion.

## Files
`README.md` documents theme customization.
`demo.html` demonstrates the modal in context.
`style.css` defines the base presentation.

## Summary
The modal is designed to adapt to different design systems.
Keep semantics and interaction behavior unchanged while customizing visuals.
Use variables as the preferred theming interface.
