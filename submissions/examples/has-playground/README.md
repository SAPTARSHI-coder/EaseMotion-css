# CSS :has() Animation Playground

## What does this do?

Demonstrates parent-dependent animations using the CSS `:has()` pseudo-class — a card reacts to a checked checkbox, a form glows on input focus, and a list dims unchecked items — all through parent selectors.

## How is it used?

```css
.parent:has(:checked) {
  scale: 1.05;
  border-color: blue;
}

.parent:has(input:focus) {
  box-shadow: 0 0 0 4px rgba(0, 0, 255, 0.1);
}
```

## Why is it useful?

Before `:has()`, parent elements could not react to their children's state — you needed JavaScript to add/remove classes on the parent. `:has()` makes parent-dependent animations declarative, enabling cleaner HTML without JS event listeners. This aligns with EaseMotion CSS's philosophy of expressive, zero-dependency CSS.
