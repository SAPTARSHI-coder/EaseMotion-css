## What does this do?

Provides `ease-line-clamp` utility classes for multi-line text truncation. Each class limits text to a specific number of lines and appends an ellipsis.

## How is it used?

```html
<p class="ease-line-clamp-2-za">This text will be truncated after 2 lines.</p>
<p class="ease-line-clamp-none-za">
  This disables line clamping and shows full text.
</p>
```

## Why is it useful?

EaseMotion currently only has single-line truncation (`.ease-truncate`). These classes add multi-line `-webkit-line-clamp` support for card descriptions, article previews, and any content where you need uniform block heights with text overflow control.
