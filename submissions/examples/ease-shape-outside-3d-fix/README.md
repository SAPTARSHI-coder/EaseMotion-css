# Abstract

This example demonstrates the architectural resolution for Issue #80452, where applying CSS 3D matrix transforms directly to floated elements with `shape-outside: polygon()` causes inline text wrapping to break. By decoupling layout properties from GPU-accelerated rendering transforms, inline content wraps along complex polygon boundaries while maintaining hardware-accelerated 3D effects.

## The GPU Compositing Bug

When a CSS 3D transform (such as `transform: rotateY()`) is applied directly to an element that utilizes `float` and `shape-outside`, the browser's rendering engine promotes that element to a separate compositing/GPU layer. 

Because the browser's layout engine calculates float geometry and text line wrapping on the main CPU thread *before* GPU compositing transforms are calculated, hoisting the element strips the main-thread layout engine of the element's actual shape geometry. As a result, the inline text reflows into a default rectangular bounding box, completely disregarding the `shape-outside: polygon()` path.

## The Decoupled Architecture

To resolve this without sacrificing hardware-accelerated 3D animations, we isolate layout responsibilities using a two-tier DOM structure:

1. **Static Layout Wrapper (`.ease-shape-wrapper`)**:
   - Manages all main-thread layout responsibilities: `float: left`, `shape-outside: polygon(...)`, and `clip-path: polygon(...)`.
   - Establishes a 3D perspective context (`perspective: 1000px`) without initiating a 3D transform on itself.
   - Remains un-transformed, guaranteeing that the browser float engine accurately wraps surrounding inline text along the polygon boundaries.

2. **Transformed Render Child (`.ease-shape-img`)**:
   - Resides strictly within the bounds of the static wrapper.
   - Receives all GPU-accelerated visual transformation instructions (`transform: rotateY(...)`).
   - Rotates and scales freely in 3D space on hover without triggering main-thread layout reflows or interfering with text wrapping.
