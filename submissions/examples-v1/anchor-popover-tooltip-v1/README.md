# Anchor Popover Tooltip

## What

Three buttons with `popover` tooltips positioned using the CSS Anchor Positioning API. Each tooltip uses `anchor-name`, `anchor()`, and `position-try-options` to smartly position itself relative to its target button. A `@supports` guard and fallback ensure it works everywhere.

## How

Each button gets a unique `anchor-name` (e.g. `--btn-top`). The corresponding tooltip uses `position-anchor` to reference it and `anchor()` functions to set `top`, `left`, etc. `position-try-options: flip-block, flip-inline` enables automatic repositioning when space runs low. JavaScript toggles `showPopover()`/`hidePopover()` on hover/focus. The fallback uses manual positioning.

## Why

Anchor Positioning replaces JavaScript-based tooltip libraries with a native CSS solution. `position-try-options` handles edge cases like viewport edges automatically. By layering `popover`, tooltips get the right z-index and top-layer behavior without extra code. The `@supports` check provides a clean fallback path.
