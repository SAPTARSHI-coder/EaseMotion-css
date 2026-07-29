## What does this do?

Provides `ease-contain` utility classes for the CSS `contain` property — limiting the scope of layout, style, paint, and size to improve rendering performance.

## How is it used?

```html
<div class="ease-contain-layout-za">Isolated layout</div>
<div class="ease-contain-paint-za">Clipped paint bounds</div>
<div class="ease-contain-strict-za">Fully isolated</div>
```

## Why is it useful?

EaseMotion core has no CSS contain utilities. The `contain` property tells the browser that specific parts of the page are independent, allowing rendering optimizations that significantly improve performance on complex UIs.
