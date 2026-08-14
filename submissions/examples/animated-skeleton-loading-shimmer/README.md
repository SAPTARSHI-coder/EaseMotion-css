# Skeleton Loading Shimmer

A lightweight, pure-CSS skeleton loader with an animated shimmer sweep — used to indicate content is loading before real data appears.

## What it does

Renders gray placeholder blocks shaped like text lines or avatars. A soft white gradient sweeps across each block on a 1.4s loop, giving a polished "content incoming" signal instead of a blank space or spinner.

## How to use it

1. Add the `skeleton` class to any placeholder element.
2. Add `skeleton-text` or `skeleton-avatar` (or a custom shape class) for sizing.
3. Swap the skeleton markup for real content once your data has loaded (see `demo.html` for a toggle example).

```html
<div class="skeleton skeleton-text" style="width: 80%;"></div>
<div class="skeleton skeleton-avatar"></div>