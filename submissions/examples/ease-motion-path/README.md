# Ease Motion Path

A pure CSS implementation showcasing element animation along custom geometric curves using the native CSS Motion Path API (`offset-path` and `offset-rotate`).

## 1. What does this do?

This component animates an element along a complex geometric curve (specified using SVG path syntax) purely through native CSS. The element seamlessly follows the defined trajectory while automatically aligning its orientation to the direction of motion along the path.

## 2. How is it used?

Define an SVG path geometry using `offset-path` and set `offset-rotate: auto` so the element automatically rotates along the path direction:

```css
.ease-path-element {
  /* Define path coordinates using SVG path syntax */
  offset-path: path('M 50 200 C 200 50, 300 50, 400 200 S 600 350, 750 200');
  
  /* Automatically orient element along motion angle */
  offset-rotate: auto;
  
  /* Animate offset-distance along path */
  animation: ease-move-along-path 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
}

@keyframes ease-move-along-path {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

## 3. Why is it useful?

This completely replaces heavy JavaScript animation libraries such as GSAP MotionPathPlugin or Anime.js for curved spatial trajectories. By shifting geometric path calculations directly to the browser's native rendering engine, it eliminates script parsing overhead, reduces main-thread work, and delivers buttery smooth 60fps hardware-accelerated animations zero dependencies.
