# [BUG FIX] .ease-navbar mobile menu does not close on outside clicks

## What does this do?
Enables WCAG-compliant mobile navbar collapse by implementing outside-click event boundaries.

## How is it used?
```html
document.addEventListener("click", event => { ... })
```

## Why is it useful?
Guarantees reliable user interface behavior on small screen states.

## Fixes
Fixes #9878
