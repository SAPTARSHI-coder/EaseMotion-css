# Claymorphism Rating Accessibility

Documentation for the accessibility-integration variant requested in issue #81560.

## Scope

This guide preserves the Claymorphism Rating visual style while documenting accessible interaction.
The focus is on semantic grouping, native radio controls, keyboard support, focus visibility, and non-color state communication.
The visual system remains customizable through CSS variables.

## Features

- Claymorphism rating presentation.
- Native radio-based interaction.
- Explicit rating group label.
- Keyboard-friendly selection.
- Visible focus treatment.
- Selected state that remains clear without color alone.
- Responsive layout.
- Reduced-motion support.

## Structure

Use a fieldset and legend for the rating group.
Keep each rating value paired with a visible label.
Use a native radio input as the state source.
Decorative stars, shadows, and clay surfaces should remain presentational.
The full structure is available in `demo.html`.

## Class Naming

Use `.rating` for the root component.
Use `.rating__group` for the option collection.
Use `.rating__option` for each rating value.
Use `.rating__input` for the radio control.
Use `.rating__label` for readable rating text.
Use `.rating--clay` for the visual variant.
Keep accessibility behavior in semantic HTML rather than class names.

## CSS Variables

Variables expose surface, shadow, accent, text, border, spacing, and transition values.
Override them at the component root for theme adaptation.
When changing the palette, check focus and selected-state contrast separately.
Do not make a glow or shadow the only indication of state.

## Accessible Usage

Give the group a meaningful legend.
Use unique values for each radio within the group.
Keep labels large enough for comfortable pointer interaction.
Do not visually hide the radio in a way that removes keyboard access.
Ensure the selected value is communicated by the native control and visible text.

## Keyboard Interaction

Tab should enter the rating group normally.
Arrow keys should retain native radio-group behavior.
Space should select the focused radio where supported by the browser.
Do not intercept native keyboard commands unnecessarily.
Keep DOM order aligned with the displayed rating order.

## Screen Reader Considerations

The legend should explain what the rating represents.
Each option should have an understandable accessible name.
Decorative symbols should not become repeated spoken content.
If a selected value is summarized elsewhere, keep the summary concise.

## Motion

Any clay highlight animation is decorative.
Use `prefers-reduced-motion` to remove unnecessary movement.
Keep focus and selected indicators visible when animation is disabled.

## Responsive Behavior

The rating options should wrap without clipping.
Touch targets remain comfortably spaced on smaller screens.
The clay surface scales while preserving readable labels.

## Customization

Adjust the clay surface and shadow variables for different themes.
Change accent contrast to suit light or dark surfaces.
Tune spacing and radius without changing the semantic structure.
Strengthen the focus ring when adapting the component to a lower-contrast palette.

## Demo

Open `demo.html` directly in a browser.
The example demonstrates labeled options, focus states, and selected-state presentation.
No external framework or build step is required.

## Files

- `demo.html` — accessible expanded rating example.
- `style.css` — formatted clay and focus styling.
- `README.md` — accessibility-focused documentation.

## Verification

Navigate the rating with the keyboard.
Confirm the group label is meaningful.
Verify every option has a readable label.
Check selected state without relying on color alone.
Test with reduced motion enabled.
