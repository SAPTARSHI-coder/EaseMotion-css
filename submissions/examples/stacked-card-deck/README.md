# CSS-Only Stacked Card Deck Animation

A pure CSS implementation of a smooth "fan out" stacked card deck animation on hover, featuring modern UI aesthetics, 3D depth effects, and spring-like transitions.

## Features
- **Zero JavaScript**: Entirely CSS-driven interaction.
- **Spring Physics**: Uses a custom `cubic-bezier` timing function for a bouncy, satisfying fan-out effect.
- **Modern Aesthetics**: Glassmorphism, beautiful gradients, soft shadows, and subtle internal glow.
- **Accessible & Responsive**: Simple HTML structure, responsive relative positioning.

## How It Works
- The `.ease-card-deck` acts as a relative container anchoring the deck.
- The `.ease-deck-card` elements are stacked using `position: absolute` with distinct `z-index` values.
- `:nth-child()` selectors apply initial subtle offsets (translate, scale, rotate) to create the illusion of a randomized stack.
- On parent hover, the `:nth-child()` selectors transform dramatically, translating left and right while rotating to fan out smoothly.
- A `box-shadow` transition on hover increases depth, making the cards appear to lift off the background.
