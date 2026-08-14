# Fix: Add Fallback Values to All CSS var() Usages

## What does this do?

Audits all `var()` usages in `core/` and provides fallback second arguments so elements don't break silently when a CSS variable is undefined.

## The Problem

```css
/* Without fallback — element breaks silently if variable is missing */
color: var(--ease-color-primary);

/* With fallback — graceful degradation */
color: var(--ease-color-primary, #6c63ff);
```

When `var(--missing-var)` has no fallback, the property becomes invalid and the element renders with no value — causing silent visual breakage.

## Audit Summary

### `core/animations.css` — Key var() usages needing fallbacks

| Variable | Recommended Fallback |
|----------|---------------------|
| `--ease-speed-fast` | `150ms` |
| `--ease-speed-medium` | `300ms` |
| `--ease-speed-slow` | `600ms` |
| `--ease-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--ease-color-primary` | `#6c63ff` |
| `--ease-color-neutral-100` | `#f1f5f9` |
| `--ease-color-neutral-200` | `#e2e8f0` |
| `--ease-radius-md` | `0.5rem` |
| `--ease-shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.10)` |
| `--ease-glow-primary` | `0 0 16px rgba(108, 99, 255, 0.45)` |

### `core/variables.css` — Self-referencing vars needing fallbacks

| Variable | Recommended Fallback |
|----------|---------------------|
| `--ease-color-bg: var(--ease-color-neutral-50)` | `var(--ease-color-neutral-50, #f8fafc)` |
| `--ease-color-text: var(--ease-color-neutral-800)` | `var(--ease-color-neutral-800, #1e293b)` |
| `--ease-color-muted: var(--ease-color-neutral-500)` | `var(--ease-color-neutral-500, #64748b)` |

## How is it used?

The `style.css` file contains the corrected animation classes with proper fallbacks. The maintainer can reference this when updating `core/animations.css`.

```css
/* Before */
.ease-fade-in {
  animation: ease-kf-fade-in var(--ease-speed-medium) var(--ease-ease) both;
}

/* After */
.ease-fade-in {
  animation: ease-kf-fade-in var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)) both;
}
```

## Why is it useful?

- Prevents silent visual breakage when variables are undefined
- Enables partial imports (e.g., using `animations.css` without `variables.css`)
- Makes the framework more resilient and debuggable
- Aligns with CSS best practices for custom property usage
