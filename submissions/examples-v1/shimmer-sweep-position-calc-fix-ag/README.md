# [BUG FIX] .ease-shimmer-sweep background-position scaling calculations

## What does this do?
Resolves shimmer gradient positioning logic errors on elements with custom background width values.

## How is it used?
```html
<div class="ease-shimmer-sweep">Skeleton Content</div>
```

## Why is it useful?
Guarantees smooth skeleton loaders that scale cleanly across varying element widths.

## Fixes
Fixes #10940
