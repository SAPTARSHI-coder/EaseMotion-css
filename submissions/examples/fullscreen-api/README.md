# :fullscreen & ::backdrop API

Demonstrates styling elements in fullscreen mode using the `:fullscreen` pseudo-class and the `::backdrop` pseudo-element. Works with videos, cards, and any block-level element.

## Usage

```css
/* Style the fullscreen element */
.element:fullscreen {
  background: #0f172a;
  border-color: #6366f1;
}

/* Style the backdrop (area behind the fullscreen element) */
.element::backdrop {
  background: linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,27,75,0.95));
  backdrop-filter: blur(8px);
}
```

## What's Shown

- **Video player** — border glow and backdrop gradient in fullscreen
- **Card fullscreen** — entire element goes fullscreen with custom backdrop
- **Dark variant** — deeper background, no backdrop blur
- **::backdrop** — gradient overlays and blur behind the fullscreen element

## Key Insight

`:fullscreen` lets you redesign your layout for the fullscreen viewport (larger typography, removed chrome, centered content). `::backdrop` is the only way to style the area behind the fullscreen element — perfect for dimming overlays, gradients, or blur effects.

Only one element can be fullscreen at a time. The browser adds its own "Press Esc to exit fullscreen" overlay that cannot be styled.

## Browser Support

- Chrome 71+, Edge 79+, Firefox 64+, Safari 16+
- `::backdrop` supported in all fullscreen-supporting browsers

## Submission

- **Issue:** #12305
- **Files:** style.css, demo.html
