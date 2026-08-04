# Flex-Direction: Row vs Column

## Overview

Compares `flex-direction: row` and `flex-direction: column` in Flexbox layouts. Demonstrates how the main axis and cross axis change, how `align-self` behaves differently in each direction, and the effect of `row-reverse` / `column-reverse`.

## Key Concepts

- **Main axis vs cross axis**: In `row`, the main axis runs horizontally (left to right) and the cross axis vertically. In `column`, the main axis runs vertically (top to bottom) and the cross axis horizontally.
- **`align-self` behavior**: In a row, `align-self` controls vertical positioning; in a column, it controls horizontal positioning.
- **Reverse directions**: `row-reverse` and `column-reverse` flip the start/end positions along the main axis, changing visual order without changing DOM order.
- **Gap property**: `gap` works in both directions, producing consistent spacing regardless of `flex-direction`.

## Usage

Open `demo.html` to see horizontal and vertical flex layouts side by side. The cross-axis alignment section demonstrates `flex-start`, `center`, `flex-end`, and `stretch` in both directions. The reverse examples show how `row-reverse` and `column-reverse` affect item ordering.
