# Search Bar Expand on Click

A compact search bar that starts as a small circular icon button and expands to a full-width input field on click. The expansion animates smoothly using a width transition. Clicking the input area or icon opens the bar; blurring closes it when empty.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Click the search icon to expand the bar. Click outside to collapse.

## Accessibility notes

The search icon is a `<button>` element. The input has no label — add an `aria-label` in production. Reduced motion disables the width transition.
