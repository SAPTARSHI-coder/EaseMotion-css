# Text Overflow Ellipsis Utilities

Demonstrates single-line and multi-line text overflow with ellipsis truncation using CSS properties, integrated with EaseMotion's typography tokens for consistent text handling in constrained layouts.

## Features

- Single-line truncation using `white-space: nowrap`, `overflow: hidden`, and `text-overflow: ellipsis`
- Multi-line clamping with `-webkit-line-clamp: 2`, `3`, and `4` for flexible content cards
- Icon-prefixed text truncation for notifications and document titles
- Table row truncation keeping table columns compact and readable
- Badge and tag overflow with `--ease-radius-full` pill styling
- Uses `--ease-text-base`, `--ease-text-sm`, `--ease-text-xs` for consistent typography
- Dark mode support via `prefers-color-scheme: dark`
- Fully responsive — truncation widths adapt to container size

## Usage

```html
<!-- Single line -->
<span class="ellipsis-single-lg">Long text that truncates...</span>

<!-- Two-line clamp -->
<p class="ellipsis-two-line">Long paragraph that clamps to two lines...</p>

<!-- Truncate with icon -->
<div class="truncate-with-icon">
  <span class="truncate-icon">&#x1F4E7;</span>
  <span class="truncate-text">Long notification text...</span>
</div>
```

## Why is it useful?

Text truncation is essential for dashboards, feeds, notifications, and product grids where content length is unpredictable. Using `var(--ease-text-base)` and `var(--ease-text-sm)` for sizing keeps truncated text readable and consistent with the EaseMotion type scale. The `-webkit-line-clamp` technique is browser-native and GPU-accelerated.
