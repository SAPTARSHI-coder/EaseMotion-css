# Dark Mode Status — Responsive

## Overview
This guide covers responsive use of the Dark Mode Status component.
The component stays compact while preserving readable state information.

## Layout
Use a flexible wrapper so the status can fit different containers.
Keep indicators and labels aligned at larger widths.
Allow the content to stack when the viewport becomes narrow.

## Mobile Behavior
Status text should wrap naturally.
Controls should remain large enough for touch interaction.
Avoid fixed widths that cause horizontal overflow.
Keep spacing consistent between status items.

## Desktop Behavior
Use available horizontal space without stretching the component excessively.
Group related status information into clear visual regions.
Keep decorative spacing secondary to readable content.

## Markup
Use semantic status text inside the component.
Use native buttons or links when interaction is required.
Keep the reading order logical before applying responsive layout rules.

## Accessibility
Responsive layout changes must not change semantic order.
Keyboard focus should follow the same logical sequence on every breakpoint.
Keep text readable at increased browser zoom.
Do not hide state information on smaller screens.

## Contrast
Dark backgrounds require careful foreground selection.
Check primary and muted text separately.
Check status indicators against both the surface and surrounding background.

## Customization
CSS variables can control spacing, surfaces, borders, and typography.
Adjust breakpoint values to match the host application's layout.
Avoid removing mobile wrapping just to preserve a desktop arrangement.

## Reduced Motion
Avoid animated layout shifts during responsive changes.
Respect `prefers-reduced-motion` for optional transitions.
The component remains usable without animation.

## Usage
Copy the supplied component into the target interface.
Link `style.css` and replace sample content with real statuses.
Test the component inside the actual parent container.

## Testing Checklist
Test phone-sized widths.
Test tablet-sized widths.
Test desktop widths.
Test long status labels.
Test keyboard navigation.
Test browser zoom.
Test reduced-motion preferences.

## Browser Support
The layout uses standard responsive CSS.
Modern browsers support the features demonstrated in the example.

## Files
`README.md` documents responsive behavior.
`demo.html` provides a standalone responsive example.
`style.css` contains the layout and visual rules.

## Summary
The responsive status component preserves clear state communication.
Let content determine the required space rather than forcing fixed dimensions.
Use the demo as a starting point for production integration.
