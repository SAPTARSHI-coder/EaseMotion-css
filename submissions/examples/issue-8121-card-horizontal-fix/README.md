# Issue #8121: Horizontal Image Card Fix

This submission overrides the core `components/cards.css` component to resolve a severe layout bug reported in Issue #8121.

## What it does

When a developer combines `.ease-card-horizontal` and `.ease-card-image`, the core CSS forces the image to span `100%` width and hardcodes the border-radius to the top corners. This entirely breaks the horizontal flex layout. 

This submission fixes the layout by correctly adjusting the flexbox boundaries at the `min-width: 640px` breakpoint. The image assumes `40%` of the width, and the `border-radius` is dynamically shifted to the leading edge (left side).

## How to use it

To implement this layout fix, include the `style.css` provided in this directory *after* you include the main `easemotion.css` framework:

```html
<link rel="stylesheet" href="path/to/easemotion.css">
<link rel="stylesheet" href="path/to/issue-8121-card-horizontal-fix/style.css">
```

The cards will now behave precisely as expected!
