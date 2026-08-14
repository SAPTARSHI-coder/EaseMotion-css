# [BUG FIX] .ease-reveal initial scroll-timeline visibility

## What does this do?
Resolves scroll-timeline revealing elements before scroll starts by scoping opacity values correctly.

## How is it used?
```html
<div class="ease-reveal">Content</div>
```

## Why is it useful?
Aligns CSS scroll-driven reveal transitions with intended progress parameters.

## Fixes
Fixes #10932
