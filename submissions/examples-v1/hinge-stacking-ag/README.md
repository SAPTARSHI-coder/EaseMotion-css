# Bug Reproduction: Hinge Animation Breaks Stacking Context

This directory contains a self-contained reproduction of the CSS stacking context issue when using the Hinge animation, as reported in Issue #49482.

## The Problem
When the `hinge` animation is applied to an element that resides within a parent container possessing its own CSS stacking context (created via properties like `transform`, `opacity`, `filter`, or `perspective`), the animated element cannot "escape" that parent's stacking context.

If there is an adjacent container with a higher `z-index`, the hinging element will incorrectly render *behind* the adjacent container as it drops down, regardless of how high the animated element's `z-index` is set.

## Reproduction Steps
1. Open `demo.html` in your browser.
2. The layout consists of two adjacent cards: **Card A** and **Card B**.
3. **Card A** contains the red "Click to Hinge" button. Crucially, Card A has `transform: scale(1)` applied to it, which creates a new CSS stacking context, and `z-index: 1`.
4. **Card B** is adjacent and has `z-index: 2` (and `position: relative`).
5. Click the "Trigger Hinge" button.
6. **Observation**: As the red button animates downward (translating Y by 700px), it passes behind Card B. Even though the button itself has `z-index: 9999`, it is bound by Card A's stacking context (z-index 1).

## Browser Compatibility
This behavior is consistent across all modern browsers (Chrome, Firefox, Safari, Edge) because it correctly follows the CSS Stacking Context specification. However, it results in an undesirable UI rendering experience when using the `hinge` animation in complex layouts.

## Why `z-index` doesn't fix it
A child element's `z-index` only applies within its parent's stacking context. Once a parent creates a stacking context (via `transform`, etc.), the child is locked within that layer relative to the rest of the document.

## Potential Framework Solutions (Post-Freeze)
Maintainers evaluating this issue once the core framework freeze is lifted may consider:
*   **Documentation Guidance**: Warning users against placing hinged elements inside transformed containers.
*   **React Portals**: For React wrappers of EaseMotion, suggesting the use of `createPortal` to move the animating element to the document `<body>` during the animation.
*   **Position Fixed**: Altering the element to `position: fixed` or `absolute` relative to the viewport dynamically before applying the animation (though this requires JS coordination).
