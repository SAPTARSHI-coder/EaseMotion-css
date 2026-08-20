# Resize Textarea Corner

Demonstrates the CSS `resize` property applied to `<textarea>` elements, showcasing the `both`, `horizontal`, `vertical`, and `none` keyword values. Includes custom resize handle styling via `::-webkit-resizer` and dimension constraints using `min-width`/`max-width`/`min-height`/`max-height`.

## Usage

Open `demo.html` in any modern browser. Each card shows a textarea with a different `resize` value. Drag the corner handle to experience the behavior. The custom handle uses a CSS gradient and border-based triangle for visual flair.

## Notes

- The `::-webkit-resizer` pseudo-element provides custom handle styling in Chromium browsers.
- Firefox does not support `::-webkit-resizer` but respects `resize` functionality.
- Dimension constraints demonstrate how to prevent excessive or insufficient resizing.
