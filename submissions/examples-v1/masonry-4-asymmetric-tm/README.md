# Masonry — 4 Column and Asymmetric Variants

## What does this do?
Adds two masonry layout variants:
- `.ease-masonry-4` — 4-column layout (existing layouts are 2 and 3)
- `.ease-masonry-asymmetric` — first item spans two columns, rest
  flow naturally

## How is it used?
Apply the variant class:

    <div class="ease-masonry-4">
      <div>Item 1</div>
      <div>Item 2</div>
      ...
    </div>

    <div class="ease-masonry-asymmetric">
      <div class="feature">Featured</div>
      <div>Item 2</div>
      ...
    </div>

## Why is it useful?
The existing masonry component ships 2 and 3 column variants.
4 columns is needed for wide desktop layouts, and the asymmetric
variant is useful for hero-style card grids where the first item
should be visually emphasized.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see both variants.

## Contribution Notes
- Pure CSS addition
- Responsive: collapses to fewer columns on small viewports
