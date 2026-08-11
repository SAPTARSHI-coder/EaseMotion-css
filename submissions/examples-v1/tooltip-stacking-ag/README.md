# Tooltip Stacking Context Bug Reproduction

This submission isolates and reproduces Issue #48721, where Tooltip components get trapped behind other UI elements (like sticky headers, modals, or sibling cards) despite having an artificially high `z-index` (e.g., `99999`).

## 🐛 The Issue

The core of the issue is CSS **Stacking Contexts**. When a tooltip is a child of an element that generates a new stacking context, the tooltip's `z-index` is only relative to that local context. It cannot escape its parent to overlay elements in the root stacking context or sibling contexts that are painted higher/later.

## 🔬 Reproduction Scenarios

The included `demo.html` and `style.css` demonstrate 5 common scenarios that trigger this bug in modern web development.

1.  **Transform**: Applying `transform: translateZ(0)` or `scale()` to a parent. Often used for hardware acceleration or hover effects.
2.  **Opacity**: Applying `opacity: 0.99` to a parent. Often used for fade-in animations.
3.  **Filter**: Applying `filter: drop-shadow(...)` to a parent. Often used for complex shadow shapes.
4.  **Position + Z-index**: Applying `position: relative` or `absolute` alongside any `z-index` other than `auto` to a parent.
5.  **Overflow Hidden**: Applying `overflow: hidden` to a parent. This doesn't strictly cause a z-index issue, but physically clips the absolutely positioned tooltip from escaping the parent's boundaries.

In the demo, a pink "Overlapping Sibling" element with `z-index: 10` is placed below the cards. Because the cards generate their own stacking contexts (with z-indexes of 1, 2, 3, 4 respectively), the tooltip (inside the card, with z-index 99999) is trapped inside the card's context. The pink sibling (z-index 10) wins the stacking battle against the parent cards, effectively hiding the tooltip.

## 📱 Browser Compatibility

This behavior is not a bug in the browsers, but a fundamental part of the CSS specification. It reproduces consistently across:
*   Chrome (Desktop & Android)
*   Firefox (Desktop & Android)
*   Safari (macOS & iOS)
*   Edge

## 🛠️ Potential Solutions for Maintainers

Because this is fundamental CSS behavior, there is no CSS-only hack to make a child element "break out" of a parent's stacking context. Increasing the tooltip's `z-index` to `99999999` will never work.

Once the framework freeze is lifted, maintainers should consider the following architectural changes:

1.  **JavaScript Portals (Recommended)**: If EaseMotion CSS relies on JS wrappers (like React/Vue), tooltips should be rendered in a Portal attached directly to `document.body`. This guarantees they exist in the root stacking context.
2.  **JS Positioning (Popper.js/Floating UI)**: Similar to Portals, the tooltip DOM element is appended to the body, and JS calculates its absolute position relative to the trigger element.
3.  **Documentation Warnings**: If a JS-free approach is required, the official documentation must strictly warn developers *not* to place tooltip triggers inside containers that utilize `transform`, `opacity`, or `overflow: hidden`.
