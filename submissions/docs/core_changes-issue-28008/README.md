# ease-list — List Style Utility Classes

## What does this do?

Provides CSS `list-style` utility classes for common list marker types — disc, circle, square, decimal, roman, alpha, none, and inline reset.

## How is it used?

```html
<ul class="ease-list-disc">
  <li>Item with disc marker</li>
</ul>
<ol class="ease-list-decimal">
  <li>Numbered item</li>
</ol>
<ul class="ease-list-none">
  <li>No marker (reset)</li>
</ul>
```

### Classes

| Class | Property |
|---|---|
| `.ease-list-none` | `list-style: none` |
| `.ease-list-disc` | `list-style: disc` |
| `.ease-list-circle` | `list-style: circle` |
| `.ease-list-square` | `list-style: square` |
| `.ease-list-decimal` | `list-style: decimal` |
| `.ease-list-lower-roman` | `list-style: lower-roman` |
| `.ease-list-upper-roman` | `list-style: upper-roman` |
| `.ease-list-lower-alpha` | `list-style: lower-alpha` |
| `.ease-list-upper-alpha` | `list-style: upper-alpha` |
| `.ease-list-inside` | `list-style-position: inside` |
| `.ease-list-outside` | `list-style-position: outside` (default) |
