# Animated Checkbox (`ease-checkbox-animated`)

A custom checkbox component featuring a smooth, CSS-only SVG drawing animation. Built for the EaseMotion-css framework.

## 🚀 Features

- **Pure CSS Draw Animation**: Uses the `stroke-dasharray` and `stroke-dashoffset` CSS properties to animate the SVG checkmark so it appears to draw itself onto the screen.
- **Zero JavaScript**: Entirely reliant on the native `:checked` pseudo-class and the adjacent sibling `+` selector.
- **Color Customization**: Easily swap out the fill color by modifying the `--ease-checkbox-color` CSS variable.

## 🛠️ Usage

Wrap the native checkbox input and the custom box inside a `.ease-checkbox` label container. Ensure the input is placed *before* the `.ease-checkbox-box`.

```html
<label class="ease-checkbox">
  <input type="checkbox" class="ease-checkbox-input" />
  
  <div class="ease-checkbox-box">
    <!-- The exact dimensions and points of this SVG are critical for the animation length calculation -->
    <svg class="ease-checkbox-svg" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </div>
  
  <span class="ease-checkbox-label">Checkbox Label</span>
</label>
