# Variable Font All-Axes Animation

Animates `font-variation-settings` across wght, wdth, and opsz axes simultaneously using `@property` typed custom properties.

## Classes

| Class | Axes animated |
|---|---|
| `ease-vf-kinetic` | wght + wdth + opsz simultaneously |
| `ease-vf-weight` | wght only |
| `ease-vf-width` | wdth only |
| `ease-vf-opsz` | opsz only |

## Why `@property` is required

Without `@property` registration, `font-variation-settings` is treated as a discrete property — the browser snaps between keyframe values instead of interpolating. Registering each axis value as `syntax: '<number>'` enables smooth frame-by-frame tweening.

## Usage

```html
<div class="ease-vf-kinetic">EaseMotion</div>
```

Requires a variable font. Demo uses Roboto Flex via Google Fonts.

Closes #9599
