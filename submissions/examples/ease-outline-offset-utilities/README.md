# Outline Offset Utilities (`ease-outline-offset-utilities`)

A demonstration of how to leverage CSS `outline-offset` alongside `outline` to create interactive hover frames and accessible focus rings that never trigger layout shifts.

## 🚀 Features & EaseMotion Showcase

- **Layout Safe**: Unlike `border` which adds physical width to the box-model, `outline` and `outline-offset` draw *outside* the box bounds, preventing adjacent elements from shuddering or shifting on hover.
- **Negative Insets**: Proves that `outline-offset` accepts negative values, enabling inner-border styling without complex pseudo-elements.
- **Spring Physics Simulation**: Shows how applying a `cubic-bezier` transition to `outline-offset` can create delightful spring/bouncy feedback loops native to CSS.
- **Accessibility Friendly**: Provides the definitive pattern for the `:focus-visible` offset ring that all interactive EaseMotion components should follow.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create an animated floating frame:
```html
<div class="ease-outline-frame">
  <img src="photo.jpg" alt="Gallery item">
</div>
