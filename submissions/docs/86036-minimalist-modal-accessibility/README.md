# Minimalist Modal — Accessibility

## Overview
This guide documents accessible interaction for the minimalist modal.
The modal should preserve a clear relationship between trigger, dialog, and actions.

## Naming
Give the dialog a descriptive accessible name.
Use a visible heading when possible.
Connect the heading to the dialog using native labeling or ARIA when needed.

## Focus Management
Move focus into the dialog when it opens.
Keep focus within the active dialog while it is open.
Return focus to the original trigger when the dialog closes.

## Keyboard
Support Escape for dismissal when appropriate.
Allow Tab to reach every interactive control.
Keep focus order aligned with the visual order.
Never remove visible focus indicators.

## Semantics
Use the native dialog element when suitable.
Use native buttons for close and action controls.
Avoid adding ARIA roles that duplicate native semantics.

## Content
Keep the heading and main purpose easy to identify.
Do not hide essential information behind decorative effects.
Provide clear action labels instead of ambiguous text.

## Overlay
The overlay should visually separate the dialog from the page.
Do not use overlay color as the only indication that a modal is active.

## Responsive Behavior
The dialog must remain usable on small screens.
Long content should be scrollable.
Do not clip buttons or form controls.

## Motion
Respect `prefers-reduced-motion` for opening and closing effects.
The dialog must remain understandable without animation.

## Screen Readers
Ensure the dialog has an accessible name.
Avoid unnecessary live announcements.
Keep hidden background content unavailable to interaction while the modal is active.

## Testing
Test keyboard-only interaction.
Test Escape behavior.
Test focus placement and return.
Test with a screen reader.
Test browser zoom.
Test narrow screens.
Test reduced motion.

## Customization
Visual themes should not change semantic structure.
Keep focus styles visible after theme changes.
Check contrast after changing colors.

## Files
`README.md` contains the accessibility guidance.
`demo.html` provides the standalone reference.
`style.css` contains visual presentation rules.

## Summary
Accessible modal behavior depends on semantics and focus management.
Keep interaction predictable across keyboard and assistive technology users.
Treat visual styling as a layer over the accessible structure.
