# [BUG FIX] .ease-delay-\* transition delay conflict

## What does this do?

Resolves delay styling overrides affecting standard component interaction delays.

## How is it used?

```html
<button class="ease-delay-100 ease-hover-lift">Button</button>
```

## Why is it useful?

Prevents delayed hover and focus transitions on elements with entrance animations.

## Fixes

Fixes #10942
