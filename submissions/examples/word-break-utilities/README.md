# word-break-utilities

Word break and whitespace utility classes for EaseMotion CSS.

## Usage

```html
<p class="ease-break-words">Very long unbreakable text...</p>
<p class="ease-truncate">Text that gets cut off with ellipsis...</p>
```

## Classes

| Class | CSS Property |
|---|---|
| `ease-break-normal` | word-break: normal |
| `ease-break-words` | overflow-wrap: break-word |
| `ease-break-all` | word-break: break-all |
| `ease-break-keep` | word-break: keep-all |
| `ease-truncate` | overflow: hidden + ellipsis |
| `ease-whitespace-normal` | white-space: normal |
| `ease-whitespace-nowrap` | white-space: nowrap |
| `ease-whitespace-pre` | white-space: pre |
| `ease-whitespace-pre-line` | white-space: pre-line |
| `ease-whitespace-pre-wrap` | white-space: pre-wrap |
| `ease-hyphens-none` | hyphens: none |
| `ease-hyphens-auto` | hyphens: auto |
| `ease-hyphens-manual` | hyphens: manual |

## Features
- Full word break control
- Whitespace handling utilities
- Hyphenation control
- Truncate with ellipsis
- Follows ease- naming convention