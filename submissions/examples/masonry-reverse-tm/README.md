# Masonry — Reverse Column Order

## What does this do?
Adds `.ease-masonry-2-reverse` and `.ease-masonry-3-reverse` — the
existing 2 and 3 column masonry layouts, but with columns flowing
right-to-left (or in the visual bottom-up order for vertical
writing modes).

## How is it used?
Apply the variant class:

    <div class="ease-masonry-2-reverse">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </div>

## Why is it useful?
Designers sometimes want items to flow in a non-default order
for asymmetric compositions, RTL languages, or to make the most
recent item appear first. The reverse variants provide this
without custom CSS.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser to see the reverse column
order.

## Contribution Notes
- Pure CSS addition
- Implemented via `direction: rtl` on the container with
  `direction: ltr` on children, so text remains left-to-right
