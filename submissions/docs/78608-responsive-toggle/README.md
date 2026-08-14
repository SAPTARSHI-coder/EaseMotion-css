# Responsive Toggle

Documentation and standalone usage guide for issue #78608.

## Overview

The Responsive Toggle is a compact control for switching between two clearly defined states.
It is designed to remain usable when the available viewport becomes narrow.
The component works well for preferences, filters, view modes, and compact settings.
Its visual state is intentionally easy to recognize at a glance.
The implementation uses semantic HTML and CSS rather than a component framework.

## Features

- Responsive dimensions for narrow and wide layouts.
- Clear active and inactive visual states.
- Native button semantics for keyboard interaction.
- Visible focus styling for keyboard users.
- Accessible state communication through `aria-pressed`.
- Reduced-motion support through `prefers-reduced-motion`.
- Simple structure that can be reused in existing pages.

## Demo

Open `demo.html` directly in a modern browser.
The example shows the toggle inside a small responsive settings panel.
A state label makes the current value visible beside the control.
The demo can be tested with a mouse, keyboard, or touch input.
Resize the viewport to observe the responsive behavior.

## Usage

Place the toggle inside the section where the related setting is presented.
Use a real `<button>` element instead of a clickable generic container.
Set `aria-pressed="true"` when the controlled state is active.
Set `aria-pressed="false"` when the controlled state is inactive.
Update the visible state text whenever the value changes.
Keep the label descriptive so its purpose is understandable without context.
Link `style.css` after the page markup or through the normal stylesheet pipeline.

## Accessibility

The control has native keyboard behavior because it is a button.
The focus indicator remains visible and should not be removed in custom themes.
The state is exposed with `aria-pressed` for assistive technology.
Color is not the only indicator of the active state.
The demo avoids depending on hover for essential information.
Motion is reduced when the user enables a reduced-motion preference.
Touch targets should remain large enough for comfortable interaction.

## Responsive Behavior

The toggle uses flexible sizing so it can fit smaller containers.
Spacing is reduced at narrow breakpoints without removing readable labels.
The surrounding content can stack naturally on small screens.
No horizontal scrolling is required for the demonstration.
The control remains visually distinct at both desktop and mobile widths.

## Customization

Adjust the component dimensions in `style.css` to match the host interface.
Change border radius values for a softer or more compact appearance.
Modify padding to control the size of the interactive surface.
Update transition timing to match the surrounding motion language.
Change typography without changing the semantic structure.
Keep contrast strong when replacing the default visual treatment.

## Implementation Notes

The demo keeps behavior separate from presentation.
State changes are reflected in both the control and supporting text.
The CSS contains the responsive layout and visual transition rules.
The component does not require external libraries or build tools.
It can be copied into a larger project and adapted to an existing design system.

## File Structure

- `demo.html` — expanded standalone demonstration.
- `style.css` — responsive component styling.
- `README.md` — usage and implementation documentation.

## Browser Support

The component targets current evergreen browsers.
Modern semantic HTML, CSS transitions, and media queries are used.
The core control remains functional even if decorative transitions are unavailable.

## Testing Checklist

- Verify the toggle changes state with Enter or Space.
- Confirm `aria-pressed` matches the visible state.
- Check the focus indicator with keyboard navigation.
- Resize the viewport and confirm the layout remains readable.
- Test the component with reduced-motion enabled.
- Confirm text and controls remain accessible on touch devices.

## License and Reuse

Follow the repository contribution and licensing rules when reusing the example.
Keep attribution and project conventions intact when integrating the component.
