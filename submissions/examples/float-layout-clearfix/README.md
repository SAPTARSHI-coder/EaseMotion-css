# Float Layout &amp; Clearfix

## Overview

Demonstrates the classic CSS float layout pattern for wrapping text around floated images, along with the clearfix hack (`::after` pseudo-element) and the modern `display: flow-root` alternative. The example shows how floated elements are taken out of normal flow and why containers need a block formatting context to contain them.

## Key Concepts

- **Float behavior**: `float: left` / `right` removes an element from normal flow; text and inline content wrap around it.
- **Clearfix hack**: The `.clearfix::after` technique uses `content`, `display: table`, and `clear: both` to force a parent to enclose floated children.
- **`display: flow-root`**: A modern CSS property that creates a new block formatting context without pseudo-elements, cleanly containing floats.
- **Layout comparison**: Side-by-side panels compare the old clearfix approach with the flow-root approach, highlighting identical visual results with different underlying mechanisms.

## Usage

Open `demo.html` in any browser. The page is self-contained — all styles are in `style.css`. Resize the viewport to see responsive behavior. Use browser DevTools to inspect the `::after` pseudo-element on `.clearfix` elements and compare it with the `flow-root` display value.
