# Pure CSS 3D Cube Carousel Gallery

## What does this do?

An advanced, zero-JavaScript 3D geometric cube gallery that rotates along various axes to reveal its faces based on viewport hover quadrant triggers.

## How is it used?

1. Link the component stylesheet:
   `<link rel="stylesheet" href="style.css">`
2. Set up the markup structure with the trigger zones laid out as absolute siblings before the 3D mesh wrapper:

   ```html
   <div class="ease-cube-viewport">
     <div
       class="pad-trigger top-l"
       style="position: absolute; top: -120px; left: -120px; width: 250px; height: 250px; z-index: 10;"
     ></div>
     <div
       class="pad-trigger top-r"
       style="position: absolute; top: -120px; right: -120px; width: 250px; height: 250px; z-index: 10;"
     ></div>
     <div
       class="pad-trigger bot-l"
       style="position: absolute; bottom: -120px; left: -120px; width: 250px; height: 250px; z-index: 10;"
     ></div>
     <div
       class="pad-trigger bot-r"
       style="position: absolute; bottom: -120px; right: -120px; width: 250px; height: 250px; z-index: 10;"
     ></div>

     <div class="ease-cube-mesh">
       <div class="cube-face front">Front</div>
       <div class="cube-face back">Back</div>
       <div class="cube-face left">Left</div>
       <div class="cube-face right">Right</div>
       <div class="cube-face top">Top</div>
       <div class="cube-face bottom">Bottom</div>
     </div>
   </div>
   ```

## Why is it useful?

- **Zero JavaScript dependency**: Rotations are entirely triggered via CSS hover states and parent-sibling combinators.
- **Hardware-Accelerated rendering**: Smooth transitions run on the browser's GPU layout engine.
- **Engaging UI/UX**: Creates a premium 3D spatial feel to present images, text content, or feature highlights.

## Tech Stack

- HTML
- CSS (Pure CSS, no JS)

## Preview

Open `demo.html` directly in your browser to interact with the 3D cube controls.
