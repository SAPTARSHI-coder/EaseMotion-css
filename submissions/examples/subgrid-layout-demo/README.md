# Subgrid Layout Demo

## What does this do?
Demonstrates CSS subgrid where card header/body/footer rows align across items with different content lengths.

## How is it used?
Set `grid-template-rows: subgrid` on children with `grid-row: span <N>`:

    .child { display: grid; grid-template-rows: subgrid; grid-row: span 3; }

## Why is it useful?
Ensures consistent row alignment in grid cards with varying content.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
