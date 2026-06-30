# Horizontal Scroll Snap Utilities Proposal (`ease-scroll-snap-type-x`)

A proposal for `core/utilities.css` adding standard CSS scroll snapping utilities for horizontal (X-axis) containers.

## 🚀 Features

- **`.scroll-snap-type-x-mandatory`**: Forces the scroll container to always rest on a snap point when scrolling stops. Ideal for strict image carousels or sliding galleries.
- **`.scroll-snap-type-x-proximity`**: Allows the scroll container to rest between snap points if not scrolled firmly, but will snap if close enough. Ideal for looser horizontal scrolling lists.

*(Also includes `.em-snap-align-*` helpers in the demo which are necessary for the snap points to function).*

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Scroll left and right inside the two containers to feel the difference between mandatory and proximity snapping!

You can apply the proposed utility classes to any horizontal scrollable container:

```html
<!-- Container gets the scroll-snap-type class -->
<div class="scroll-snap-type-x-mandatory" style="display: flex; overflow-x: scroll; width: 100%;">
  
  <!-- Children get a scroll-snap-align class -->
  <div class="em-snap-align-start" style="flex: 0 0 100%;">Carousel Item 1</div>
  <div class="em-snap-align-start" style="flex: 0 0 100%;">Carousel Item 2</div>

</div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #15127
