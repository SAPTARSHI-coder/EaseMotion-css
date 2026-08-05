# Forms Warning Token Fix

## What does this do?

Adds the missing `--ease-color-warning-alpha` design token and replaces the hardcoded `rgba(245, 158, 11, 0.15)` value in the warning input state's `box-shadow` with the new token — bringing it into consistency with the success and danger states.

## How is it used?

No new classes. This is a **bug fix** requiring two changes:

**1. Add the token to `core/variables.css` `:root`:**

```css
--ease-color-warning-alpha: rgba(245, 158, 11, 0.15);
```

And in the `@supports (color: color-mix(...))` block:

```css
--ease-color-warning-alpha:
  color-mix(in srgb, var(--ease-color-warning) 15%, transparent);
```

**2. Replace the hardcoded value in `components/forms.css`:**

```css
/* Before (hardcoded): */
box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15) !important;

/* After (uses token): */
box-shadow: 0 0 0 3px var(--ease-color-warning-alpha, rgba(245, 158, 11, 0.15)) !important;
```

## Why is it useful?

The success and danger input states already use design tokens for their alpha values:

```css
/* ✅ Success — uses token */
box-shadow: 0 0 0 3px var(--ease-color-success-alpha, ...) !important;

/* ✅ Danger — uses token */
box-shadow: 0 0 0 3px var(--ease-color-danger-alpha, ...) !important;

/* ❌ Warning — was hardcoded! */
box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15) !important;
```

This inconsistency means if a consumer overrides `--ease-color-warning` with a custom brand color (e.g., rose, teal, or any other color), the focus ring glow **still shows orange** — creating a visual mismatch.

The fix ensures all three semantic states follow the same token-based pattern, making the framework fully theme-customizable.
