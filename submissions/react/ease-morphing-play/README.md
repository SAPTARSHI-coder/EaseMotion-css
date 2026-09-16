# React Morphing Play Button (Hardware Accelerated)

A sleek media button where the triangular "Play" icon physically morphs and splits into two vertical "Pause" bars when clicked.

Historically, morphing organic shapes like this required loading massive vector animation engines like Lottie.js or Framer Motion, which parse JSON files and run heavy SVG path interpolation on the main thread. This submission demonstrates how to completely bypass SVG rendering by utilizing native CSS `clip-path: polygon()` transitions to mathematically force the browser's GPU to morph the geometric shapes!

---

## 🏛️ The Architecture

### 1. The DOM Structure
Instead of drawing an SVG `<path>`, we render two generic HTML `div` elements, absolutely positioned on top of each other inside a wrapper container.

### 2. State 1: The Play Triangle
To draw the Play icon, we mathematically construct a right-pointing triangle using `clip-path: polygon()`. However, because we want it to morph into *two* separate bars later, we must build the triangle using two separate shapes!
- `shape-1` forms the top half of the triangle.
- `shape-2` forms the bottom half of the triangle.

**The Secret to Polygon Transitions:** CSS can only animate `clip-path` if the starting shape and ending shape have the *exact same number of points*. Because our Pause bar is a rectangle (4 points), our Play triangle half must also have 4 points! We achieve this by duplicating one of the points in the center `(0 50%, 0 50%)` to create an invisible 4th point!

### 3. State 2: The Pause Bars
When the user clicks the button, React simply swaps the CSS class to `.is-playing`.
This triggers the `clip-path` transition to our new Pause state!
- `shape-1` mathematically morphs its 4 points into a rectangle on the top edge.
- `shape-2` mathematically morphs its 4 points into a rectangle on the bottom edge.

### 4. The Snapping Momentum (The Trick)
Wait, if `shape-1` is on the top edge, and `shape-2` is on the bottom edge, that draws a horizontal pause icon, not a vertical one!
To add a fluid, physical "snapping" momentum to the morph and hide the strict geometric interpolation from the user's eye, we apply `transform: rotate(90deg)` to the parent `.morph-icon-wrapper` at the exact same time the clip-path runs!
The entire icon spins 90 degrees clockwise *while* it morphs, perfectly orienting the horizontal bars into the classic vertical Pause position!

---

## 💻 Usage

Drop the component into your React app.

```jsx
import { MorphingPlay } from '@easemotion/react';

function App() {
  return (
    <MorphingPlay 
      initialState={false} 
      size={80} 
      onToggle={(isPlaying) => console.log('Music is playing:', isPlaying)} 
    />
  );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB` of Lottie, Bodymovin, or Framer Motion libraries!
- **DOM Manipulations:** `0`. No SVG nodes are manipulated or redrawn. We simply toggle a single CSS class string.
- **GPU Compositor:** Animating `clip-path: polygon()` coordinates is highly optimized by modern browser engines. Because we are mathematically transitioning 4 distinct points on a 2D plane, the browser offloads the geometric interpolation to the GPU, resulting in a flawless 60fps vector morph!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the CSS `transition` properties, allowing the icon to snap instantly between Play and Pause states to prevent motion sickness.
