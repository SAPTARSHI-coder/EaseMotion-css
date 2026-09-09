# ease-shape-margin — CSS shape-margin Utility Classes

Utility classes for the CSS `shape-margin` property — controls the gap between a floated element's `shape-outside` boundary and the surrounding text content.

## Classes

| Class | Value | Token |
|-------|-------|-------|
| `.ease-shape-margin-0` | `0` | — |
| `.ease-shape-margin-1` | `0.25rem` | `--ease-space-1` |
| `.ease-shape-margin-2` | `0.5rem` | `--ease-space-2` |
| `.ease-shape-margin-3` | `0.75rem` | `--ease-space-3` |
| `.ease-shape-margin-4` | `1rem` | `--ease-space-4` |
| `.ease-shape-margin-5` | `1.25rem` | `--ease-space-5` |
| `.ease-shape-margin-6` | `1.5rem` | `--ease-space-6` |
| `.ease-shape-margin-8` | `2rem` | `--ease-space-8` |
| `.ease-shape-margin-10` | `2.5rem` | `--ease-space-10` |
| `.ease-shape-margin-12` | `3rem` | `--ease-space-12` |
| `.ease-shape-margin-16` | `4rem` | `--ease-space-16` |

## Usage

```html
<!-- Circle float with comfortable text gap -->
<img
  src="avatar.jpg"
  alt="Profile"
  style="float: left; border-radius: 50%; shape-outside: circle(50%); margin-right: 1rem;"
  class="ease-shape-margin-4"
/>
<p>Text wraps around the circle with 1rem of breathing room...</p>
```

## Requirements

`shape-margin` only works on elements with:
- `float: left` or `float: right`
- A valid `shape-outside` value (e.g. `circle()`, `ellipse()`, `polygon()`, `url()`)

## Browser Support

`shape-margin` is supported in all modern browsers (Chrome 37+, Firefox 62+, Safari 10.1+, Edge 79+).

## Why it fits EaseMotion CSS

EaseMotion CSS uses a consistent `--ease-space-*` scale for all spacing. These utilities extend that scale to `shape-margin` so editorial layouts with non-rectangular floats use the same spacing tokens as the rest of the framework.

Closes #11526
