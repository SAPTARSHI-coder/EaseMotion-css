# Gradient Glow Multi-Select

Documentation for the Gradient Glow Multi-Select requested in issue #81554.

## Scope

This guide covers the basic-usage variant from the issue title.
It documents the component structure, reusable classes, custom properties, and keyboard guidance.
The visual treatment uses a gradient glow while keeping selection information available as text.

## Features

- Gradient glow selection surface.
- Multiple selectable options.
- Clear selected and unselected states.
- Native checkbox controls as the interaction foundation.
- CSS custom properties for color and spacing overrides.
- Responsive option layout.
- Focus-visible treatment.
- Reduced-motion support.

## Structure

Use a fieldset when the options form one logical group.
Use a legend to describe the group purpose.
Place each checkbox inside its associated label.
Keep the glow and gradient effects decorative.
The complete markup is provided in `demo.html`.

## Class Naming

Use `.multi-select` for the component root.
Use `.multi-select__legend` for the group heading when needed.
Use `.multi-select__option` for each option wrapper.
Use `.multi-select__input` for the native checkbox.
Use `.multi-select__label` for option text.
Use `.multi-select__option--selected` for optional state styling.
Keep modifier classes focused on state rather than implementation details.

## CSS Variables

Variables control the gradient stops, glow strength, surface, text, border, and spacing.
Override them on the component root to adapt the palette.
Keep selection state colors visually distinct from the idle surface.
Use consistent spacing variables for dense and relaxed layouts.

## Basic Usage

Start with the fieldset and checkbox structure from the demo.
Replace option labels with meaningful project-specific choices.
Allow users to select more than one option without requiring custom JavaScript.
Use form submission or application logic to read the selected values.
Keep visual styling independent from data processing.

## Accessibility

Use native checkboxes so standard keyboard behavior is preserved.
Provide a group label when multiple options share one purpose.
Keep focus indicators visible against the glow.
Do not rely on the gradient color alone to show selection.
Make selected state clear through the native control and text treatment.
Maintain adequate contrast between labels and the background.
Respect `prefers-reduced-motion` for animated glow effects.

## Keyboard Interaction

Users should reach each checkbox using normal tab navigation.
Space should toggle a focused checkbox using native browser behavior.
Do not add unnecessary keyboard handlers around native inputs.
Keep the order of options consistent with the visual order.

## Responsive Behavior

Options use a flexible layout that wraps naturally.
On narrow screens the choices become a single readable column.
Touch targets retain comfortable spacing.
Glow effects are reduced in density when space is limited.

## Customization

Change the gradient colors through CSS variables.
Adjust glow intensity without changing the HTML.
Tune option padding and border radius to match the host interface.
Choose a stronger or softer selected state while retaining semantic controls.
Modify transition timing while preserving reduced-motion behavior.

## Demo

Open `demo.html` directly in a browser.
The example includes a labeled group with several selectable options.
No external dependency or build process is required.

## Files

- `demo.html` — expanded multi-select example.
- `style.css` — formatted gradient and responsive styling.
- `README.md` — basic usage and accessibility guide.

## Verification

Select multiple options with the keyboard.
Check focus visibility for every checkbox.
Test the layout on narrow and wide screens.
Confirm selected state is understandable without color alone.
Test with reduced motion enabled.
