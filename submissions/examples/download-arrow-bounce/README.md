# CSS Download Arrow Bounce

## Description
A pure CSS animated download arrow that continuously bounces downward to draw user attention to a download action. Created for Issue #70155.

## Features
- **Pure CSS:** No JavaScript required.
- **Accessible:** Includes semantic HTML and ARIA labels.
- **Smooth Animation:** Infinite looping bounce animation utilizing CSS `@keyframes`.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` to halt the animation for users who prefer less motion.

## Usage
Simply wrap the SVG arrow in a container with the `.ease-download-bounce` class to apply the bouncing animation.

```html
<div class="ease-download-bounce">
    <svg>...</svg>
</div>
```
