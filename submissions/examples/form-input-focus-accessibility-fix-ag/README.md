# [BUG FIX] .ease-input focus-visible outline states

## What does this do?
Resolves focus-state conflicts in form controllers on keyboard navigation/High Contrast modes.

## How is it used?
```html
<input class="ease-input" type="text">
```

## Why is it useful?
Maintains keyboard focus indicators for accessibility and WCAG conformance.

## Fixes
Fixes #10938
