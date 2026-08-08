# Truncate Multi-Line Clamp Utility Classes

A set of reusable SCSS mixins and utility classes for truncating text after
a fixed number of lines, with an ellipsis — using `-webkit-line-clamp`.
Useful for card descriptions, previews, excerpts, and any UI that needs
predictable text overflow across multiple lines.

## Files

- `_truncate-multi-line-clamp-utility-classes.scss` — mixin, clamp scale
  map, and generated utility classes.
- `README.md` — this documentation.

## Usage

### As a mixin

```scss
@import 'truncate-multi-line-clamp-utility-classes';

.card-description {
  @include line-clamp(3);
}

.article-excerpt {
  @include line-clamp(5);
}
```

### As utility classes

```html
<p class="line-clamp-2">
  This text will be truncated after two lines, with an ellipsis added
  automatically if it overflows the available space.
</p>

<p class="line-clamp-4">
  Longer preview text truncated after four lines — handy for article
  cards or search result snippets.
</p>

<!-- Reset clamping to restore normal text flow -->
<p class="line-clamp-3 line-clamp-none">
  This text is not truncated.
</p>
```

## Mixin reference

| Mixin        | Parameters       | Description                                     |
|--------------|------------------|--------------------------------------------------|
| `line-clamp` | `$lines` (default: `3`) | Truncates text after `$lines` lines with an ellipsis. |

## Utility classes

| Class              | Lines shown |
|---------------------|-------------|
| `.line-clamp-1`      | 1           |
| `.line-clamp-2`      | 2           |
| `.line-clamp-3`      | 3           |
| `.line-clamp-4`      | 4           |
| `.line-clamp-5`      | 5           |
| `.line-clamp-none`   | Resets clamping — text flows normally |

## Compiled CSS example

```css
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.line-clamp-none {
  display: block;
  -webkit-line-clamp: unset;
  -webkit-box-orient: unset;
  overflow: visible;
  text-overflow: clip;
}
```

## Browser support

`-webkit-line-clamp` is supported in all modern browsers (Chrome, Firefox 68+, Safari, Edge). Despite the `-webkit-` prefix, it now works cross-browser without additional prefixing in current stable releases.