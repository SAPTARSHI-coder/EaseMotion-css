# ease-orphans — Orphans Utility Classes

Utility classes for the `orphans` property, controlling the minimum number of lines of a block container that must remain at the bottom of a fragmented region (page or column) before a break. Most relevant for print stylesheets and multi-column layouts. No `orphans`/`widows` declarations currently exist anywhere in `core/` or `components/`.

## Classes

| Class | `orphans` |
|-------|-----------|
| `.ease-orphans-1` | `1` |
| `.ease-orphans-2` | `2` |
| `.ease-orphans-3` | `3` |
| `.ease-orphans-4` | `4` |

## Usage

```html
<!-- Print stylesheet / editorial article -->
<article class="ease-orphans-3">...</article>

<!-- Multi-column blog layout -->
<div class="blog-columns ease-orphans-2">...</div>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-orphans-1` | Browser default, no real protection needed |
| `.ease-orphans-2` | Multi-column layouts with shorter paragraphs |
| `.ease-orphans-3` | Print stylesheets, editorial/article content (common minimum) |
| `.ease-orphans-4` | Long-form print documents needing stricter control |

## Notes

- `orphans` only takes effect when content is fragmented across columns or pages (e.g. `column-count`, print media)
- No `orphans`/`widows` declarations exist anywhere in `core/` or `components/` today
- Supported in all modern browsers; most relevant for `@media print` contexts

## Why it fits EaseMotion CSS

EaseMotion CSS has multi-column and print-adjacent utilities elsewhere but no fragmentation control for paragraph breaks. These classes round out the typography/print utility set.

Closes #11559
