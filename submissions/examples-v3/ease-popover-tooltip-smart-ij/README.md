# Smart Popover Tooltip

A tooltip that positions intelligently based on available viewport space, with auto-flip and arrow indicator.

## Features

- Scale + fade entrance animation
- Arrow points to trigger element
- Four preferred positions (top, bottom, left, right)
- Auto-flips to a position that fits the viewport
- Falls back gracefully when no position has room
- Keyboard accessible (focus/blur)

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--pts-duration` | `0.2s` | Transition duration |
| `--pts-tooltip-bg` | `#1c1c1e` | Tooltip background |
| `--pts-text-color` | `#fff` | Tooltip text color |
| `--pts-arrow-color` | `#1c1c1e` | Arrow color |
| `--pts-radius` | `8px` | Border radius |
| `--pts-shadow` | `0 4px 12px rgba(0,0,0,0.15)` | Box shadow |
