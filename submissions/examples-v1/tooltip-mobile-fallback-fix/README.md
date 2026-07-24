# Tooltip Mobile Fallback Fix

This submission overrides the core `components/tooltips.css` component to resolve an issue where default tooltips would get completely cropped off the screen on mobile devices.

## What it does

The core framework provides a responsive `@media (max-width: 640px)` override that changes `data-position="top"` tooltips to render at the bottom instead, preventing them from bleeding off the top edge of mobile viewports. However, this logic forgot to target `.ease-tooltip:not([data-position])`, which is the default tooltip and acts identically to "top".

This override targets `.ease-tooltip:not([data-position])` and applies the precise fallback properties, ensuring that default tooltips stay on screen when rendered on small devices.

## How to use it

Include the `style.css` provided in this directory *after* you include the main `easemotion.css` framework:

```html
<link rel="stylesheet" href="path/to/easemotion.css">
<link rel="stylesheet" href="path/to/tooltip-mobile-fallback-fix/style.css">
```
