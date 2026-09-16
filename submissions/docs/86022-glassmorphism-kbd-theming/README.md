# Glassmorphism KBD — Theming

## Overview
This guide explains how to customize the glassmorphism keyboard-key component.
The component keeps semantic `<kbd>` markup while exposing visual tokens.

## Theme Tokens
Use variables for surface opacity, border color, text color, blur, and shadow.
Keep the variables grouped under the component scope.
This allows the same component to adapt to different design systems.

## Surface
Use a translucent surface to create the glass effect.
Ensure the surface remains distinguishable from the page background.
Do not use transparency that makes text difficult to read.

## Border
A subtle border helps define the key boundary.
Increase contrast when the page background is visually busy.
Keep the border consistent across key combinations.

## Typography
Use a compact but readable typeface.
Keep key labels centered and visually distinct.
Avoid overly small text for shortcuts that must be read quickly.

## Blur
Backdrop blur is decorative and should not carry meaning.
Use a moderate blur value for consistent rendering.
Allow the component to remain readable if blur is unavailable.

## Accessibility
Semantic `<kbd>` markup should remain unchanged during theming.
Do not communicate shortcut differences through color alone.
Check contrast after every theme adjustment.

## Responsive Behavior
Key groups should wrap naturally on narrow screens.
Maintain usable spacing between adjacent keys.
Avoid fixed widths that can clip longer shortcut labels.

## Reduced Motion
Do not make theme transitions essential to understanding.
Respect `prefers-reduced-motion` for optional hover effects.

## Customization
Override component variables from a theme wrapper.
Keep spacing and typography consistent with the host design system.
Use one token source when the component appears across many pages.

## Usage
Load the component stylesheet after the base stylesheet.
Apply theme variables on the parent component or theme scope.
Use the demo as a visual reference for the available states.

## Testing
Check text contrast on light and dark backgrounds.
Test long key labels.
Test wrapped key groups.
Test keyboard and browser zoom behavior.
Test the fallback appearance without blur support.

## Files
`README.md` contains the theming documentation.
`demo.html` demonstrates themed keyboard keys.
`style.css` contains the base visual rules.

## Summary
The component is intentionally token-driven.
Keep semantic keyboard markup intact while customizing the glass treatment.
Prioritize readability over decorative transparency.
