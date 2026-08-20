# Floating Input Field

Documentation showcase for EaseMotion CSS issue #78589. This example presents a SaaS-style form field whose label moves from the input area to a compact floating position when the field receives focus or contains a value.

## Files

- `demo.html` — semantic form markup and a complete interaction example.
- `style.css` — field layout, floating-label transition, validation treatment, responsive spacing, and accessibility states.

## Interaction Model

The field uses a real `<label>` associated with the input through matching `for` and `id` attributes. A whitespace placeholder keeps the input compatible with the CSS state selector without displaying duplicate placeholder text.

When the input is focused, the label moves above the field value and the control receives a stronger visual outline. Once text is entered, the label remains in its floating position so the value is never confused with the field description.

## Usage

Use the component inside a normal form and replace the sample `name`, `autocomplete`, and validation attributes with the requirements of the application. The native input remains responsible for keyboard interaction, browser autofill, and basic validation.

## Accessibility

- The visible label remains programmatically associated with the input.
- Native email validation is retained with `type="email"`.
- `required` communicates the required state to the browser.
- Keyboard focus is visibly represented.
- The component does not depend on JavaScript.
- Motion can be disabled through the reduced-motion media query.

## Responsive Behavior

The form card uses a fluid width with a readable maximum size. Padding and typography scale down at smaller viewports so the field remains comfortable on phones without changing the semantic structure.

## Customization

Adjust the field radius, border, focus ring, label offset, colors, and transition timing in `style.css`. The component can be placed inside authentication forms, checkout flows, settings pages, or profile forms.

## Preview

Open `demo.html` directly in a browser and focus the Work email field. Type a value, move focus away, and return to the field to observe how the floating label preserves the field context.
