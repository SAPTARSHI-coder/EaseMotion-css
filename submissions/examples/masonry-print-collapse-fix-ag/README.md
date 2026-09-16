# [BUG FIX] .ease-masonry collapses completely on print media

## What does this do?
Fixes grid/column masonry collapse on print by overriding layout properties to block styling inside @media print media queries.

## How is it used?
```html
@media print { .masonry { display: block; } }
```

## Why is it useful?
Implements standard fallback layout rules to guarantee print readability.

## Fixes
Fixes #9850
