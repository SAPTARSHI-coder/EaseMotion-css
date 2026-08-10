# CSS Origami Fold Text

A pure CSS 3D text animation where individual characters fold flat like paper and then unfold into their final form.

## Features

- Pure CSS implementation
- No JavaScript required
- Individual character animation
- 3D `rotateX()` and `rotateY()` transforms
- Perspective-based folding effect
- Staggered animation timing
- Responsive typography
- Light and dark mode support
- `prefers-reduced-motion` accessibility support
- Self-contained browser demo

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
<h1 class="origami-text" aria-label="ORIGAMI">
  <span aria-hidden="true">O</span>
  <span aria-hidden="true">R</span>
  <span aria-hidden="true">I</span>
  <span aria-hidden="true">G</span>
  <span aria-hidden="true">A</span>
  <span aria-hidden="true">M</span>
  <span aria-hidden="true">I</span>
</h1>