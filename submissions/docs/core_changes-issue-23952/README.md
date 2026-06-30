# ease-aspect-ratio

## What does this do?

Utility classes for CSS `aspect-ratio` property. Common ratios: square (1/1), video (16/9), portrait (3/4), wide (21/9), auto, and custom via `--ease-aspect` variable.

## How is it used?

```html
<div class="ease-aspect-video">...</div>
<div class="ease-aspect-custom" style="--ease-aspect: 4/3">...</div>
```

## Why is it useful?

Replaces inline `aspect-ratio` styles with semantic utility classes for responsive images, embeds, and containers.
