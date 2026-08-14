# ease-anchor-tooltip

A high-performance, pure CSS tooltip component utilizing the native CSS Anchor Positioning API for automatic viewport collision detection and flipping.

---

### 1. What does this do?
`ease-anchor-tooltip` creates intelligent tooltips that anchor directly to target trigger elements without relying on JavaScript event listeners or positioning logic. By using `anchor-name: --ease-tooltip` and `position-anchor: --ease-tooltip` paired with `position-try-fallbacks: flip-block, flip-inline`, the tooltip dynamically recalculates its position and automatically flips (e.g. from top to bottom or left to right) whenever it collides with viewport bounds.

---

### 2. How is it used?
Wrap the trigger element and the popover element within a `.ease-tooltip-wrapper`. Assign `.ease-anchor-trigger` to the target trigger and `.ease-anchor-popover` to the tooltip element.

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-tooltip-wrapper">
  <button class="ease-anchor-trigger">Hover Me</button>
  <div class="ease-anchor-popover">
    Pure CSS Tooltip Content
  </div>
</div>
```

---

### 3. Why is it useful?
- **Zero JavaScript Overhead**: Completely eliminates heavy third-party positioning libraries such as Popper.js or Floating UI, saving JavaScript bundle size and reducing main thread execution time.
- **Native Browser Engine Performance**: Runs entirely inside the browser's compositing & rendering pipeline, guaranteeing smooth 60fps positioning recalculations during scrolling or window resizing.
- **Viewport Bounds Intelligent Flipping**: Native `position-try-fallbacks` ensures tooltips never overflow screen edges, maintaining accessibility and visual polish automatically.
- **Progressive Enhancement**: Includes fallbacks via `@supports not (position-anchor: --ease-tooltip)` to guarantee functional tooltip placement on legacy browsers.
