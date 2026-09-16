# Pastel Datepicker

Documentation for the Pastel Datepicker requested in issue #81550.

## Scope

This guide covers the basic-usage variant identified in the issue title.
It focuses on a soft pastel presentation while documenting semantic date input, classes, variables, and accessibility.
The example remains lightweight and can be adapted to an existing form without a framework.

## Features

- Pastel visual palette with soft surfaces.
- Native date input as the accessible foundation.
- Clear field label and helper text.
- Focus and validation-ready visual states.
- CSS custom properties for theme overrides.
- Responsive form layout.
- Reduced-motion support.
- Keyboard-friendly interaction.

## Structure

Use a `<label>` associated with the date input.
Keep helper text near the field when instructions are required.
Use a wrapper for the field surface and calendar-related decoration.
Do not replace the native date control with a decorative element alone.
The complete markup is available in `demo.html`.

## Class Naming

Use `.datepicker` for the component wrapper.
Use `.datepicker__label` for the field label.
Use `.datepicker__field` for the input surface.
Use `.datepicker__hint` for supporting guidance.
Use `.datepicker__icon` for decorative calendar imagery.
Use `.datepicker--compact` for optional compact presentation.
Keep state classes separate from structural classes.

## CSS Variables

Variables control the pastel surface, accent, border, text, radius, and spacing.
Override them on `.datepicker` for theme-specific presentation.
Keep color and spacing decisions centralized for easier maintenance.
Use the same variable approach when creating additional form variants.

## Basic Usage

Place the datepicker inside a form with a descriptive label.
Use the native date input to provide browser-supported date selection.
Set minimum or maximum dates through HTML when the application requires constraints.
Provide a concise helper message for format or scheduling rules.
Keep validation logic outside the visual stylesheet.

## Accessibility

Every date input must have an associated label.
Do not rely on placeholder text as the only field description.
Keep focus indicators visible against pastel surfaces.
Use sufficient contrast for text and form borders.
Expose validation messages as text rather than color alone.
Do not make calendar decoration keyboard focusable.
Respect `prefers-reduced-motion` for visual transitions.

## Keyboard Interaction

Native date controls provide browser and platform-specific keyboard behavior.
Users should be able to reach the field with normal tab navigation.
Do not add custom keyboard handlers when the native control already provides the behavior.
Keep any additional form controls in logical document order.

## Responsive Behavior

The field should remain readable on narrow screens.
The form surface can shrink to the available width without clipping the input.
Padding is reduced on smaller screens while keeping the label readable.
The component can be placed in one-column or multi-column forms.

## Customization

Change pastel colors through the component variables.
Adjust border radius to fit the host design system.
Tune field padding and spacing without changing the markup.
Replace the decorative icon while retaining its non-essential role.
Modify transition timing while preserving reduced-motion behavior.

## Demo

Open `demo.html` directly in a browser.
The demo contains a labeled date field, helper text, and a pastel form surface.
It requires no build step or external dependency.

## Files

- `demo.html` — expanded datepicker usage example.
- `style.css` — formatted pastel form styling.
- `README.md` — basic usage and accessibility documentation.

## Verification

Check the field with keyboard navigation.
Test it at narrow and wide viewport sizes.
Confirm the label remains visible.
Verify focus and validation-ready styling is distinguishable.
Test the presentation with reduced motion enabled.
