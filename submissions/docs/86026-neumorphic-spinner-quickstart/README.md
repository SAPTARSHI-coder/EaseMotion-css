# Neumorphic Spinner — Quickstart

## Overview
This quickstart introduces a soft neumorphic loading spinner.
It provides visual feedback while an operation is in progress.

## Purpose
Use the spinner for short asynchronous operations.
Pair it with descriptive text when the loading context is not obvious.
Do not use it as the only indication of an important application state.

## Markup
Use a dedicated container for the spinner.
Give the loading state an accessible label.
Use native status semantics when the state is dynamically announced.

## Usage
Copy the example markup from `demo.html`.
Load `style.css` after the project's base stylesheet.
Replace the sample label with context-specific loading text.

## Visual Design
The neumorphic appearance uses soft shadows and a raised surface.
Keep the shadow contrast subtle enough to preserve readability.
Avoid relying on shadows to communicate information.

## Accessibility
Provide a meaningful accessible name for the loading state.
Use a live region only when users need notification of the change.
Do not announce repetitive loading updates.

## Motion
The spinner may rotate continuously during loading.
Respect `prefers-reduced-motion` by reducing or removing decorative motion.
Provide an understandable static loading state when motion is disabled.

## Responsive Behavior
The spinner should remain centered within its container.
Scale decorative dimensions carefully on small screens.
Keep accompanying text readable without clipping.

## Customization
Use CSS variables for size, surface, shadow, and accent values.
Change the size according to the surrounding interface.
Keep accessible text available after visual customization.

## Integration
The component has no JavaScript dependency for its presentation.
Application logic should control when the loading state appears.
Hide or remove the spinner when loading finishes.

## Testing
Test with reduced motion enabled.
Test with keyboard and assistive technology when the state is interactive.
Test at narrow viewport widths.
Test against light and dark surrounding surfaces.

## Browser Support
The component uses standard CSS animation and layout features.
Modern browsers provide the intended appearance.

## Files
`README.md` contains the quickstart guide.
`demo.html` contains the standalone spinner example.
`style.css` contains the component styling.

## Summary
The neumorphic spinner is a lightweight loading presentation.
Keep status meaning semantic and treat the visual spinner as supporting feedback.
Use the provided example as the integration baseline.
