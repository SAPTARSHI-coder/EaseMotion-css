# CSS 3D Foldable Origami Card

## Description
This submission resolves Issue #68978 by creating an interactive 3D foldable "origami" card using pure CSS. Nested child panels swing downward (unfold) upon hovering the main card.

## Features
- **Pure CSS 3D Transforms**: Uses `perspective` and `transform: rotateX()` to create realistic 3D depth and folding mechanics.
- **Nested Segmentation**: Child panels are nested inside the parent panel within the HTML. Because they are anchored to the bottom (`top: 100%`) with `transform-origin: top`, unfolding a parent inherently moves the child down with it.
- **Staggered Animations**: By applying calculated `transition-delay` values, the panels unfold one-by-one from top to bottom, rather than all at once. The reverse delay logic handles the folding back animation smoothly when the mouse leaves.

## Usage
Wrap the panels in a `.ease-origami-wrapper` to provide perspective. The root card is `.ease-origami-card`, and subsequent foldable panels should be classed as `.ease-origami-panel` and nested within their respective parent element.

```html
<div class="ease-origami-wrapper">
  <div class="ease-origami-card">
    <p>Main visible card</p>

    <!-- First folded section -->
    <div class="ease-origami-panel">
      <p>Folded panel 1</p>

      <!-- Second folded section -->
      <div class="ease-origami-panel">
        <p>Folded panel 2</p>
      </div>

    </div>

  </div>
</div>
```
