# Display Inline-Block

## Overview

Explores `display: inline-block` for creating horizontal layouts. Compares inline-block with older float-based approaches and modern Flexbox. Covers the whitespace gap issue, vertical alignment options, and centering strategies for inline-block elements.

## Key Concepts

- **Inline-block behavior**: Elements sit on the same line (like inline) but respect `width`, `height`, `padding`, and `margin` (like block).
- **Whitespace gap**: HTML whitespace between inline-block elements creates visible gaps — fix with `font-size: 0` on the parent or use Flexbox.
- **Vertical alignment**: `vertical-align` controls how inline-block elements align with each other on the line (top, middle, bottom, etc.).
- **Comparison with alternatives**: Floats remove elements from flow and require clearfix; Flexbox offers superior gap and alignment control without the whitespace issue.
- **Text-align centering**: `text-align: center` on the parent centers inline-block children, a simple centering technique.

## Usage

Open `demo.html` to see an inline-block navigation bar, a gallery grid, elements with different heights aligned to middle, and a side-by-side comparison of inline-block, float, and Flexbox approaches.
