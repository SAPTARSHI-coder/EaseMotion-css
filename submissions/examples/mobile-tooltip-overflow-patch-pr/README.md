# Mobile Tooltip Overflow Patch (-pr)

This submission resolves a responsive layout bug in `components/tooltips.css` where tooltips positioned to the left or right bleed out of the viewport on mobile devices, causing horizontal scrolling.

## What does this do?
It introduces a `@media (max-width: 640px)` query that overrides `.ease-tooltip[data-position="left"]` and `.ease-tooltip[data-position="right"]`. It forces them to snap underneath the element (acting like a bottom tooltip) whenever the screen is too narrow to display them on the sides. It completely handles repositioning the tooltip box and rotating the CSS arrow pseudo-element.

## How is it used?
Simply include this CSS, and all existing left/right tooltips in the framework instantly become responsive! No HTML changes required.

## Why is it useful?
The core framework already provided a fallback for `top` tooltips (moving them to the bottom to avoid top-cropping on mobile), but forgot to secure the lateral tooltips. This patch provides the exact CSS the maintainer needs to plug this bug and prevent lateral overflow in the framework.
