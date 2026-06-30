# @container Style Queries

Demonstrates CSS Container Style Queries using `@container style()` syntax. Cards adapt their appearance based on custom properties set on their parent container — no classes to toggle, no JavaScript needed.

## Usage

Set a custom property on the container element, then query it with `@container`:

```css
/* Container */
.card {
  container-name: card;
}

/* Query */
@container card style(--card-theme: dark) {
  .card {
    background: #1e293b;
    color: #fff;
  }
}
```

## What's Shown

- **Theme variants** — `--card-theme` toggles between default, dark, vibrant, and pastel
- **Accent colors** — `--accent` drives border color and badge style
- **Spacing density** — `--density` controls padding and font size (compact / comfortable / spacious)

## Key Insight

Unlike traditional class-based theming, `style()` queries let any CSS custom property drive visual changes. This decouples styling from markup and enables component authors to expose theme knobs without JavaScript.

## Browser Support

- Chrome 111+, Edge 111+, Safari 18+, Firefox 131+
- Fallback styles are included for unsupported browsers

## Submission

- **Issue:** #12299
- **Files:** style.css, demo.html
