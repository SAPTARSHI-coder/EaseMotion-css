## What does this do?

Provides `ease-word-break` / `ease-overflow-wrap` / `ease-hyphens` utility classes for controlling text wrapping, breaking, and hyphenation behavior.

## How is it used?

```html
<p class="ease-word-break-all-za">LongUnbrokenStringHereWillBreak</p>
<p class="ease-overflow-wrap-anywhere-za">Overflowing content wraps anywhere</p>
<p class="ease-hyphens-auto-za" lang="en">
  Hyphenation is applied automatically
</p>
```

## Why is it useful?

EaseMotion core has no word-break, overflow-wrap, or hyphens utilities. These are essential for handling long content (URLs, code snippets, user-generated text) in cards, tables, and responsive layouts where text overflow needs to be controlled.
