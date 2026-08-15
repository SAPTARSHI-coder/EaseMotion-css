# 16 — grid-auto-flow-dense

## Overview
Compares `grid-auto-flow: row`, `column`, and `dense` placement algorithms. Seven grid items with varying spans (some spanning 2 columns or 2 rows) demonstrate how each flow mode handles gaps. The dense mode backfills empty cells with later items that fit, producing a tighter packing.

## Files
- `demo.html` — three side-by-side grids comparing row, column, and dense flow
- `style.css` — dark-themed styles with identical item sets across all three grids

## Usage
Open `demo.html`. Observe how the "dense" grid fills gaps that remain in the row and column grids, especially visible with the 2-column-span items.
