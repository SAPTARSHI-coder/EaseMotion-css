# CSS Anchor Positioning Tooltip System

## Overview
This example demonstrates the CSS Anchor Positioning API for creating robust, auto-positioning tooltip systems without any JavaScript. Tooltips anchor to buttons/links, automatically flip to stay in viewport, and gracefully handle overflow.

## Features
- **`anchor-name`/`anchor-default`** — defines anchor elements that positioned elements can reference
- **`position-area`** — attaches the tooltip to a specific side of the anchor (top, bottom, left, right)
- **`position-try-fallbacks`** — provides fallback positions when the tooltip would overflow the viewport
- **`position-visibility`** — controls tooltip visibility based on anchor visibility in the scrollport
- **No JavaScript** — all positioning is native CSS

## How to Use
1. Give anchor elements an `anchor-name` (e.g., `anchor-name: --tooltip-anchor`)
2. Give tooltip elements `position: absolute` and `position-area: top`
3. Reference the anchor with `position-anchor: --tooltip-anchor`
4. Add `position-try-fallbacks: flip-block, flip-inline` for automatic fallback behavior

## Browser Support
- Chrome 125+ (behind flag in earlier versions)
- Edge 125+
- Firefox 128+ (partial)
- Safari 18+ (partial)
