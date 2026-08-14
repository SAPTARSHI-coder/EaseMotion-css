# Center-Out Underline Hover Animation

## What does this do?
This adds a sleek, elegant hover effect where an underline grows smoothly from the center outwards.

## How is it used?
Apply the `.hover-underline-grow` class to any inline or inline-block element (such as an `<a>` tag). The effect automatically inherits the text color of the parent element.

Example:
```html
<a href="#" class="hover-underline-grow">
  Navigation Link
</a>
```

## Why is it useful?
- It is a highly sought after, polished micro-interaction for modern navigation bars and inline text links.
- It relies entirely on CSS `transform: scaleX()`, ensuring smooth 60fps performance without triggering browser repaints (unlike animating the `width` property).
- It is completely standalone, accessible (supports `:focus-visible`), and requires zero JavaScript.
