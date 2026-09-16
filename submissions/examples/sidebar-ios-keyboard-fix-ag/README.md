# [BUG FIX] .ease-sidebar collapses on iOS virtual keyboard

## What does this do?
Fixes sidebar height collapsing or shifting on iOS when the virtual keyboard is toggled, by using dynamic viewport height (100dvh) and logical positioning.

## How is it used?
```html
<div class="ease-sidebar">Sidebar content</div>
```

## Why is it useful?
Implements modern CSS dynamic viewport units to fix viewport-resize issues on mobile Safari/Chrome.

## Fixes
Fixes #9847
