# Text Truncation & Line-Clamp Utilities

Utility classes for single-line truncation and multi-line line-clamp for EaseMotion CSS.

## Classes

| Class                | Description                               |
| -------------------- | ----------------------------------------- |
| `.ease-truncate`     | Single-line text truncation with ellipsis |
| `.ease-line-clamp-1` | Clamp text to 1 line                      |
| `.ease-line-clamp-2` | Clamp text to 2 lines                     |
| `.ease-line-clamp-3` | Clamp text to 3 lines                     |
| `.ease-line-clamp-4` | Clamp text to 4 lines                     |
| `.ease-line-clamp-5` | Clamp text to 5 lines                     |
| `.ease-line-clamp-6` | Clamp text to 6 lines                     |

## Usage

```html
<p class="ease-truncate">Long text that will be truncated...</p>
<p class="ease-line-clamp-3">Multi-line text clamped to 3 lines...</p>
```

Uses both `-webkit-line-clamp` (broad compatibility) and standard `line-clamp` (modern browsers).

Fixes #12455
