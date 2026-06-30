# ease-path-draw

## Overview

Animates any SVG path line drawing itself from invisible to fully drawn using pure HTML and CSS.

## How It Works

The animation uses the CSS properties `stroke-dasharray` and `stroke-dashoffset`. By setting `pathLength="1"` on the SVG elements, the browser normalizes the path's total length to exactly `1`.

We set:

- `stroke-dasharray: 1;` — renders a single dash that is as long as the entire path.
- `stroke-dashoffset: 1;` — offsets the dash by its entire length, rendering the path invisible.
- `animation: ease-path-draw var(--ease-draw-speed, 2s) ease forwards;` — animates the offset back to `0`, making the path slide in/draw itself smoothly.

### Why `pathLength="1"` is Used

Normally, creating a path-draw animation in CSS requires knowing the exact pixel length of the SVG path (usually retrieved via the JavaScript `path.getTotalLength()` method) and hardcoding that value. Setting `pathLength="1"` on the SVG path element normalizes the path length to `1`, allowing a single generic CSS animation to be applied to any SVG path regardless of shape, scale, or coordinate size, without any JavaScript.

## How to Apply to Any SVG Path

Simply add the `.ease-path-draw` class and set the `pathLength="1"` attribute to your SVG path element:

```html
<svg viewBox="0 0 100 100">
  <path class="ease-path-draw" pathLength="1" d="M10 80 Q 52.5 10, 95 80" />
</svg>
```

## Customization Variables

| Variable            | Default Value | Description                         |
| :------------------ | :------------ | :---------------------------------- |
| `--ease-draw-speed` | `2s`          | The duration of the draw animation. |

You can override this variable inline or in your stylesheet:

```css
.slow-drawing-path {
  --ease-draw-speed: 5s; /* Animates over 5 seconds */
}
```

## Tech Stack

- HTML
- CSS (no JavaScript, no frameworks)
