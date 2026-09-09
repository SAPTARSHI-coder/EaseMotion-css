# Minimalist Modal — Responsive

## Overview
This guide documents responsive behavior for the minimalist modal dialog.
The dialog adapts to available width while preserving content readability.

## Purpose
Use the modal for focused tasks that require temporary attention.
Keep the task concise and provide clear actions.

## Structure
Use a semantic dialog with a descriptive heading.
Keep primary and secondary actions as native buttons.
Group related actions in a dedicated actions region.

## Responsive Width
Use a flexible width with a maximum width on large screens.
Keep safe horizontal margins on small screens.
Avoid fixed widths that can cause viewport overflow.

## Responsive Height
Avoid fixed heights that clip important content.
Allow the content area to scroll when it exceeds available space.
Keep the action area reachable after long content.

## Mobile Behavior
Reduce decorative padding on narrow screens.
Allow headings and body text to wrap naturally.
Keep action controls large enough for touch interaction.
Do not hide essential content to preserve a compact appearance.

## Tablet Behavior
Use a moderate maximum width.
Maintain comfortable spacing around the dialog panel.
Keep the same semantic and keyboard order as desktop.

## Desktop Behavior
Use a constrained maximum width for readable line lengths.
Keep the overlay visually separate from the dialog.
Avoid excessive panel width on large monitors.

## Accessibility
Give the dialog an accessible name.
Keep focus inside the active modal when scripted behavior is used.
Return focus to the invoking control after closing.
Keep every action keyboard reachable.
Maintain visible focus indicators.

## Keyboard
Support Tab navigation through all available controls.
Support Escape dismissal when appropriate.
Do not remove browser focus outlines without an accessible replacement.

## Typography
Use readable text sizes across breakpoints.
Allow long headings to wrap instead of clipping them.
Maintain adequate line height for dense content.

## Custom Properties
Expose width, padding, radius, surface, text, border, and shadow values.
Theme variables at the component or page scope.
Use responsive overrides only when a token needs breakpoint-specific behavior.

## Motion
Respect `prefers-reduced-motion` for optional open and close transitions.
The dialog must remain usable without animation.

## Usage
Open `demo.html` to inspect the standalone implementation.
Resize the viewport to test the responsive layout.
Replace sample content with the application's actual task.

## Testing
Test phone widths.
Test tablet widths.
Test desktop widths.
Test long content.
Test keyboard navigation.
Test focus visibility.
Test browser zoom.
Test reduced motion.

## Browser Support
The example uses semantic HTML and standard responsive CSS.
Modern browsers support the layout features used in the demo.

## Files
`README.md` documents the responsive scope.
`demo.html` is the standalone example.
`style.css` contains responsive presentation rules.

## Summary
The responsive modal keeps focused tasks usable across screen sizes.
Let content determine height instead of forcing fixed dimensions.
Use the supplied demo as the reference for production integration.
