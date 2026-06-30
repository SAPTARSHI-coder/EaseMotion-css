# ease-text-balance — Text Wrapping Utility Classes

## What does this do?

Provides CSS text-wrapping utilities for better typographic control: balanced headlines, orphan-free paragraphs, truncation, and multi-line clamping.

## How is it used?

```html
<h2 class="ease-text-balance">
  A perfectly balanced heading across all screen sizes
</h2>
<p class="ease-text-pretty">No orphaned words at the end of my paragraphs.</p>
<p class="ease-text-truncate">Long text gets cut off with ellipsis…</p>
<p class="ease-text-clamp-2">This text will be clamped to exactly two lines.</p>
```

### Classes

| Class                 | Property                                       | Use case                      |
| --------------------- | ---------------------------------------------- | ----------------------------- |
| `.ease-text-balance`  | `text-wrap: balance`                           | Center-aligned headings       |
| `.ease-text-pretty`   | `text-wrap: pretty`                            | Body text (orphan prevention) |
| `.ease-text-nowrap`   | `white-space: nowrap`                          | Labels, badges, inline items  |
| `.ease-text-truncate` | `overflow: hidden` + `text-overflow: ellipsis` | Single-line truncation        |
| `.ease-text-clamp-2`  | `-webkit-line-clamp: 2`                        | Two-line clamp                |
| `.ease-text-clamp-3`  | `-webkit-line-clamp: 3`                        | Three-line clamp              |
| `.ease-text-clamp-4`  | `-webkit-line-clamp: 4`                        | Four-line clamp               |
| `.ease-text-clamp-5`  | `-webkit-line-clamp: 5`                        | Five-line clamp               |
| `.ease-text-hyphens`  | `hyphens: auto`                                | Automatic hyphenation         |

## Browser Support

- `text-wrap: balance` / `pretty`: Chrome 114+, Safari 17+, Firefox 121+
- `-webkit-line-clamp`: All modern browsers
- `hyphens: auto`: All modern browsers (requires `lang` attribute)
