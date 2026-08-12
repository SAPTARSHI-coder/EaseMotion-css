# Fade FAB (Exit Animation) Mixin

A clean, accessible SCSS mixin engineered for Floating Action Buttons (FAB) that triggers a smooth fade and scaling drop exit transition sequence.

## What It Does
This mixin provides a fluid fade-out transition while subtly shrinking and lowering the element. It natively binds to the custom exit trigger state class (`.exit-active-nv`) or structural ARIA states (`[aria-hidden="true"]`) to keep scripts minimal.

## How to Use It
Import and include the mixin inside your component files, supplying your desired transition speed layout configuration:

```scss
@use 'fade-fab' as *;

.fab-button-nv {
  // Pass customized duration if needed (defaults to 0.3s)
  @include fade-fab-mixin-nv(0.4s);
}
```

## Why it is Useful
* **SCSS Compliant Layout:** Keeps styling variables modular without polluting global namespaces.
* **Semantic ARIA Binding:** Automatically hides visual structures when accessibility profiles hook onto `aria-hidden="true"`.
* **Motion Guard:** Safely cleans out scaling movement rules under `prefers-reduced-motion: reduce` bounds.
