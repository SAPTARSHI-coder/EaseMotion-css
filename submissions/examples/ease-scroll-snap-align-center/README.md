# Scroll Snap Align Center Utility Proposal (`ease-scroll-snap-align-center`)

A proposal for `core/utilities.css` adding standard CSS scroll snapping utility for centering items.

## 🚀 Features

- **`.scroll-snap-align-center`**: Applied to children of a scroll-snapping container. Forces the element to snap to the exact center of the scrollport when scrolling stops. Ideal for image carousels, cover flows, or centered horizontal lists.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Scroll horizontally in the carousel to see the cards perfectly snap into the center!

You apply this class to the *children* of a scrolling container:

```html
<div class="carousel" style="scroll-snap-type: x mandatory; overflow-x: scroll;">
  
  <div class="scroll-snap-align-center">Card 1</div>
  <div class="scroll-snap-align-center">Card 2</div>
  <div class="scroll-snap-align-center">Card 3</div>

</div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #15125
