# CSS :nth-child(an+b of .scoped) Selectors

## What does this do?

Demonstrates the `:nth-child(an+b of <selector>)` CSS selector syntax, which scopes the element counting to only elements matching a given selector. This enables styling items based on their position among visible peers in a filterable grid.

## Key Features

- `:nth-child(an+b of .visible)` counts only `.visible` elements
- Filterable item grid with dynamic scoped counting
- `:nth-child(2n of .visible)` for alternating visible items
- `:nth-child(3n+1 of .visible)` for every third visible item
- Graceful fallback: items without matching scope are styled normally

## Preview

Open `demo.html` in a supporting browser (Chrome 129+, Safari 18+).
