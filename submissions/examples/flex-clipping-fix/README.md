# Flexbox Shrinkage & Text Clipping Guard

## What does this do?

This utility resolves flexbox text clipping overflows and flex-item shrinkage collapse in row layouts. It prevents long text strings from breaching card boundaries by applying layout shields and intelligent truncation.

## How is it used?

Wrap text nodes inside a guarded container and apply the text shield classes:

```html
<div class="ease-flex-row-container">
  <!-- Keep fixed dimensions with flex-shrink: 0 -->
  <div class="badge-icon">ICON</div>

  <!-- Apply the guard wrapper to enable container shrinking -->
  <div class="ease-flex-text-guard">
    <h4>Your very long heading text here</h4>
    <p>Your description text here...</p>
  </div>
</div>
```

## Why is it useful?

- **Restricts Overflow Breaches**: Replaces the default `min-width: auto` behavior of flex items (which prevents items from shrinking smaller than their contents) with `min-width: 0`, forcing parent container dimensions to be respected.
- **Intelligent Ellipsis Truncation**: Truncates text fields gracefully with `text-overflow: ellipsis` when space is constrained.
- **Graphic Shape Lock**: Employs `flex-shrink: 0` on icons and avatars to prevent WebKit and Blink layout engines from distorting circles or grids during narrow viewports.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to inspect the side-by-side diagnostic check and resize behaviors.
