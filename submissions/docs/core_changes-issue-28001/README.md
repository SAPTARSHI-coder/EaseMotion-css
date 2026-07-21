# ease-column-rule — Column Rule Utility Classes

## What does this do?

Controls the `column-rule` — the line drawn between columns in multi-column layouts. Sets width, style, and color.

## How is it used?

```html
<div class="ease-columns-2 ease-column-rule-solid ease-column-rule-color-primary">
  <p>...</p>
  <p>...</p>
</div>
```

### Classes

| Class | Value |
|---|---|
| `.ease-column-rule-none` | `column-rule: none` |
| `.ease-column-rule-solid` | `column-rule-style: solid` |
| `.ease-column-rule-dashed` | `column-rule-style: dashed` |
| `.ease-column-rule-dotted` | `column-rule-style: dotted` |
| `.ease-column-rule-thin` | `column-rule-width: 1px` |
| `.ease-column-rule-medium` | `column-rule-width: 2px` |
| `.ease-column-rule-thick` | `column-rule-width: 4px` |
| `.ease-column-rule-color-primary` | `column-rule-color: var(--ease-color-primary)` |
| `.ease-column-rule-color-muted` | `column-rule-color: var(--ease-color-muted)` |
