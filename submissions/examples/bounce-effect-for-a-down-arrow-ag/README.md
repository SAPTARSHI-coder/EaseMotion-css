# Bounce Effect for a Down Arrow

## What does this example do?
This example demonstrates a classic "Hero Section" scroll indicator featuring a down arrow that subtly and continuously bounces vertically to prompt the user to scroll down for more content.

## How is it used?
Place your arrow icon (SVG, text, or image) inside a container and apply the `.ease-bounce-down` utility class to it.

```html
<div class="scroll-indicator">
    <span class="scroll-text">Scroll down</span>
    <div class="down-arrow ease-bounce-down" aria-hidden="true">
        ↓
    </div>
</div>
```

The CSS uses a smooth `ease-in-out` animation over a 2-second infinite loop to gracefully translate the arrow down 12px and back to its origin.

## Why is it useful?
A bouncing down arrow is a widely recognized UX pattern that guides users to interact with your site, particularly on full-height (`100vh`) hero sections where below-the-fold content might not be immediately obvious. 

This implementation is:
- **Performant**: Only the `transform: translateY` property is animated, which allows browsers to utilize hardware acceleration without triggering expensive layout repaints.
- **Accessible**: A `prefers-reduced-motion: reduce` media query is included to disable the animation for users with vestibular disorders. Additionally, `aria-hidden="true"` is applied to the purely decorative arrow so screen readers can focus on the readable "Scroll down" text.
