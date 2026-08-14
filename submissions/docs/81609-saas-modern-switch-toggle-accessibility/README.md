# SaaS Modern Switch Toggle — Accessibility Integration

## Overview

This guide documents accessibility integration for the SaaS Modern Switch Toggle.

The visual switch is backed by a native checkbox so browser semantics remain available.

The guide focuses on accessible naming, keyboard operation, focus, state communication, and responsive behavior.

## Markup

```html
<label class="switch">
  <input class="switch__input" type="checkbox" name="notifications">
  <span class="switch__track" aria-hidden="true"><span class="switch__thumb"></span></span>
  <span class="switch__label">Product notifications</span>
</label>
```

## Accessible Name

The visible label is associated with the checkbox through the label element.

Keep the setting name specific and meaningful.

Do not use the switch graphics as the only name.

## State Communication

The native checkbox exposes checked and unchecked states to assistive technology.

Do not add redundant ARIA state attributes unless a specific custom implementation requires them.

The visual state should reinforce, not replace, the native state.

## Keyboard Interaction

The checkbox is reachable with Tab.

Space toggles the native checkbox.

Do not intercept native keyboard behavior unnecessarily.

Keep focus visible when the control is active.

## Focus

Use `:focus-visible` on the visual track.

The focus ring should contrast with the surrounding surface.

Never remove focus without providing an equivalent visible indicator.

## CSS Variables

```css
.switch {
  --switch-track: #dce3ef;
  --switch-active: #635bff;
  --switch-thumb: #ffffff;
  --switch-focus: #111827;
}
```

Variables allow the component to adapt to the host theme.

## Class Naming

`switch` is the component block.

`switch__input` is the native input.

`switch__track`, `switch__thumb`, and `switch__label` are visual elements.

Use modifiers only for intentional variants.

## Contrast

The inactive and active states should remain distinguishable.

The label must meet readable contrast requirements.

The focus indicator should be clearly visible.

Do not depend on color alone for essential state information.

## Responsive Behavior

Keep the control usable on touch screens.

Allow long labels to wrap without clipping.

Avoid horizontal overflow.

## Reduced Motion

Optional thumb transitions should respect `prefers-reduced-motion`.

State changes must remain understandable without animation.

## Usage

Copy the label structure into the settings interface.

Replace the setting name and input name with application values.

Connect the checkbox to the application's state management separately.

## Testing Checklist

- Test Tab focus.
- Test Space toggling.
- Test screen-reader state announcement.
- Test focus visibility.
- Test long labels.
- Test touch interaction.
- Test zoom.
- Test reduced motion.

## Documentation Integration

Place the guide under `submissions/docs/` and link it from the documentation index.

## Files

`README.md` documents accessibility integration.

`demo.html` provides the standalone example.

`style.css` contains the presentation rules.

## Summary

A native checkbox gives the switch predictable semantics while CSS supplies the modern SaaS appearance.
