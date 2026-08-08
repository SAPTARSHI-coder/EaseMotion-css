# macOS Dock Magnification Navigation Bar

A modern macOS desktop dock navigation component built with pure CSS `:hover` scaling and `:has()` sibling proximity selection rules.

## 1. What does this do?
This component replicates the famous Apple macOS desktop dock icon magnification effect when hovering over icons, smooth spring curve transforms, active application indicator dots, and contextual tooltips.

## 2. How is it used?
Wrap menu items in `.dock-bar` container and assign icon graphics with tooltip attributes:

```html
<div class="dock-bar">
  <div class="dock-item" data-tooltip="Terminal">
    <div class="dock-icon">...</div>
    <div class="dock-dot active-dot"></div>
  </div>
</div>
```

## 3. Why is it useful?
- **Zero JavaScript Overhead**: Uses modern CSS `:has()` relational selector logic for smooth sibling icon enlargement.
- **Mac Desktop Styling**: Frosted glassmorphism background panel with subtle backdrop blur filter.
- **Accessible Design**: Reduces hover magnification scale when `prefers-reduced-motion: reduce` is detected.
