# Clip Path Back to Top

Resolves #42409.

### What does this do?
Adds a Clip Path Back to Top component to EaseMotion CSS tailored for Food Delivery apps. It utilizes the CSS `clip-path` property to create a fluid, expanding background effect when hovered. The icon also triggers the `ease-slide-up` animation to playfully emphasize the "going up" action.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. Place it at the bottom of long scrolling pages. When the user hovers, the orange background expands from the bottom via `clip-path: circle()`.

### Why is it useful?
Provides an incredibly smooth, performant hover interaction without JS. `clip-path` animations are GPU accelerated and create a highly polished, app-like feel for floating action buttons.
