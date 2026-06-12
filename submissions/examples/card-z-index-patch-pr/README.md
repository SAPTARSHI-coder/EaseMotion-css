# Card Z-Index Architecture Patch (-pr)

This submission resolves a severe clipping bug in `components/cards.css` where hovered cards fail to overlap adjacent grid elements due to a low, hardcoded z-index.

## What does this do?

It introduces a new design token (`--ease-z-elevated`) set to `20` and applies it to the `:hover` and `:focus-visible` states of all interactive cards. This overrides the incredibly weak `z-index: 2` currently hardcoded in the framework.

## How is it used?

Just include the CSS! This seamlessly patches the core framework classes. Developers can place cards into deep DOM trees and CSS Grids without fear of overlapping clipped edges.

## Why is it useful?

If a developer builds a CSS Grid where the columns themselves have relative z-indices (for example, column 1 has `z-index: 5` and column 2 has `z-index: 4`), hovering a card in column 2 will trigger the core framework's `z-index: 2`. The card will pop "up", but physically render "underneath" column 1, completely breaking the 3D illusion. This patch utilizes a higher, token-based z-index to guarantee cards always float to the top of the local stacking context!
