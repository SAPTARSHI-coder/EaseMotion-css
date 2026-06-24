# Text Overflow Ellipsis (ssx)

## What does this do?

Provides a set of pure-CSS utilities to gracefully truncate overflowing text — including single-line ellipsis, multi-line clamping (2 and 3 lines), and a hover-to-reveal variant that expands the full text on hover.

## How is it used?

Apply any of the four utility classes directly to a text element inside a fixed-width container:

```html
<!-- Single-line truncation -->
<p class="text-ellipsis">This long text will be truncated...</p>

<!-- Multi-line truncation (2 lines) -->
<p class="text-clamp-2">This text will be clamped to two visible lines...</p>

<!-- Multi-line truncation (3 lines) -->
<p class="text-clamp-3">This text will be clamped to three visible lines...</p>

<!-- Hover to reveal full text -->
<p class="text-ellipsis-hover">Hover over me to see the full content...</p>