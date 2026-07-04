# Starting Style Dialog

## What

A `<dialog>` element that opens with a smooth fade-and-scale animation using `@starting-style` and `transition-behavior: allow-discrete`. The backdrop also transitions in. The entire animation is guarded by `@supports` and degrades gracefully.

## How

The dialog uses CSS transitions on `opacity`, `transform`, `overlay`, and `display`. `@starting-style` defines the initial state when the element first renders (i.e., when `open` is added). `transition-behavior: allow-discrete` enables animating discrete properties like `overlay` and `display`. A `@supports` check prevents the animation from breaking in non-supporting browsers.

## Why

`@starting-style` solves the problem of animating elements on first render — previously only possible with JavaScript. Combined with `allow-discrete`, it makes `<dialog>` open/close animations declarative, reducing JS boilerplate while keeping animations accessible via `prefers-reduced-motion`.
