# Subgrid Fallback mixin

> Issue: [#63810](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63810)

Aligns card internals across a grid row, with an honest flex fallback.

## Mixins

### `subgrid-parent($min, $gap, $rows)` — on the grid
### `subgrid-rows($rows)` — on each card
### `subgrid-footer` — on the element that should sit at the bottom
### `subgrid-columns($columns)` — label/value alignment across rows
### `subgrid-supported` / `subgrid-unsupported` — `@content` hooks

```scss
.cards { @include subgrid-parent(260px, 1rem, 3); }
.card  { @include subgrid-rows(3); }
.card__actions { @include subgrid-footer; }
```

## What the fallback does and does not do

| | subgrid | flex fallback |
|---|---|---|
| Footers align across the row | ✅ | ✅ |
| Headings start at the same height | ✅ | ❌ |
| Body copy starts at the same height | ✅ | ❌ |

**The fallback is not equivalent**, and this table is the point. Flex with `margin-block-start: auto` pins the footer to the bottom, which fixes footer alignment only — headings and body still start at different heights when card titles wrap differently. That is a genuine improvement over nothing and worth shipping, but treating the two paths as interchangeable leads to layouts that look correct in one browser and subtly ragged in another, with no obvious cause.

`subgrid-supported` / `subgrid-unsupported` exist so a consumer can act on the difference — for example hiding a decorative divider that only reads correctly when rows genuinely align.

## Why it fits EaseMotion

A row of cards with headings of different lengths ends up with body copy starting at a different height in each one, and ragged footers. Every card is internally correct; the row looks broken. `subgrid` fixes it properly by letting the card's internal rows participate in the parent grid's shared tracks.

Two details are load-bearing:

**`grid-auto-rows: auto` on the parent.** A card spanning three rows in an implicit grid collapses its extra rows to zero height without it, so the cards render as a single squashed line.

**`subgrid-footer` releases its auto margin under subgrid.** With subgrid the footer already occupies its own shared row — leaving `margin-block-start: auto` applied would push it to the bottom *of that row*, opening a gap that the fallback path does not have. The mixin resets it to `0` inside the feature query.
