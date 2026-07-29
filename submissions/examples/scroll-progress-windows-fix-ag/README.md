# [BUG FIX] .ease-scroll-progress calculation fails to hit 100% on Windows

## What does this do?
Fixes scroll progress indicator not reaching 100% on Windows because of scrollbar fractional math inconsistencies.

## How is it used?
```html
<div class="scroll-progress-bar"></div>
```

## Why is it useful?
Corrects cross-platform scroll progress calculation issues.

## Fixes
Fixes #9849
