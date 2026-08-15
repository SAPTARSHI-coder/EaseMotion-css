# Dark Mode Status — Quickstart

## Overview
This quickstart introduces the Dark Mode Status component.
It presents a compact status indicator for dark interface themes.
The component uses semantic content and simple CSS customization.

## When to Use
Use it for connection, availability, processing, or system states.
Keep status text short and meaningful.
Pair the visual indicator with text when color alone is ambiguous.

## Markup
Start with a semantic status wrapper.
Give the component a descriptive label.
Use a native element for any interactive control.
Keep decorative indicators separate from meaningful text.

## Basic Example
The supplied demo shows the status in a complete page context.
Copy the component markup into an existing dark interface.
Link the stylesheet after the project's base styles.

## Visual States
A status can represent positive, warning, neutral, or inactive states.
Each state should have a clear textual meaning.
Do not rely exclusively on hue to communicate state.

## CSS Variables
Use custom properties for surfaces, text, borders, and accents.
Variables make the component easy to integrate with existing themes.
Override them within a local component scope when possible.

## Dark Theme
Use high-contrast foreground and background combinations.
Avoid extremely low-contrast secondary text.
Check borders and icons independently from body text.

## Accessibility
Provide readable status text for assistive technology.
Use an appropriate live region only when the status changes dynamically.
Avoid unnecessary announcements for purely decorative changes.
Keep focus indicators visible on interactive elements.

## Keyboard Use
If the status is interactive, use a button or link.
Ensure it can be reached using Tab.
Do not create keyboard behavior on generic containers without need.

## Responsive Behavior
Keep the status compact on narrow screens.
Allow text to wrap instead of clipping it.
Maintain comfortable spacing around the indicator.

## Reduced Motion
Avoid animation for essential state communication.
Respect `prefers-reduced-motion` for decorative effects.
The status remains understandable when animation is disabled.

## Customization
Change the accent and surface variables to match a design system.
Adjust border radius and spacing for the host interface.
Keep contrast checks after changing colors.

## Testing
Check every status variant.
Test keyboard access for interactive versions.
Test browser zoom and narrow viewports.
Test with a screen reader when dynamic announcements are used.

## Browser Support
The component uses standard HTML and CSS.
Modern browsers support the styling features used by the demo.

## Files
`README.md` contains this quickstart guide.
`demo.html` contains the standalone example.
`style.css` contains the visual presentation.

## Summary
The component provides a simple dark-mode status pattern.
Start with the supplied markup, then customize variables for the host theme.
Keep semantics and accessible state communication intact.
