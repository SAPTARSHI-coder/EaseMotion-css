## What

A CSS filter functions gallery showing eight distinct filter effects — blur, brightness, contrast, saturate, sepia, hue-rotate, invert, and grayscale — each applied to a separate image in a responsive grid. Hovering an image removes the filter to reveal the original for side-by-side comparison.

## How

Each `.filter-card` has a `data-filter` attribute that drives a CSS selector (e.g., `[data-filter="blur"] img`). The default state applies the filter value (e.g., `filter: blur(4px)`) to the `<img>`. On hover, the filter is removed (`filter: blur(0)`) with a smooth `transition: filter 0.35s ease`. A "Hover to compare" hint fades in on hover. The grid uses `auto-fit` columns with `minmax(240px, 1fr)` for responsive sizing.

## Why

CSS filter functions provide hardware-accelerated visual effects that can transform images without altering source files. This gallery demonstrates each filter in isolation so users can compare before/after states. The hover-to-compare pattern is intuitive — seeing the filtered image first, then hovering to reveal the original, makes each filter's impact immediately clear.
