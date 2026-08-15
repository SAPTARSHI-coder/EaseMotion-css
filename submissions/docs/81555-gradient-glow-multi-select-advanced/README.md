# Gradient Glow Multi-Select — Advanced Styling

## Overview

This guide documents advanced styling for the Gradient Glow Multi-Select component.

The component combines native multi-select semantics with a layered gradient presentation.

The implementation is intended to be copied into documentation examples or product interfaces.

The advanced scope focuses on visual customization without changing the underlying selection model.

## Markup

Use a native `<select multiple>` element so browser selection semantics remain available.

```html
<label class="multi-select" for="features">
  <span class="multi-select__label">Choose features</span>
  <select class="multi-select__control" id="features" name="features" multiple>
    <option value="analytics">Analytics</option>
    <option value="automation">Automation</option>
    <option value="security">Security</option>
  </select>
</label>
```

## Class Naming

`multi-select` is the component block.

`multi-select__label` identifies the visible field label.

`multi-select__control` identifies the native select control.

Use modifiers such as `multi-select--compact` for intentional variants.

Keep component selectors scoped so the glow effect does not leak into unrelated selects.

## Custom Properties

The component exposes CSS variables for visual tuning.

```css
.multi-select {
  --select-bg: #101323;
  --select-border: #7c5cff;
  --select-glow: #48e8ff;
  --select-radius: 0.9rem;
}
```

Override these variables at the component or theme level.

This keeps color and spacing decisions separate from structural selectors.

## Advanced Styling

Use a layered background or pseudo-element to create the gradient edge.

Keep the native select readable above the decorative layer.

Use `box-shadow` for the outer glow instead of changing the document layout.

A stronger glow can be applied on focus to make keyboard interaction visible.

Avoid excessive blur that reduces text clarity or selected-option contrast.

## Accessibility

The native multiple-select control should remain the interactive element.

Always associate the control with a visible label.

Do not use placeholder text as the only accessible name.

Maintain a visible focus indicator.

Ensure selected options remain distinguishable without relying only on glow color.

## Keyboard Interaction

Native multi-select keyboard behavior should be preserved.

Users should be able to focus the field and move through options using standard browser controls.

Do not replace the native control with a decorative non-interactive element.

Test selection behavior with keyboard-only navigation.

## Responsive Behavior

The control should use the available width without forcing horizontal scrolling.

Reduce decorative padding on narrow screens if necessary.

Keep option text readable at normal browser zoom.

## Usage

Copy the markup into the page where the multi-select is needed.

Load the accompanying stylesheet after the project's base styles.

Replace the example options with application-specific values.

Keep the native `multiple` attribute enabled.

## Testing Checklist

- Verify multiple option selection.
- Verify keyboard navigation.
- Verify visible focus.
- Verify selected-option contrast.
- Test narrow viewport widths.
- Test browser zoom.
- Test dark and light host themes.
- Test long option labels.

## Documentation Integration

The guide can be linked from `docs/index.html` or the project's cheatsheet index.

Keep the link text descriptive so users understand the component and styling scope.

## Browser Notes

Native multi-select behavior varies slightly by browser and operating system.

The CSS should enhance the control without depending on a browser-specific interaction model.

## Files

`README.md` contains the advanced usage guide.

`demo.html` provides a copy-paste demonstration.

`style.css` contains the component presentation rules.

## Summary

The advanced styling layer provides a reusable gradient glow treatment while preserving native selection semantics.

The component can be themed through CSS variables and remains usable with keyboard interaction.
