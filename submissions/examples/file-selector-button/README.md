# ::file-selector-button

Demonstrates styling the native file input button using the `::file-selector-button` pseudo-element. Customize the "Choose File" button to match your design system.

## Usage

```css
input[type="file"]::file-selector-button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: #6366f1;
  color: #fff;
  border: none;
  cursor: pointer;
}
```

## What's Shown

- **Base style** — custom padding, border, background, and hover state
- **Shape variants** — rounded (99px), compact (4px), pill (99px with outline)
- **Visual variants** — solid, outline, gradient, ghost
- **Disabled state** — reduced opacity and muted colors via `:disabled::file-selector-button`

## Key Insight

`::file-selector-button` is the only way to style the native file picker button cross-browser. The pseudo-element accepts most standard CSS properties (padding, border, background, font, etc.) and supports `:hover`, `:active`, and `:disabled` states through the parent input.

## Browser Support

- Chrome 89+, Edge 89+, Firefox 82+, Safari 16+
- Works across all modern browsers with consistent syntax

## Submission

- **Issue:** #12303
- **Files:** style.css, demo.html
