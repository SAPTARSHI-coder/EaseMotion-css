# Card Glass Safari Backdrop Fix

## What does this do?
Fixes `.ease-card-glass` glassmorphism not rendering on Safari iOS 16 by adding the required `-webkit-backdrop-filter` vendor prefix alongside the standard `backdrop-filter` property.

## How is it used?
```html
<div class="card glass">
  <p>Glass card content</p>
</div>
```

## Why is it useful?
Safari iOS 16 requires the `-webkit-backdrop-filter` prefix. Without it, the glass effect is completely absent on millions of iPhone/iPad devices. This fix ensures the frosted glass visual works across all major browsers.

## Fixes
Fixes #9842
