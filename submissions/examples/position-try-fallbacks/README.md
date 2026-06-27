## What

This example demonstrates CSS Anchor Positioning using the `position-try-fallbacks` property. A set of buttons with associated tooltip popovers use anchor positioning to attach tooltips to their trigger elements. When the tooltip approaches a viewport edge, `position-try-fallbacks` automatically selects an alternative position (top, bottom, left, right) to keep the tooltip fully visible.

## How

Each button is assigned an `anchor-name` (e.g. `--anchor-el`). The corresponding tooltip uses `position-anchor` to reference that named anchor. A `position-try-fallbacks` list defines four fallback positions (`--try-top`, `--try-bottom`, `--try-left`, `--try-right`) using `@position-try` rules. Each `@position-try` block repositions the element and adjusts the pseudo-element arrow direction. The browser evaluates each fallback in order and picks the first one that keeps the tooltip within the viewport.

## Why

Before Anchor Positioning, tooltip placement required JavaScript libraries to compute positions, detect overflow, and reposition elements. The `position-try-fallbacks` API moves this logic into the browser's layout engine, eliminating runtime dependencies, reducing layout shift, and providing declarative, performant edge-aware positioning. This aligns with the broader CSS goal of moving interactive layout behaviors into the platform.
