# Fix ease-divider Flex Collapse

## What does this do?
Adds `flex-shrink: 0` and `min-height` to `.ease-divider` to prevent the
divider from collapsing to zero height inside flex-column containers.

## How is it used?
```html
<!-- Horizontal -->
<div class="ease-divider"></div>
<div class="ease-divider">or</div>
<!-- Vertical -->
<div class="ease-divider ease-divider--vertical"></div>
```

## Why is it useful?
Without `flex-shrink: 0`, a flex child with no intrinsic height (like a
divider that is purely presentational) can shrink to 0 and disappear.
Fixes: #35814
