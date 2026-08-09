# Fade-in Tooltip Example

## What does this example do?
This example demonstrates a pure CSS tooltip that smoothly fades in and slides up slightly when the user hovers over or focuses its parent trigger element.

## How is it used?
Wrap your tooltip text inside a `.tooltip` element and place it directly inside a parent container with the `.tooltip-trigger` class. Apply the `.ease-fade-in-up` utility class to the tooltip itself.

```html
<button class="tooltip-trigger" aria-describedby="tooltip-id">
    Hover Me
    <span class="tooltip ease-fade-in-up" id="tooltip-id" role="tooltip">
        This is a helpful tip!
    </span>
</button>
```

The CSS handles the absolute positioning to place the tooltip above the trigger element. The animation is applied automatically via the `:hover` and `:focus-visible` pseudo-classes on the parent.

## Why is it useful?
Tooltips are essential for clarifying dense interfaces without taking up permanent screen real estate. A subtle, hardware-accelerated fade-in animation makes the tooltip feel intentional and polished, preventing the jarring pop-in effect of standard browser titles.

### Accessibility Notes
- This implementation fully supports keyboard navigation (`:focus-visible` and `:focus`).
- `aria-describedby` links the trigger to the tooltip for screen readers.
- It respects `prefers-reduced-motion: reduce` by stripping the animation and instantly showing the tooltip if the user prefers no motion.
