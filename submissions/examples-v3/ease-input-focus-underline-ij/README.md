# Input Focus Underline

A CSS-only component that adds an animated underline to input fields on focus. The underline expands from the center (or left) with a smooth color transition.

## Demo

Open `demo.html` in any modern browser.

## Usage

```html
<div class="input-wrapper">
  <input type="text" placeholder="Your name" />
</div>
```

### Variants

| Variant     | Class                          | Description                              |
|-------------|--------------------------------|------------------------------------------|
| Center      | `.input-wrapper` (default)     | Underline expands from the center out.   |
| Left        | `.input-wrapper.underline-left` | Underline expands from the left edge.    |
| Error       | `.input-wrapper.has-error`     | Underline uses `--ifu-error-color`.      |

### States

- **Focus**: `:focus-within` triggers the underline animation.
- **Error**: Add `.has-error` to the wrapper.

### Notes

- The underline is rendered via a `::after` pseudo-element on `.input-wrapper`.
- Works with `<input>` and `<textarea>` elements.
- Ensure the parent `.input-wrapper` has `position: relative`.

## Custom Properties

| Property                      | Default     | Description                       |
|-------------------------------|-------------|-----------------------------------|
| `--ifu-underline-color`       | `#d1d5db`   | Default underline color.          |
| `--ifu-focus-color`           | `#6366f1`   | Underline color on focus.         |
| `--ifu-transition-duration`   | `0.3s`      | Duration of the transition.       |
| `--ifu-error-color`           | `#ef4444`   | Underline color for error state.  |
| `--ifu-border-radius`         | `6px`       | Input border radius.              |

## Features

- Pure CSS — no JavaScript required.
- Two expand directions: center and left.
- Error state support.
- Customizable via CSS custom properties.
- Works with any input type and textarea.
- Smooth easing transitions.
