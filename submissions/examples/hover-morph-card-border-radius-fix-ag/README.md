# [BUG FIX] .ease-hover-morph-card hover border-radius

## What does this do?
Resolves non-square elements morphing into ellipses by capping maximum radius curves.

## How is it used?
```html
<div class="ease-hover-morph-card">Card</div>
```

## Why is it useful?
Prevents distortion of component margins on standard rectangular panels.

## Fixes
Fixes #10936
