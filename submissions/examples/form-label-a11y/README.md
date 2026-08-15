# Accessible Form Labels (The `for` Attribute)

This submission demonstrates how to implement strictly accessible form fields that comply with WCAG 2.1 AA standards. One of the most common automated accessibility failures on the web is the lack of programmatic association between a form input and its visible label.

## Core Accessibility Features

### 1. Programmatic Association (`for` and `id`)

A text label placed visually next to an input is useless to a screen reader unless they are programmatically linked in the DOM. 

You must strictly match the `for` attribute of the `<label>` to the `id` attribute of the `<input>`.

```html
<!-- Correct Implementation -->
<label for="firstName">First Name</label>
<input type="text" id="firstName" name="firstName">
```

When a screen reader user focuses the input above, it will successfully announce "First Name, text edit".

### 2. Expanding the Hit Area (Checkboxes & Radios)

Label association isn't just for screen readers; it dramatically improves usability for sighted users. Native checkboxes and radio buttons are tiny targets (usually 13x13 pixels).

By properly wrapping or associating the label via the `for` attribute, clicking the text itself toggles the input, effectively turning a 13px target into a 300px target.

```html
<input type="checkbox" id="marketingOptIn">
<label for="marketingOptIn">I want to receive marketing emails</label>
```

### 3. The Placeholder Anti-Pattern

Many modern designs attempt to save space by deleting the `<label>` entirely and relying on the `placeholder` attribute to identify the input. **This is a WCAG failure for two reasons:**
1. Placeholders disappear the moment the user starts typing. A user returning to the form to review their data has lost the context of what the field is.
2. Placeholders often fail color contrast requirements (they are usually light gray).

Always use a persistent, programmatically associated `<label>`.

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, subtle gray borders on form inputs are often stripped, making it impossible to see where the input begins and ends. We use the `forced-colors` media query to ensure inputs retain a solid system-color border.

```css
@media (forced-colors: active) {
    .form-input, .form-select, .form-checkbox {
        border: 2px solid CanvasText;
    }
}
```
