# :has() Selector Demo

## What does this do?
Demonstrates CSS `:has()` selector with dynamic parent styling and sibling reveals based on input states.

## How is it used?
Use `:has()` to style parents containing checked/filled inputs:

    .card:has(input:checked) { border-color: green; }

## Why is it useful?
Enables parent-selector-like behavior in pure CSS for interactive form styling.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
