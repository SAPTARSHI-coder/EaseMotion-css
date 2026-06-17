# Marquee Demo Class Names Fix

**Fixes:** #2824
**File Modified:** `examples/marquee-demo.html`

---

## Problem

The marquee demo used unprefixed class names like `slow`, `fast`,
`reverse`, `fade-edges`, `gap-xl`, and `pause-on-hover` which do
not exist in the shipped CSS API.

## Fix

Replaced all unprefixed class names with correct `ease-marquee-*`
prefixed variants:

| Before | After |
|--------|-------|
| `slow` | `ease-marquee-slow` |
| `fast` | `ease-marquee-fast` |
| `reverse` | `ease-marquee-reverse` |
| `fade-edges` | `ease-marquee-fade-edges` |
| `gap-xl` | `ease-marquee-gap-xl` |
| `pause-on-hover` | `ease-marquee-pause-on-hover` |

## Result

Demo now correctly reflects the actual CSS API.