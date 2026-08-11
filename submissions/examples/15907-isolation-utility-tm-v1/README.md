# Stacking Context Isolation Utility & Demos

Issue: [#15907](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/15907)

## What does this do?

Provides the `.ease-isolate` utility class and demonstrates how the `isolation: isolate` CSS property establishes a new stacking context, preventing child elements with blending modes or z-indexes from bleeding into or interacting with parent backdrops and sibling hierarchies.

## How is it used?

Apply the `ease-isolate` class to a wrapper or parent container to group its children's blending and stacking contexts:

```html
<!-- Without isolation: the tooltip or blending element interacts with the main page backdrop -->
<div class="card">
  <div class="blending-element"></div>
</div>

<!-- With isolation: the blending element is confined only to the card's backdrop -->
<div class="card ease-isolate">
  <div class="blending-element"></div>
</div>
```

## Why is it useful?

It enables robust component modularity in modern web design. By isolating stacking contexts, developers can guarantee that components using complex visual features (like `mix-blend-mode` or layered `z-index` overlays) render predictably and do not break when embedded in diverse, dynamic page backgrounds or nested dark/light mode layouts. This aligns with EaseMotion CSS's philosophy of high-performance, modular, and component-first visual styling.
