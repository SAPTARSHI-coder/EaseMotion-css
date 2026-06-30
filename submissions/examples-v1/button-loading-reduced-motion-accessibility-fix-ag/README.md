# [BUG FIX] .ease-btn-loading reduced-motion text visibility

## What does this do?

Resolves empty button layout bugs on prefers-reduced-motion by restoring text visibility and hiding the static loading spinner.

## How is it used?

```html
<button class="ease-btn ease-btn-loading">Submit</button>
```

## Why is it useful?

Implements proper WCAG accessibility standards for buttons under reduced motion.

## Fixes

Fixes #10962
