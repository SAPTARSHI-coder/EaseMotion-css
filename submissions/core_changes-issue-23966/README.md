# ease-image

## What
CSS utility classes that pair with modern HTML image attributes for performance-optimized images:

| Class | CSS Effect | Recommended HTML |
|-------|-----------|------------------|
| `.ease-image-lazy` | `content-visibility: auto` | `loading="lazy" decoding="async"` |
| `.ease-image-eager` | `content-visibility: visible` | `loading="eager" decoding="sync"` |
| `.ease-image-priority` | `content-visibility: visible` | `fetchpriority="high"` |
| `.ease-image-async` | `content-visibility: auto` | `decoding="async"` |
| `.ease-image-sync` | `content-visibility: visible` | `decoding="sync"` |

## How
```html
<img class="ease-image-lazy" loading="lazy" decoding="async" src="photo.jpg" alt="">
<img class="ease-image-priority" fetchpriority="high" src="hero.jpg" alt="">
```
1. Include `style.css`.
2. Apply the class to `<img>` elements.
3. Pair with the corresponding HTML attribute for full effect.

## Why
Ships performance best-practices as utility classes. The CSS hints (`content-visibility`) tell the browser about rendering priority before images load, while the documented HTML attributes control actual loading behavior.
