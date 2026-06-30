# ease-highlight — Issue #23960

## What

Utility classes for controlling the `::selection` pseudo-element appearance and styling `<mark>` tags consistently.

| Class                     | Effect                                                                     |
| ------------------------- | -------------------------------------------------------------------------- |
| `.ease-highlight-primary` | Blue selection background with white text (`#3b82f6` / `#ffffff`)          |
| `.ease-highlight-warm`    | Amber selection background with dark text (`#f59e0b` / `#0f172a`)          |
| `.ease-highlight-none`    | Transparent selection (selection is invisible)                             |
| `.ease-mark`              | Consistent `<mark>` styling available as a class for non-`<mark>` elements |

Custom properties:

- `--ease-highlight-primary-bg` / `--ease-highlight-primary-color`
- `--ease-highlight-warm-bg` / `--ease-highlight-warm-color`

## How

Wrap any container with the selection class:

```html
<article class="ease-highlight-primary">
  Select any text in here for blue highlight.
</article>
```

For `<mark>` elements, styling comes out of the box. Use `.ease-mark` for other elements:

```html
<span class="ease-mark">highlighted text</span>
```

Customize variables at the root or per-element:

```css
:root {
  --ease-highlight-primary-bg: #a78bfa;
}
```

## Why

`::selection` is the only way to style how selected text appears, but the defaults often clash with dark themes. These utilities make it easy to apply branded or accessible selection colors. The `<mark>` styling ensures highlighted text remains readable on dark backgrounds. The `none` variant is useful for UI panels, code blocks, or design mockups where selection should not draw attention.
