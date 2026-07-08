# Expand Image Hover

## What does this do?
Smoothly scales an image up when hovered, creating a subtle zoom-in effect
that draws attention without shifting the surrounding layout.

## How is it used?
Wrap any `<img>` in a container with the class applied:

```html
<div class="expand-image-hover" style="width: 300px;">
  <img src="photo.jpg" alt="Description" />
</div>
```

The wrapper clips overflow so the image expands within its own bounds.
No JavaScript required — pure CSS `:hover` + `transition`.

## Why is it useful?
Image hover feedback is one of the most common UI patterns — product cards,
gallery grids, profile photos. EaseMotion CSS already has hover utilities for
buttons and general elements (`ease-hover-grow`, `ease-hover-lift`), but no
dedicated image hover utility. This fills that gap with a single composable
wrapper class, consistent with the `ease-hover-*` philosophy: one class,
one behavior, no configuration needed.
