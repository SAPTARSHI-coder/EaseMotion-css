# ease-text-overflow utilities

Multi-line line-clamp and word-break utility classes for truncating card copy and wrapping long unbroken strings.

## Line-clamp classes

| Class | Lines Shown | Notes |
|-------|-------------|-------|
| `.ease-line-clamp-1` | 1 | Single-line preview with ellipsis |
| `.ease-line-clamp-2` | 2 | Short card descriptions |
| `.ease-line-clamp-3` | 3 | Slightly longer preview text |
| `.ease-line-clamp-none` | All | Removes clamping and restores normal block flow |

## Word-break classes

| Class | Properties Set | When to Use |
|-------|----------------|-------------|
| `.ease-break-words` | `overflow-wrap: break-word` | Break long words only when needed; good default for URLs in prose |
| `.ease-break-all` | `word-break: break-all` | Force breaks anywhere; useful for hash strings, paths, or narrow columns |
| `.ease-break-normal` | `word-break: normal; overflow-wrap: normal` | Restore default wrapping behavior |

## Usage

```html
<article class="card">
  <h3>Release notes</h3>
  <p class="ease-line-clamp-2">
    A much longer description that should be truncated after two lines with an ellipsis.
  </p>
</article>
```

## Browser support

The `.ease-line-clamp-*` utilities rely on `-webkit-box`, `-webkit-line-clamp`, and `-webkit-box-orient`. Despite the `-webkit-` prefix, this pattern has full cross-browser support in all modern evergreen browsers (Chrome, Firefox, Safari, Edge).
