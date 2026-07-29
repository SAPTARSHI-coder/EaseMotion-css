# ease-drop-cap — Issue #23961

## What

Utility classes for styling the `::first-letter` pseudo-element as a **drop cap** — a large decorative initial letter at the start of a paragraph.

| Class | Effect |
|---|---|
| `.ease-drop-cap` | Standard raised drop cap (floated left, larger font) |
| `.ease-drop-cap-circle` | Drop cap inside a circular bordered background |
| `.ease-drop-cap-outlined` | Drop cap with only an outline (transparent fill with text stroke) |

Custom properties:
- `--ease-drop-cap-size` (default `3em`) — font size of the drop cap
- `--ease-drop-cap-color` (default `#60a5fa`) — color / stroke color
- `--ease-drop-cap-font` (default `'Georgia', serif`) — font family
- `--ease-drop-cap-weight` (default `700`) — font weight

## How

Wrap a paragraph (or multiple paragraphs) in a container and apply the class:

```html
<div class="ease-drop-cap">
  <p>Once upon a time...</p>
</div>
```

Override variables per instance:

```html
<div class="ease-drop-cap-circle" style="--ease-drop-cap-color: #34d399; --ease-drop-cap-size: 4em;">
  <p>Circular green drop cap...</p>
</div>
```

## Why

Drop caps are a classic typographic technique that adds visual rhythm and elegance to long-form text. Rather than requiring a `<span>` wrapper around the first letter, the `::first-letter` pseudo-element is used, keeping the markup clean. These utilities provide three distinct styles and full customization via CSS custom properties, making drop caps trivial to add to any article, blog post, or documentation page.
