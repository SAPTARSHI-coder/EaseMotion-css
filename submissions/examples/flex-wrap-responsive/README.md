# Flex-Wrap Responsive

## Overview

Demonstrates the `flex-wrap` property and its values — `wrap`, `nowrap`, and `wrap-reverse` — for creating responsive flex layouts. Includes a technique for building a responsive grid that adjusts automatically without media queries by combining `flex-wrap` with `flex-basis`.

## Key Concepts

- **`flex-wrap: wrap`**: Items flow onto multiple lines when they exceed the container width, creating a natural grid.
- **`flex-wrap: nowrap`** (default): All items stay on one line; they shrink or overflow the container.
- **`flex-wrap: wrap-reverse`**: Items wrap in the reverse direction of the cross axis (upward instead of downward).
- **Responsive grid trick**: Set `flex: 1 1 150px` on items with `flex-wrap: wrap` — items are at least 150px wide but grow to fill space, automatically adjusting column count as the container shrinks.
- **Gap consistency**: `gap` works across wrapped lines, maintaining uniform spacing between rows and columns.

## Usage

Open `demo.html` and resize the browser window. The `wrap` example shows items flowing to new rows. The `nowrap` example forces a single line with horizontal scroll. The `wrap-reverse` example stacks upward. The responsive grid section demonstrates a media-query-free auto-grid using `flex-basis`.
