# forced-colors

Demonstrates UI components that adapt to Windows High Contrast mode using the `forced-colors` media query and CSS system color keywords (`Canvas`, `ButtonText`, `Highlight`, etc.).

## Usage

```css
@media (forced-colors: active) {
  .card {
    border: 2px solid CanvasText;
    background: Canvas;
    color: CanvasText;
  }
}
```

## What's Shown

- **Buttons** — override custom colors with `ButtonFace`/`ButtonText`/`Highlight` system colors
- **Cards** — selected state uses `Highlight` for border/outline
- **Badges** — switch to bordered style with `ButtonText`
- **Form controls** — accent color adapts to `Highlight`
- **Progress bar** — uses `Highlight`/`HighlightText`
- **System color table** — visual reference for available system color keywords

## Key Insight

When `forced-colors` is active, most CSS colors are overridden by the user's system theme. Use `forced-colors: active` to restore intentional visual structure (borders, outlines, icons) that the browser might otherwise strip away. CSS system color keywords (`Canvas`, `CanvasText`, `ButtonText`, `Highlight`, `GrayText`, etc.) ensure your design respects the user's chosen high-contrast scheme.

## Browser Support

- Chrome 89+, Edge 89+, Firefox 101+, Safari 15.4+
- Only applies on Windows with High Contrast mode enabled

## Submission

- **Issue:** #12302
- **Files:** style.css, demo.html
