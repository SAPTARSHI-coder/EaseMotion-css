# Indeterminate Checkbox

## What does this do?
Demonstrates the `:indeterminate` pseudo-class for checkboxes in a three-state model: unchecked, checked, and indeterminate. Shows mixed-state styling for grouped checkboxes.

## How is it used?
Apply to checkboxes that represent a group selection where some (not all) items are selected:

    <input type="checkbox" class="cb-indeterminate" id="parent">
    <input type="checkbox" class="cb-child" checked>
    <input type="checkbox" class="cb-child">

## Why is it useful?
Indeterminate state is essential for tree views, permission grids, and grouped selections. It gives users clear feedback when a parent selection is partially complete, reducing confusion in multi-level checklists.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
