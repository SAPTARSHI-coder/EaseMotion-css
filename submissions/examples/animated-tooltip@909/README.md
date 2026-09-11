# Animated Tooltip

Modern CSS-only tooltips built with pure HTML and CSS. Supports top, bottom, left, and right positions with smooth fade and slide animation.

## Features

- Pure HTML and CSS tooltips.
- Smooth fade and slide animation.
- Four positions: top, bottom, left, right.
- Works on hover and keyboard focus.
- Responsive layout.
- Supports `prefers-reduced-motion`.

## Usage

Add the `data-tooltip` attribute and choose the position using `data-position`.

```html
<button
  type="button"
  class="tooltip-btn"
  data-tooltip="This is top tooltip"
  data-position="top"
>
  Top
</button>