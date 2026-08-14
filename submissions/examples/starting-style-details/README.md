# @starting-style Details/Summary

## Summary
Demonstrates smooth open/close animations for native HTML `<details>` disclosure widgets using `@starting-style` and `transition-behavior: allow-discrete`.

## Key Concepts
- **`@starting-style`** defines the initial state of an element before it is displayed, enabling entry animations for elements transitioning from `display: none` to visible.
- **`transition-behavior: allow-discrete`** allows transitions on discrete properties like `display` and `height: auto`, which normally can't be animated.
- **Discrete property animation** works by setting `overflow: clip` and transitioning `height` and `opacity` simultaneously, with `@starting-style` providing the initial "closed" values.

## Usage
Add `transition-behavior: allow-discrete` and `transition` properties to your `<details>` element, then define `@starting-style` with the entry state values for a smooth reveal animation.
