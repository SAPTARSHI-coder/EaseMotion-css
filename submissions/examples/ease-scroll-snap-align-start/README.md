# Scroll Snap Align Start Utility Proposal (`ease-scroll-snap-align-start`)

A proposal for `core/utilities.css` adding standard CSS scroll snapping utility for aligning items to the start of a scroll container.

## 🚀 Features

- **`.scroll-snap-align-start`**: Applied to children of a scroll-snapping container. Forces the element to snap to the exact start (top or left) of the scrollport when scrolling stops. Ideal for full-screen feeds, standard image carousels, or sliding menus.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Scroll horizontally in the carousel to see the cards perfectly snap to the left edge!

You apply this class to the *children* of a scrolling container:

```html
<div class="carousel" style="scroll-snap-type: x mandatory; overflow-x: scroll;">
  
  <div class="scroll-snap-align-start">Card 1</div>
  <div class="scroll-snap-align-start">Card 2</div>
  <div class="scroll-snap-align-start">Card 3</div>

</div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #15123
