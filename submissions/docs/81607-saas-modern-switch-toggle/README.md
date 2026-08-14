# SaaS Modern Switch Toggle — Basic Usage

## Overview
A modern switch control for binary settings in SaaS interfaces.
Use it for preferences that can be enabled or disabled immediately.

## Markup
```html
<label class="switch">
  <input class="switch__input" type="checkbox">
  <span class="switch__track"><span class="switch__thumb"></span></span>
  <span class="switch__label">Email alerts</span>
</label>
```

## Class Naming
`switch` is the component block.
`switch__input`, `switch__track`, and `switch__thumb` are component elements.
Keep state styling tied to the native checked state.

## Behavior
The native checkbox remains the source of truth.
The visual track and thumb represent checked and unchecked states.

## Customization
Expose track, thumb, size, spacing, and focus values as CSS variables.

## Accessibility
Keep the native checkbox in the accessibility tree.
Associate the visible label with the input.
Never use color as the only state indicator.
Provide a strong keyboard focus state.

## Keyboard Guidance
Native checkbox controls support keyboard activation.
Keep the tab order predictable.

## Responsive Design
Maintain a comfortable target on touch screens.
Allow the label to wrap without clipping the control.

## Reduced Motion
Optional thumb transitions should respect `prefers-reduced-motion`.

## Testing
Test checked and unchecked states.
Test keyboard focus and activation.
Test screen-reader naming.
Test narrow widths and zoom.

## Files
`README.md` documents usage.
`demo.html` contains the expanded example.
`style.css` contains the formatted presentation rules.

## Maintenance
Keep state behavior in the input.
Use CSS for visual presentation.
