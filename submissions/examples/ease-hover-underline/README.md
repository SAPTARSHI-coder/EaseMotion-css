# Hover Underline Reveal

## 1. What does this do?
`ease-underline-reveal` is a lightweight CSS utility class that creates a stylish left-to-right animated underline reveal effect when hovering over text links or inline elements.

## 2. How is it used?
It works by attaching a `::after` pseudo-element positioned at the bottom of the target element. Initially, the pseudo-element is hidden using `transform: scaleX(0)` with its `transform-origin` set to `bottom right`. On `:hover`, the `transform-origin` dynamically swaps to `bottom left` and transitions to `scaleX(1)`, drawing the line outwards smoothly from left to right.

```html
<a href="#" class="ease-underline-reveal">Hover Me</a>
```

It also automatically inherits the text color via `currentColor`, allowing seamless color customization using utility classes or custom styling.

## 3. Why is it useful?
Directly animating layout properties like `width` triggers costly browser layout recalculations (reflows) on every frame. By using `transform: scaleX()`, the animation is offloaded strictly to the GPU compositor layer. This guarantees butter-smooth 60fps rendering without triggering layout thrashing or affecting surrounding document flow.
