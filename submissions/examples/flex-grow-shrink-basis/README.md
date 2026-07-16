# Flex-Grow, Flex-Shrink, Flex-Basis

## Overview

Explores the three individual flex properties — `flex-grow`, `flex-shrink`, and `flex-basis` — and their combined `flex` shorthand. Demonstrates proportional space distribution, fixed vs flexible items, and how items behave when the container has extra or insufficient space.

## Key Concepts

- **`flex-grow`**: Dictates how much of the remaining space an item should take. A value of 2 means the item gets twice as much extra space as an item with `flex-grow: 1`.
- **`flex-shrink`**: Dictates how much an item should shrink when there is insufficient space. `flex-shrink: 0` prevents shrinking; higher values shrink more aggressively.
- **`flex-basis`**: Sets the initial main-size of an item before space is distributed. Can be `auto`, a fixed length, or a percentage.
- **`flex` shorthand**: `flex: grow shrink basis` (e.g., `flex: 1 1 auto`). Common shortcuts: `flex: 1` = `1 1 0%`, `flex: 0 0 120px` = fixed 120px item.
- **Fixed vs flexible**: Combining `flex: 0 0 <length>` (fixed) with `flex: 1 1 auto` (flexible) creates layouts where some items stay constant while others fill remaining space.

## Usage

Open `demo.html` and resize the browser. Observe how grow items distribute extra space proportionally, shrink items compress at different rates, basis items start at different widths, and the shorthand section shows a fixed sidebar with flexible content areas.
