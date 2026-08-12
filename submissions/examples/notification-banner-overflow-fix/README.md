# Notification Banner — Overflow Fix

Fixes #56742: notification banners with long messages and action buttons overflowing or becoming misaligned on narrow/mobile screens.

## The Problem

The original banner layout let long message text push the action button outside the container, or caused text clipping, because the container did not allow wrapping and the text had no minimum-width safeguard.

## The Fix

- `display: flex` plus `flex-wrap: wrap` on `.notification-banner` so content reflows instead of overflowing.
- `.notification-banner__message` uses `flex: 1 1 220px` and `min-width: 0` so it can shrink and wrap instead of forcing the row wider than its container.
- `overflow-wrap: break-word` and `word-break: break-word` on the message so unusually long words do not cause horizontal overflow.
- `.notification-banner__actions` and each button use `flex-shrink: 0` and `white-space: nowrap` so buttons stay intact and visible rather than getting squeezed or clipped.
- A `@media (max-width: 480px)` rule switches the banner to a vertical stack (`flex-direction: column`) and makes buttons full-width, so everything stays tappable and legible on small screens.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--nb-radius` | `8px` | Banner corner radius |
| `--nb-gap` | `12px` | Gap between icon, message, and actions |
| `--nb-padding` | `16px 20px` | Banner internal padding |
| `--nb-font-size` | `0.95rem` | Message font size |
| `--nb-info-bg` | `#eef6ff` | Info variant background |
| `--nb-info-border` | `#2563eb` | Info variant left border/accent |
| `--nb-warning-bg` | `#fff7ed` | Warning variant background |
| `--nb-warning-border` | `#f59e0b` | Warning variant left border/accent |
| `--nb-text-color` | `#1f2937` | Message text color |
| `--nb-btn-radius` | `6px` | Button corner radius |

## Usage

1. Copy `style.css` into your project.
2. Use the `.notification-banner` structure from `demo.html`: an optional icon, a `.notification-banner__message`, and a `.notification-banner__actions` wrapper containing one or more `.notification-banner__btn` elements.
3. Apply a modifier class (e.g. `.notification-banner--warning`) for alternate variants.

## Before and After

- Before: long messages pushed the button outside the visible container or caused clipped text on mobile viewports.
- After: message text wraps naturally within the banner, the buttons remain fully visible, and on screens 480px wide or less the banner stacks vertically with full-width buttons.
