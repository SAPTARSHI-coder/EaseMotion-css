# ease-scrollbar-styling — Smooth Scrollbar Styling & Hover Mixins

## What does this do?

SCSS mixins for custom scrollbar styling with `scrollbar-width`, `scrollbar-color`, and `::-webkit-scrollbar` pseudo-elements. Supports hover state for thumb.

## How is it used?

```scss
@use 'mixins' as scrollbar;

.container { @include scrollbar.ease-scrollbar-style(#6c5ce7, #f1f5f9, 6px); @include scrollbar.ease-scrollbar-hover(#6c5ce7, #5b52d9); }
```
