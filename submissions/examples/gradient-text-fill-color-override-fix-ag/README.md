# [BUG FIX] .ease-gradient-text -webkit-text-fill-color scoping

## What does this do?
Resolves issues where gradient text inherits properties to nested elements.

## How is it used?
```html
<span class="ease-gradient-text">Text <small>Child</small></span>
```

## Why is it useful?
Ensures nested layout components remain visible.

## Fixes
Fixes #10935
