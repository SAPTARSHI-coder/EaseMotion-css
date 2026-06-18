# [BUG FIX] .ease-snap-x and .ease-snap-y dual custom property

## What does this do?
Resolves scroll-snap-type syntax errors caused by double variable interpolation in CSS shorthand.

## How is it used?
```html
<div class="ease-snap-x-mandatory">Children</div>
```

## Why is it useful?
Guarantees cross-browser support for scroll-snap layouts on iOS Safari and Firefox.

## Fixes
Fixes #10933
