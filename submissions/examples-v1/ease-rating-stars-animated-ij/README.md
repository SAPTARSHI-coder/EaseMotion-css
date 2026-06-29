# Rating Stars Animated

An interactive star rating component with hover preview, click-to-set, and a pop animation driven by the `--star-fill` CSS custom property.

## Features

- 5-star rating with hover preview and click selection
- Star fill color controlled by `--star-fill` CSS variable
- Pop animation on click via `@keyframes starPop`
- Scale transform on hover
- Feedback label updates with rating text

## Usage

Include `style.css` and structure stars as `<span>` elements with `data-value` attributes. JS toggles `--star-fill` on hover/click. CSS handles color and transform transitions.
