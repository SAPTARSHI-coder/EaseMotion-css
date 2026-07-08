# Parallax Scroll Cards

## What does this do?
Cards that move at different speeds as the user scrolls, creating a parallax depth effect using CSS scroll-driven animations.

## How is it used?
Add the `parallax-card` class to any article element. The scroll-driven animation automatically applies based on the card's `--speed` custom property.

    <article class="parallax-card" data-speed="0.5">
      <div class="card-content">...</div>
    </article>

Speed values range from 0.2 (slow) to 1.2 (fast).

## Why is it useful?
Adds visual depth and dynamism to scrolling content without JavaScript — ideal for story pages, portfolios, and marketing landing pages.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
