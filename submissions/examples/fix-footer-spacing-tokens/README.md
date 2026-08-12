# Fix: Replace Hardcoded Gap and Margin Values with Spacing Tokens in footer.css

## Problem

`components/footer.css` used hardcoded spacing values not from the `--ease-space-*` token scale:

```css
.ease-footer-links        { gap: 0.75rem; }
.ease-footer-social       { gap: 0.75rem; margin-top: 1rem; }
.ease-footer-col          { gap: 1rem; }
.ease-footer-col-title    { margin-bottom: 0.5rem; }
.ease-footer-divider      { padding-bottom: 0.75rem; }
.ease-footer-newsletter   { gap: 0.5rem; }
.ease-footer-bottom-links { gap: 0.5rem; }
```

These values cannot be adjusted via the `--ease-space-*` token system, creating inconsistency with the rest of the framework.

## Solution

Replace with spacing tokens using original values as fallbacks:

| Property | Old | Token |
|----------|-----|-------|
| `.ease-footer-links` gap | `0.75rem` | `var(--ease-space-3, 0.75rem)` |
| `.ease-footer-social` gap | `0.75rem` | `var(--ease-space-3, 0.75rem)` |
| `.ease-footer-social` margin-top | `1rem` | `var(--ease-space-4, 1rem)` |
| `.ease-footer-col` gap | `1rem` | `var(--ease-space-4, 1rem)` |
| `.ease-footer-col-title` margin-bottom | `0.5rem` | `var(--ease-space-2, 0.5rem)` |
| `.ease-footer-divider` padding-bottom | `0.75rem` | `var(--ease-space-3, 0.75rem)` |
| newsletter form gap | `0.5rem` | `var(--ease-space-2, 0.5rem)` |
| bottom-links gap | `0.5rem` | `var(--ease-space-2, 0.5rem)` |

## Why it fits EaseMotion CSS

EaseMotion CSS uses a complete `--ease-space-*` scale for consistent spacing. All component spacing should reference these tokens so layout density can be adjusted globally.

Fixes #10418
