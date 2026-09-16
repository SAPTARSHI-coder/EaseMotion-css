# Gradient Glow Multi-Select Accessibility

Documentation for the accessibility-integration variant requested in issue #81556.

## Scope

This guide keeps the Gradient Glow Multi-Select visual concept while prioritizing accessible interaction.
The referenced issue asks specifically for accessibility integration, so the guide emphasizes native controls, labels, focus, and keyboard behavior.
It also documents reusable classes and CSS custom properties for visual adaptation.

## Features

- Gradient glow visual treatment.
- Native checkbox interaction.
- Explicit group labeling.
- Keyboard-accessible selection.
- Strong focus-visible styling.
- Selection state that does not depend on color alone.
- Custom CSS variable overrides.
- Reduced-motion support.

## Structure

Use a fieldset and legend for a related group of choices.
Keep each checkbox paired with a visible label.
Use a wrapper class only for presentation and spacing.
Keep decorative gradient layers out of the accessibility tree where appropriate.
The complete accessible example is in `demo.html`.

## Class Naming

Use `.multi-select` for the root component.
Use `.multi-select__group` for the option collection.
Use `.multi-select__option` for each option row.
Use `.multi-select__input` for the native checkbox.
Use `.multi-select__label` for readable option text.
Use `.multi-select--glow` for the gradient presentation variant.
Use state modifiers only when the state cannot be represented by the native input.

## CSS Variables

Variables expose surface, accent, glow, border, text, spacing, and transition values.
Override them on the component root rather than rewriting selectors.
Keep focus and selected-state contrast strong when changing the palette.
Avoid choosing an accent that becomes unreadable against the dark or glowing surface.

## Accessible Usage

A group of related checkboxes should have a clear legend.
Each input needs an associated label.
Do not hide the native checkbox in a way that prevents keyboard use.
If a custom visual indicator is added, keep the native state available to assistive technology.
Use text to explain selection requirements or limits.

## Keyboard Interaction

Tab should move to each checkbox in logical order.
Space should toggle the focused checkbox using native browser behavior.
No pointer-only interaction should be required.
Focus should remain visible when the user changes selection.
Avoid intercepting keys that the native checkbox already handles.

## Screen Reader Considerations

The group label should communicate the purpose of the choices.
Option labels should make sense without the visual glow.
Do not use decorative icon text as the accessible name.
If a selection count is displayed, expose it as meaningful status text when necessary.
Keep status wording concise and update it predictably.

## Motion

Glow animation is decorative and should never communicate the only state information.
Use `prefers-reduced-motion` to remove pulsing or movement.
Keep focus and selected states visible when animation is disabled.

## Responsive Behavior

The options wrap on larger screens and stack on smaller screens.
Spacing remains large enough for touch interaction.
Text should wrap without clipping.
The visual glow should not overflow the viewport.

## Customization

Change gradient colors through custom properties.
Reduce glow intensity if the interface becomes visually noisy.
Adjust option padding without changing the semantic markup.
Use a stronger focus ring when adapting the component to a light theme.

## Demo

Open `demo.html` directly in a browser.
The demo provides labeled options, visible selection states, and keyboard-friendly controls.
It does not require a framework or build process.

## Files

- `demo.html` — accessible expanded example.
- `style.css` — formatted visual and accessibility styling.
- `README.md` — accessibility-focused documentation.

## Verification

Navigate every option with the keyboard.
Toggle choices using Space.
Confirm the group has a meaningful accessible label.
Verify selected state remains clear without color alone.
Test with reduced motion enabled.
