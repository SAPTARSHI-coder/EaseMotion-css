# Components Navigation Subheadings Links Fix

## 1. What does this do?
Fixes the left-side navigation links for "Buttons", "Cards", and "Scroll Progress" (subheadings under Components) so that clicking them correctly scrolls the page to position the target heading clearly visible below the fixed header instead of hiding them behind it.

## 2. How is it used?
Apply `scroll-margin-top` to all `h3` heading elements that have an `id` attribute:

```css
.docs-h3[id] {
  scroll-margin-top: calc(var(--docs-header-h, 60px) + var(--ease-space-4, 1rem));
}
```

This clears the space occupied by the fixed header (height `60px`) and adds a `1rem` margin above the heading.

## 3. Why is it useful?
When navigating via anchor links (e.g. clicking "Buttons" in the sidebar to jump to `#buttons`), the browser's default behavior scrolls the element to the very top of the viewport. Because the header is fixed, it covers the heading, hiding it from the user. Adding `scroll-margin-top` to target headings ensures they snap to the correct, fully visible position, improving UX and ensuring seamless navigation across documentation pages.
