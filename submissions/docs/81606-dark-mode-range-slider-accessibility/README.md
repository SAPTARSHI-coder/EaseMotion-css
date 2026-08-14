# Dark Mode Range Slider — Accessibility Integration

## Overview

This guide documents accessibility integration for the Dark Mode Range Slider.

The component keeps a native range input and adds a dark visual theme.

The focus is semantic labeling, keyboard behavior, contrast, and responsive usability.

## Semantic Markup

Use a visible label associated with the range input.

```html
<label class="range-slider" for="volume">
  <span class="range-slider__label">Volume</span>
  <input class="range-slider__input" id="volume" name="volume" type="range" min="0" max="100" value="65">
</label>
```

The native input exposes its current value through standard browser semantics.

## Accessible Naming

The visible label should describe what the value controls.

Do not rely on a nearby heading as the only label.

If a numeric value must be visible, place it next to the control and keep it synchronized by the host application.

## Keyboard Interaction

Native range inputs support arrow-key adjustment.

Home and End can be used where supported to reach the extremes.

The control must remain focusable.

Do not replace the input with a custom drag-only interface.

## Focus

Use `:focus-visible` to provide a strong outline.

The focus indicator must contrast with the dark background.

Do not remove the browser focus indicator without an equivalent replacement.

## Contrast

The track, thumb, label, and focus ring must remain distinguishable.

The selected state should not depend only on color.

Keep text at a readable contrast against the surface.

## CSS Variables

```css
.range-slider {
  --slider-track: #263247;
  --slider-fill: #62e6ff;
  --slider-thumb: #8b5cf6;
  --slider-focus: #ffffff;
}
```

Variables make theme maintenance easier.

## Class Naming

`range-slider` is the block.

`range-slider__label` identifies the visible name.

`range-slider__input` identifies the native control.

Use modifiers only for documented variants.

## Responsive Behavior

The input should occupy the available width.

Keep the thumb easy to target on touch devices.

Avoid horizontal overflow at narrow widths.

## Reduced Motion

Do not require animation to understand the current value.

Optional transitions should respect `prefers-reduced-motion`.

## Usage

Copy the labeled input into the host form.

Set appropriate minimum, maximum, step, and initial values.

Expose a textual value when the design needs an explicit numeric reading.

## Testing Checklist

- Test Tab navigation.
- Test arrow keys.
- Test Home and End where available.
- Test focus visibility.
- Test contrast.
- Test mobile touch interaction.
- Test zoom.
- Test reduced motion.

## Documentation Integration

Place the guide under `submissions/docs/` and link it from the documentation index.

## Files

`README.md` documents accessibility integration.

`demo.html` provides the standalone accessible control.

`style.css` contains the dark presentation rules.

## Summary

Native range semantics provide reliable keyboard behavior while CSS supplies the dark visual treatment.
