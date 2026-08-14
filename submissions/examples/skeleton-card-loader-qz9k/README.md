# Skeleton Card Loader

## What does this do?

A card component whose skeleton (shimmer placeholders) and loaded content
live in the same markup from the start, toggled by a single
`.scl-loaded` class, so real content replacing the skeleton never shifts
the card's layout.

## How is it used?

```html
<article class="scl-card" aria-busy="true">
  <div class="scl-thumb" aria-hidden="true"></div>
  <img class="scl-real-thumb" src="..." alt="..." />
  <div class="scl-line scl-line-title" aria-hidden="true"></div>
  <h2 class="scl-real-title">Mountain Trail Map</h2>
</article>
```

```js
card.classList.add('scl-loaded'); // once real data has arrived
card.removeAttribute('aria-busy');
```

Each real element (`.scl-real-thumb`, `.scl-real-title`, ...) sits directly
alongside its skeleton counterpart with matching dimensions; `.scl-loaded`
simply flips which set is `display: none`.

## Why is it useful?

Skeleton loaders are often built as a separate component swapped out
entirely for the real content once data arrives, which risks a layout
shift the instant the swap happens if the skeleton's dimensions don't
exactly match the real content's — a title placeholder sized generically
rather than matching the actual heading's line-height, for instance. Because
both states are written in the *same* card with matched box models
(thumbnail aspect-ratio, line heights, margins), the toggle changes only
which content paints, never the card's measured height — so there's no
"page jumps as content loads" flicker regardless of how the real content's
actual length compares to the placeholder.

`aria-busy="true"` on the card while skeleton content is showing tells
assistive technology the region is still loading, and the skeleton pieces
themselves are `aria-hidden` since shimmering grey bars carry no
information worth announcing — only the real content, once loaded, is
meant to be read.
