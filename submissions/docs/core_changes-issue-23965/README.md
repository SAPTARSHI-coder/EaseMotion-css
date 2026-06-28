# ease-counter — Issue #23965

## What

Utility classes for **CSS counters** — a CSS mechanism for auto-numbering elements without JavaScript.

| Class | Effect |
|---|---|
| `.ease-counter-list` | Resets the counter on the container (`counter-reset`) and removes default list styling |
| `.ease-counter-item` | Increments the counter (`counter-increment`) and displays the number via `::before` |

Custom properties:
- `--ease-counter-name` (default `ease-counter`) — the counter identifier
- `--ease-counter-prefix` (default `''`) — text before the number
- `--ease-counter-suffix` (default `'. '`) — text after the number
- `--ease-counter-weight` (default `700`) — font weight of the number
- `--ease-counter-color` (default `#60a5fa`) — color of the number

## How

Wrap content in `.ease-counter-list` (use `<ol>` for semantic meaning, but any block container works). Apply `.ease-counter-item` to each numbered child:

```html
<ol class="ease-counter-list">
  <li class="ease-counter-item">First item</li>
  <li class="ease-counter-item">Second item</li>
</ol>
```

Override variables for custom numbering styles:

```html
<ol class="ease-counter-list" style="--ease-counter-prefix: 'Chapter '; --ease-counter-suffix: ': ';">
  <li class="ease-counter-item">Introduction</li>
</ol>
```

## Why

CSS counters provide semantic, accessible auto-numbering without JavaScript. They are ideal for documentation, tutorials, multi-step forms, and any ordered content where the numbering should be automatic and maintainable. These utilities abstract away the verbose `counter-reset`/`counter-increment` syntax and provide easy theming via custom properties.
