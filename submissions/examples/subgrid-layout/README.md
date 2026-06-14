# Subgrid Layout

## What

A 3×2 card grid that uses CSS `subgrid` to align content across rows. Each card has a header, a content body, and a footer. Thanks to subgrid, all card headers share the same column track, all content areas align vertically, and all footers sit on a common baseline—even when card content varies in length.

## How

The outer grid container uses `display: grid` with three equal column tracks and two row tracks. Each card is a grid item that sets `display: grid; grid-template-rows: subgrid; grid-row: span 1;` so its internal rows (header, content, footer) align with sibling cards in the same row. A second variant on the page demonstrates column subgrid: a row of stacked card groups where subtitles inside each group share column widths via `grid-template-columns: subgrid`. `prefers-reduced-motion` removes entry animations and focus transitions.

## Why

Subgrid solves the long-standing problem of aligned content inside nested grids without resorting to JavaScript measurement or fixed heights. This example shows both row-level subgrid (for card rows with consistent header/footer baselines) and column-level subgrid (for aligned sub-columns inside grouped items), making it a reference for any layout where grid children need to share tracks with siblings.
