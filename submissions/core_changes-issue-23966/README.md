# ease-image

## What does this do?
CSS utility classes that pair with modern HTML image attributes for performance-optimized images:

| Class | CSS Effect | Recommended HTML |
|-------|-----------|------------------|
| `.ease-image-lazy` | `content-visibility: auto` | `loading="lazy" decoding="async"` |
| `.ease-image-eager` | `content-visibility: visible` | `loading="eager" decoding="sync"` |
| `.ease-image-priority` | `content-visibility: visible` | `fetchpriority="high"` |
| `.ease-image-async` | `content-visibility: auto` | `decoding="async"` |
| `.ease-image-sync` | `content-visibility: visible` | `decoding="sync"` |

## How is it used?
```html
<img class="ease-image-lazy" loading="lazy" decoding="async" src="photo.jpg" alt="">
<img class="ease-image-priority" fetchpriority="high" src="hero.jpg" alt="">
<img class="ease-image-sync" decoding="sync" src="critical.png" alt="">
```

## Why is it useful?
Ships performance best-practices as utility classes. The CSS hints (`content-visibility`) tell the browser about rendering priority before images load, while the doc'd HTML attributes control actual loading behavior.
