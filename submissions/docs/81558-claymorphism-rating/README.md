# Claymorphism Rating

Documentation for the Claymorphism Rating component requested in issue #81558.

## Scope

This guide covers the basic-usage variant from the issue title.
It documents a soft clay-style rating control, reusable classes, custom variables, and accessible interaction guidance.
The example uses native radio inputs so the rating remains functional without custom JavaScript.

## Features

- Soft claymorphism surface treatment.
- Star or score-based rating presentation.
- Native radio input foundation.
- Clear selected and focus states.
- CSS custom properties for visual customization.
- Responsive layout.
- Keyboard-friendly interaction.
- Reduced-motion support.

## Structure

Use a fieldset when the rating is part of a form group.
Provide a legend or visible label that describes the rating purpose.
Represent each rating value with a native radio input.
Keep decorative clay surfaces separate from the accessible control.
The complete example is included in `demo.html`.

## Class Naming

Use `.rating` for the component root.
Use `.rating__group` for the rating options.
Use `.rating__option` for each value wrapper.
Use `.rating__input` for the native radio input.
Use `.rating__label` for the visible value.
Use `.rating--clay` for the clay presentation variant.
Use state modifiers only for presentation states that supplement native input state.

## CSS Variables

Variables control surface color, shadow, accent, text, radius, spacing, and motion.
Override them on `.rating` to fit an existing design system.
Keep the selected and focus colors distinct enough to remain visible.
Use the variable system rather than duplicating component-specific selectors.

## Basic Usage

Start with the fieldset structure shown in the demo.
Give each radio a unique value within the group.
Keep labels adjacent to their inputs so the click target is understandable.
Use application logic to read the chosen value.
Do not depend on visual star shape alone to explain the rating.

## Accessibility

Native radio inputs provide expected keyboard behavior.
Use a meaningful group label for the rating purpose.
Keep the selected state visible without relying only on color.
Ensure focus is visible when a radio receives keyboard focus.
Use sufficient contrast for rating text and labels.
Avoid making decorative clay shadows part of the accessible name.
Respect `prefers-reduced-motion` for animated emphasis.

## Keyboard Interaction

Users should reach the rating group through normal tab navigation.
Native radio arrow-key behavior should remain available.
Do not replace browser interaction with unnecessary custom handlers.
Keep the visual order and DOM order consistent.

## Responsive Behavior

The rating control remains compact at wide widths.
On small screens the group can wrap without clipping labels.
Touch targets retain comfortable spacing.
The clay surface scales without changing the semantic structure.

## Customization

Change the clay surface color through custom properties.
Adjust shadow depth for stronger or softer depth.
Tune corner radius and option spacing independently.
Change the accent used for the selected value.
Modify transition timing while preserving reduced-motion behavior.

## Demo

Open `demo.html` directly in a browser.
The demo includes a labeled rating group with multiple values.
No framework, server, or build step is required.

## Files

- `demo.html` — expanded rating example.
- `style.css` — formatted claymorphism styling.
- `README.md` — basic usage and accessibility guide.

## Verification

Select a rating using the keyboard.
Confirm focus remains visible.
Check the component at narrow and wide widths.
Verify selection is understandable without color alone.
Test the component with reduced motion enabled.
