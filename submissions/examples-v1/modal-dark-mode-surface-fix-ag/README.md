# [BUG FIX] .ease-modal uses --ease-color-surface background in dark mode

## What does this do?
Resolves modal background contrast errors in dark mode layouts.

## How is it used?
```html
<div class="ease-modal">Modal</div>
```

## Why is it useful?
Improves readability and modal separation against page backdrops.

## Fixes
Fixes #10931
