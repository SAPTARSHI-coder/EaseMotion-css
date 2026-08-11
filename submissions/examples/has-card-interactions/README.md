# :has() Card Interactions

## What

A card grid where hovering one card scales it up while dimming and desaturating all other cards — all achieved with the CSS `:has()` selector. No JavaScript is used for the interaction logic.

## How

The grid uses `.grid:has(.card:nth-child(N):hover) .card:not(:nth-child(N))` to select sibling cards when a specific card is hovered. Each of the 6 cards has a corresponding `:has()` rule. The hovered card gets `transform: scale(1.08)` and a colored border/glow, while siblings receive `opacity: 0.4` and `filter: grayscale(0.6)`. Smooth `transition` properties tie it all together.

## Why

`:has()` enables parent-aware styling that was previously impossible without JavaScript. This pattern — hover a child to affect its siblings — is common in interactive UIs (portfolios, product grids) and is now expressible purely in CSS. The approach is declarative, performant, and degrades gracefully when `:has()` is unsupported.
