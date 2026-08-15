# Dark Mode Range Slider — Advanced Styling

## Overview

This guide documents advanced styling for the Dark Mode Range Slider.

The component uses a native range input with a dark themed presentation.

The advanced scope focuses on track, thumb, fill, variables, and responsive styling.

Native range semantics are retained for predictable interaction.

## Markup

```html
<label class="range-slider" for="volume">
  <span class="range-slider__label">Volume</span>
  <input class="range-slider__input" id="volume" name="volume" type="range" min="0" max="100" value="65">
</label>
```

## Class Naming

`range-slider` is the component block.

`range-slider__label` identifies the visible label.

`range-slider__input` identifies the native control.

Use modifiers such as `range-slider--compact` for documented variants.

## CSS Variables

```css
.range-slider {
  --slider-track: #263247;
  --slider-fill: #62e6ff;
  --slider-thumb: #8b5cf6;
  --slider-focus: #ffffff;
}
```

Variables keep theme values easy to override.

## Track Styling

Use browser-specific pseudo-elements only where necessary for range-track styling.

Keep the track height large enough to make the control easy to perceive.

Use a strong but restrained fill color for the selected portion.

## Thumb Styling

The thumb should remain large enough for touch interaction.

Use a contrasting surface and focus ring.

Avoid visual effects that make the thumb difficult to locate.

## Accessibility

Always provide a visible label.

Keep the native range input as the interactive element.

Do not rely on color alone to communicate the current value.

If the numeric value is important, expose it as nearby text or an accessible value description.

## Keyboard Interaction

Native range controls support arrow keys and related browser behavior.

Do not replace the input with a custom draggable element without equivalent keyboard support.

Keep focus visible when the control is selected.

## Responsive Behavior

The slider should fill its container without horizontal overflow.

Maintain a comfortable touch target on small screens.

Keep the label readable at browser zoom.

## Reduced Motion

Optional transitions should respect `prefers-reduced-motion`.

Changing the value must remain instantaneous and usable without animation.

## Usage

Copy the labeled range input into the consuming page.

Replace the minimum, maximum, and initial value with application values.

Load the stylesheet after base form styles.

## Testing Checklist

- Test arrow-key interaction.
- Test focus visibility.
- Test minimum and maximum values.
- Test touch interaction.
- Test narrow screens.
- Test browser zoom.
- Test contrast.
- Test reduced-motion preferences.

## Documentation Integration

Place the guide under `submissions/docs/` and link it from the documentation index.

## Files

`README.md` documents advanced styling.

`demo.html` provides the standalone slider.

`style.css` contains the dark presentation layer.

## Summary

Advanced dark styling enhances the native range control while preserving its familiar browser interaction model.
