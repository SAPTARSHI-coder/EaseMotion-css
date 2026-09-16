# Neumorphic Drawer

Documentation for the Neumorphic Drawer requested in issue #81537.

## Scope

This guide covers the basic-usage variant specified in the issue title.
It explains the component structure, class naming, CSS variables, and accessible interaction model.
The example is intentionally self-contained so it can be opened without a build tool.

## Features

- Soft neumorphic surface treatment.
- Sliding drawer panel with clear boundaries.
- Native button trigger for predictable keyboard access.
- Semantic navigation content inside the drawer.
- CSS custom properties for theme adjustments.
- Responsive behavior for smaller screens.
- Reduced-motion handling.
- Visible focus states.

## Structure

Use a component root to contain the trigger and drawer panel.
The drawer should contain a heading or accessible label.
Navigation links should remain native anchors.
A close control should be a real button when the drawer can be dismissed.
Keep the panel content separate from decorative shadows.
The complete structure is demonstrated in `demo.html`.

## Class Naming

Use `.drawer` for the component root.
Use `.drawer__trigger` for the control that opens the drawer.
Use `.drawer__panel` for the sliding surface.
Use `.drawer__header` for the panel heading area.
Use `.drawer__close` for the dismissal control.
Use `.drawer__nav` for navigation links.
Use `.drawer--open` for the visible state.
Keep state modifiers descriptive and reusable.

## CSS Variables

Variables control the surface, shadow, radius, spacing, and transition speed.
Override them on `.drawer` when embedding the component in another theme.
Avoid hard-coding colors into application-specific selectors.
Use the same variable system for light or dark neumorphic palettes.

## Basic Usage

Place the trigger near the page navigation area.
Associate the trigger with the drawer panel using an accessible relationship.
Toggle the open state when the trigger is activated.
Update `aria-expanded` to reflect the current state.
Give the panel an accessible name when its purpose is not obvious.
Provide a close action inside the drawer.

## Accessibility

Use native buttons and links for all interactive elements.
Keep keyboard focus visible at every interactive control.
Do not make the entire decorative panel focusable.
Do not communicate the open state through color alone.
Ensure the drawer remains readable at increased text size.
Respect `prefers-reduced-motion` for the slide transition.

## Keyboard Interaction

Tab should enter the drawer through its trigger and move through links logically.
The close button must be reachable without a pointer.
Escape can be used as a convenient close action when JavaScript is present.
Avoid trapping focus unless the drawer is implemented as a full modal dialog.

## Responsive Behavior

On wide screens the drawer can use a fixed maximum width.
On narrow screens the panel expands to a comfortable mobile width.
Spacing is reduced gradually rather than removing content.
Navigation links remain large enough for touch interaction.

## Customization

Change the drawer width with the component width variable.
Adjust shadow intensity to strengthen or soften the neumorphic appearance.
Tune border radius and internal spacing to match the host interface.
Change transition duration while preserving reduced-motion behavior.

## Demo

Open `demo.html` directly in a browser.
The demo includes a trigger, drawer content, navigation links, and a close control.
No external library is required.

## Files

- `demo.html` — expanded standalone drawer example.
- `style.css` — formatted neumorphic and responsive styling.
- `README.md` — basic usage and accessibility guide.

## Verification

Test opening and closing with the keyboard.
Check the component at narrow and wide viewport sizes.
Confirm focus indicators remain visible.
Test with reduced motion enabled.
Verify that the drawer remains understandable without decorative effects.
