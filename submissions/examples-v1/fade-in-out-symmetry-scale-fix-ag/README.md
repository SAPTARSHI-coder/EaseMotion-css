# [BUG FIX] .ease-fade-out animation scaling asymmetry resolution

## What does this do?
Resolves visual scaling mismatch between fade-in and fade-out animation pairs.

## How is it used?
```html
<div class="ease-fade-in ease-fade-out">Animated Card</div>
```

## Why is it useful?
Establishes symmetric entry and exit animation styles for modal and banner elements.

## Fixes
Fixes #10939
