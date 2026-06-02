# Tooltip Component (#250)

### What does this do?
Adds a performant, zero-JavaScript `ease-tooltip` component to the framework. It extracts text from a `data-tooltip` HTML attribute and beautifully renders it as a floating bubble with an arrow pointer using CSS pseudo-elements (`::after` and `::before`).

### How is it used?
Apply the `.ease-tooltip` class and a `data-tooltip` attribute to any container element (like a button or a span).

```html
<button class="ease-btn ease-tooltip ease-tooltip-top" data-tooltip="Save your changes">
  Save
</button>
```

**Position Variants:**
- `.ease-tooltip-top` (or omit entirely, top is default)
- `.ease-tooltip-bottom`
- `.ease-tooltip-left`
- `.ease-tooltip-right`

### Why is it useful?
1. **Zero JS Overhead:** Because it utilizes HTML attributes and `content: attr()`, there is absolutely no JavaScript required to mount, position, or unmount the tooltip. This makes it incredibly lightweight and performant.
2. **Accessible by Default:** It respects `prefers-reduced-motion` flawlessly. Normally the tooltips have a smooth slide-in effect, but when reduced motion is enabled, the `transform` animation is stripped out while the `opacity` fade is preserved to prevent motion sickness.
