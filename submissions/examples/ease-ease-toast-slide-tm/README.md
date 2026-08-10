# ease-toast-slide

Slide-in toast notification component for EaseMotion-css.

## Issue Reference

Issue: #63677

## Feature Description

A sleek slide-in toast notification system with entrance/exit animations, multiple variants (success, error, info, warning), auto-dismiss with progress indicator, and stacking behavior. Supports dark mode, reduced motion, and multiple screen positions.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--toast-slide-bg` | `#1a1a2e` | Background color |
| `--toast-slide-text` | `#e0e0e0` | Text color |
| `--toast-slide-border` | `#4a4a6a` | Border color |
| `--toast-slide-radius` | `8px` | Border radius |
| `--toast-slide-shadow` | `0 8px 32px rgba(0,0,0,0.4)` | Box shadow |
| `--toast-slide-enter-duration` | `0.5s` | Entrance animation duration |
| `--toast-slide-exit-duration` | `0.4s` | Exit animation duration |
| `--toast-slide-slide-distance` | `120px` | Slide-in distance |
| `--toast-slide-success-border` | `#2ecc71` | Success variant border |
| `--toast-slide-error-border` | `#e74c3c` | Error variant border |
| `--toast-slide-info-border` | `#3498db` | Info variant border |
| `--toast-slide-warning-border` | `#f39c12` | Warning variant border |

## Variants

- **success** — Green accent, checkmark icon
- **error** — Red accent, X icon
- **info** — Blue accent, info icon
- **warning** — Orange accent, warning icon

## Sizes

- **sm** — Compact 12px font, smaller padding
- **default** — Standard 14px font
- **lg** — Large 16px font, larger padding

## Position Classes

- `.toast-container` (default bottom-right)
- `.toast-container--top-left`
- `.toast-container--top-right`
- `.toast-container--bottom-left`
- `.toast-container--top-center`

## Key Features

- Spring easing entrance animation (`cubic-bezier(0.34, 1.56, 0.64, 1)`)
- Smooth exit with height collapse animation
- Auto-dismiss progress bar (pause on hover)
- Stacking with max 3 visible toasts
- Dark mode via `prefers-color-scheme`
- Reduced motion support via `prefers-reduced-motion`
- Responsive on mobile (full-width toasts)

## Accessibility

- `prefers-reduced-motion`: disables all animations
- Focusable dismiss button with hover state
- Sufficient color contrast on all variants
- Screen reader friendly semantic structure
