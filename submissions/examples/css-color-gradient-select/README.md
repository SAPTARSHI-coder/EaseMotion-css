# CSS Color Gradient Select

A responsive CSS-only color gradient selection component where each
available option is represented by a distinct gradient preview.

## Features

- Pure CSS implementation
- No JavaScript required
- Multiple gradient choices
- Visual gradient previews
- Radio-based selection
- Keyboard-focusable options
- Visible focus indicators
- Responsive layout
- Hover interactions
- Reduced-motion support
- No external dependencies

## Files

- `demo.html` — Standalone demonstration
- `style.css` — Component styles

## How It Works

The component uses a group of visually styled radio inputs.

Each radio input is followed by a label containing:

- A gradient preview
- Gradient name
- Gradient description

The checked radio input controls the selected state using the CSS
`:checked` pseudo-class.

For example:

```css
.gradient-select input:checked + .gradient-option {
  border-color: #5a55c7;
  box-shadow: 0 8px 24px rgba(90, 85, 199, 0.15);
}