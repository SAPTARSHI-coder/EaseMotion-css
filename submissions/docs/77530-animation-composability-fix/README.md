# Animation Composability Fix

Fixes Issue #77530 — When multiple EaseMotion animation classes are applied to the same element, only the last animation plays.

## What does this do?

Refactors animation utility classes to use individual CSS animation properties (`animation-name`, `animation-duration`, `animation-timing-function`, `animation-fill-mode`) instead of the `animation` shorthand, so multiple classes can compose without overwriting each other.

## How is it used?

Apply multiple animation classes to a single element:

```html
<div class="ease-fade-in ease-slide-up">
  Both animations play together
</div>
```

Before the fix, only `ease-slide-up` would play. After the fix, both `ease-fade-in` and `ease-slide-up` play simultaneously.

## Why is it useful?

The current `animation` shorthand silently overwrites previous values when multiple classes are applied. This breaks the composable design philosophy of EaseMotion CSS, where utility classes should be stackable. Using individual properties allows animations to compose naturally, matching how `animation-delay` and other helpers already work.
