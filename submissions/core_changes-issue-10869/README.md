# ease-input `[type="file"]`

## What does this do?

Provides consistent, themeable styling for `<input type="file">` using the `::file-selector-button` pseudo-element. File inputs match the sizing, padding, and border of regular `.ease-input` text inputs, with customizable button variants.

## How is it used?

Add the `ease-input` class to any file input:

```html
<input class="ease-input" type="file" />
```

The `::file-selector-button` is automatically styled as a neutral button. Add variant classes for color:

```html
<input class="ease-input is-primary" type="file" />
<input class="ease-input is-success" type="file" />
```

Use `ease-input-sm` for a smaller size:

```html
<input class="ease-input ease-input-sm" type="file" />
```

### Variants

| Class | Button style |
| --- | --- |
| `ease-input` (default) | Outline / neutral |
| `ease-input is-primary` | Filled indigo |
| `ease-input is-success` | Filled green |
| `ease-input ease-input-sm` | Smaller padding + font |

## Why is it useful?

File inputs are notoriously difficult to style consistently across browsers. The `::file-selector-button` pseudo-element provides a standardized way to style the upload button portion of file inputs, giving developers a themeable, accessible file upload experience that matches the rest of the form.

## Features

- Consistent sizing with regular text inputs
- `::file-selector-button` styling with hover and active states
- Color variants: default (outline), primary (indigo), success (green)
- Small size variant (`ease-input-sm`)
- Respects `prefers-color-scheme` via custom properties
- Pure CSS, no JavaScript
