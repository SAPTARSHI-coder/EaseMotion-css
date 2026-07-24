# ease-font-synthesis — Font Synthesis Utility Classes

Utility classes for `font-synthesis`, controlling whether the browser is allowed to synthesize (fake) bold or italic styles when the active font lacks a true bold/italic variant. No `font-synthesis` declarations currently exist anywhere in `core/` or `components/`.

## Classes

| Class | `font-synthesis` |
|-------|---------------------|
| `.ease-font-synthesis-auto` | `weight style` |
| `.ease-font-synthesis-none` | `none` |
| `.ease-font-synthesis-weight-only` | `weight` |
| `.ease-font-synthesis-style-only` | `style` |

## Usage

```html
<!-- Brand wordmark — prevent faux-bold distortion -->
<span class="logo ease-font-synthesis-none">BrandName</span>

<!-- Font with true italic but no true bold -->
<strong class="ease-font-synthesis-weight-only">Important</strong>

<!-- Font with true bold but no true italic -->
<em class="ease-font-synthesis-style-only">Emphasis</em>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-font-synthesis-auto` | Default — let the browser fake missing styles as needed |
| `.ease-font-synthesis-none` | Logotypes, brand wordmarks, icon fonts |
| `.ease-font-synthesis-weight-only` | Fonts with a true italic but no true bold face |
| `.ease-font-synthesis-style-only` | Fonts with a true bold but no true italic face |

## Notes

- No `font-synthesis` declarations exist anywhere in `core/` or `components/` today
- Effect is only visible when the active font lacks a true bold or italic face
- Supported in all modern browsers

## Why it fits EaseMotion CSS

EaseMotion CSS has typography utilities for smoothing, rendering, and decoration but no control over synthetic bold/italic generation. These classes complete the typography control system and prevent faux-style distortion on custom fonts.

Closes #11600
