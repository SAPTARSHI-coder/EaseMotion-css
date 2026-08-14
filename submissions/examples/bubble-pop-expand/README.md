# Bubble Pop Expand Animation

## Overview

This submission demonstrates a reusable **Bubble Pop Expand** animation using pure CSS. The element compresses slightly before expanding with a smooth bubble-like pop effect using hardware-accelerated transforms.

## Features

- Pure CSS animation
- Bubble pop expansion effect
- Hardware accelerated using `transform` and `opacity`
- CSS keyframes
- Configurable timing using CSS variables
- `prefers-reduced-motion` support
- Responsive demo

## Customization

```css
--ease-duration: 550ms;
--ease-timing: cubic-bezier(.34,1.56,.64,1);
```

## Demo

Open `demo.html` directly in any modern browser.

## Files

- demo.html
- style.css
- README.md

## Notes

All files are contained entirely within `submissions/` to comply with the repository contribution guidelines.
# Bubble Pop Expand

1. **What does this do?** 
   A playful, bouncy bubble-pop expanding animation using transform scaling and opacity.
2. **How is it used?** 
   Add the `ease-anim-bubble-pop-expand` class to any element you want to pop in.
   ```html
   <div class="ease-anim-bubble-pop-expand">Content</div>
   ```
3. **Why is it useful?** 
   It's perfect for modal entrances, notification badges, or interactive elements requiring a hardware-accelerated, playful entrance effect that fits EaseMotion's fluid design philosophy.
