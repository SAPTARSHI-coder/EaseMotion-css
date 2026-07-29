# Interactive Star Rating

A five-star rating component using CSS `direction: rtl` for hover highlighting. Stars are amber on hover/click and gray otherwise. Clicking a star sets the rating, displays the numeric value and a label (Poor to Excellent). Includes a scale-up hover effect.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Hover and click stars to set a rating.

## Accessibility notes

Stars are text characters with `data-val` attributes. The selected rating is displayed as text. Reduced motion disables the hover scale.
