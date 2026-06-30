# Masonry Card Margin Collapse (Issue #4729)

## What does this do?
Resolves a spacing collapse bug where cards inside masonry grids lose their vertical margins by inheriting a zero margin from the parent container.

## How is it used?
When `.ease-card` elements are placed inside an `.ease-masonry` container, they will correctly retain the grid's vertical spacing (`margin-bottom`).

## Why is it useful?
It ensures correct vertical layout spacings and prevents items from stacking directly on top of each other.

## Affected File (maintainer will copy to `components/masonry.css`)
Remove these lines from the end of `components/masonry.css`:
```css
.ease-masonry .ease-card,
.ease-masonry-2 .ease-card,
.ease-masonry-3 .ease-card,
.ease-masonry-4 .ease-card {
  margin-bottom: inherit;
}
```
