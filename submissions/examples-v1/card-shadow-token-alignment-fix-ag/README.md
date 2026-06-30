# Card Shadow Token Alignment Fix (Issue #14072)

## What does this do?

Demonstrates corrected `.ease-card-shadow` fallback values that match the `--ease-shadow-lg` design token (`rgba(0,0,0,0.10)` and `rgba(0,0,0,0.05)`) instead of the overly dark `0.40`/`0.25` values.

## How is it used?

```html
<div class="ease-card ease-card-shadow">Shadow card</div>
```

## Why is it useful?

Consistent fallback values ensure that in environments where CSS custom properties are not resolved (SSR, IE11 polyfills, CSS-in-JS stripping), the shadow appearance matches the rest of the design system.
