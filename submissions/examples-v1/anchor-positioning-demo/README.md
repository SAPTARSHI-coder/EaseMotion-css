# Anchor Positioning Demo

## What does this do?

Demonstrates CSS anchor positioning using `anchor()` and `position-anchor` for tooltip placement.

## How is it used?

Define `anchor-name` on the target and use `anchor()` in the positioned element:

    #anchor { anchor-name: --my-anchor; }
    .tooltip { position-anchor: --my-anchor; top: anchor(bottom); }

## Why is it useful?

Enables robust relative positioning without JavaScript for tooltips, popovers, and menus.

## Tech Stack

- HTML
- CSS (anchor positioning)

## Preview

Open demo.html directly in your browser to see the effect.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
