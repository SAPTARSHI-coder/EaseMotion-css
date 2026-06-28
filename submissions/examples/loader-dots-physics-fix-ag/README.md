# [BUG FIX] .ease-loader-dots animation direction physics

## What does this do?
Resolves erratic speed patterns in loading dots by removing alternate loop directions.

## How is it used?
```html
<div class="ease-loader-dots"><span class="ease-loader-dot"></span></div>
```

## Why is it useful?
Ensures fluid, constant visual animations on loading symbols.

## Fixes
Fixes #10970
