# Transform Scale Utilities — Issue #5694

## Overview

This submission adds scale transform utility classes to EaseMotion CSS with an
anti-aliasing fix for text rendering when `transform: scale()` is applied.

## Issue #5694

When `transform: scale()` is applied to elements containing text, subpixel anti-aliasing
can cause blurred or distorted text rendering in some browsers. The fix uses:
- `transform: translateZ(0)` — forces GPU compositing layer
- `-webkit-font-smoothing: antialiased` — improves text rendering quality

## Classes Added

| Class | Effect |
|-------|--------|
| `.ease-scale-hover-sm` | `scale(1.03)` on hover |
| `.ease-scale-hover-md` | `scale(1.06)` on hover |
| `.ease-scale-hover-lg` | `scale(1.10)` on hover |
| `.ease-scale-focus` | `scale(1.06)` on `:focus-visible` |
| `.ease-scale-active` | `scale(0.97)` on `:active` (press) |
| `.ease-scale-in` | Entrance animation |
| `.ease-scale-stagger` | Staggered child entrance animations |
| `.ease-btn-scale` | Scale button with glow hover |
| `.ease-avatar-scale` | Scale avatar on hover |

## Tokens Used

- `--ease-speed-fast`, `--ease-speed-medium`
- `--ease-ease-bounce`, `--ease-ease-out`
- `--ease-glow-primary`, `--ease-color-primary-alpha`
- `--ease-radius-md`, `--ease-radius-lg`, `--ease-radius-full`
- `--ease-space-*` scale, `--ease-shadow-*` scale