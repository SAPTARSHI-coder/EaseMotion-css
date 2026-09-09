# Orbit Tooltip Component

Resolves #42379.

### What does this do?
Adds an Orbit Tooltip component to EaseMotion CSS tailored for informative hubs or News Portals needing engaging detail views. When the user hovers over the target container, two things happen:
1. A descriptive tooltip drops down via a bounce animation.
2. An SVG or DOM satellite spins around the target element using an `orbit-spin` keyframe.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. Place your target element inside `.planet-container`, alongside `.satellite-orbit` and `.orbit-tooltip`.

### Why is it useful?
Creates a highly engaging hover interaction. Standard tooltips can be boring; adding an orbital ring highlights the element being focused on and provides a delightful micro-interaction without any JavaScript.
