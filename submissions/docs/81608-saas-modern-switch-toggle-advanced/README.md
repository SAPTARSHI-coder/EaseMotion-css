# SaaS Modern Switch Toggle — Advanced Styling

## Overview

This guide documents advanced styling for the SaaS Modern Switch Toggle.

The component uses a native checkbox as the stateful control.

The advanced scope covers track, thumb, active state, theme variables, and responsive presentation.

## Markup

```html
<label class="switch">
  <input class="switch__input" type="checkbox" name="notifications">
  <span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>
  <span class="switch__label">Product notifications</span>
</label>
```

## Class Naming

`switch` is the component block.

`switch__input` is the native checkbox.

`switch__track` and `switch__thumb` form the visual control.

`switch__label` contains the visible setting name.

Use a modifier such as `switch--compact` for intentional variants.

## CSS Variables

```css
.switch {
  --switch-track: #dce3ef;
  --switch-active: #635bff;
  --switch-thumb: #ffffff;
  --switch-focus: #111827;
}
```

Variables make the component easy to theme.

## Advanced Styling

The native checkbox can be visually minimized while the label remains associated with it.

Use sibling selectors to reflect checked state on the track and thumb.

Use `box-shadow` sparingly to create a polished SaaS surface.

Keep the active state clearly distinct from the inactive state.

## Accessibility

The checkbox remains the actual interactive element.

The visible label gives the setting an accessible name.

Do not remove keyboard focus.

The checked state must not depend only on color.

## Keyboard Interaction

Users should be able to focus the checkbox and toggle it with Space.

Use native checkbox semantics instead of a generic clickable container.

Keep focus visible with `:focus-visible`.

## Responsive Behavior

Keep the switch and label aligned on narrow screens.

Allow the label to wrap when necessary.

Maintain a comfortable touch target.

## Reduced Motion

Optional thumb transitions should respect `prefers-reduced-motion`.

The toggle state must remain understandable without animation.

## Usage

Copy the label and checkbox structure into a settings page.

Replace the setting label and name with application-specific values.

Connect the checkbox state to the host application separately.

## Testing Checklist

- Test checked and unchecked states.
- Test Space-key toggling.
- Test focus visibility.
- Test long labels.
- Test narrow screens.
- Test browser zoom.
- Test reduced motion.
- Test contrast.

## Documentation Integration

Place the guide under `submissions/docs/` and link it from the documentation index.

## Files

`README.md` contains advanced styling documentation.

`demo.html` contains the standalone switch example.

`style.css` contains the visual implementation.

## Summary

The advanced switch treatment adds a polished SaaS appearance while preserving the native checkbox interaction model.
