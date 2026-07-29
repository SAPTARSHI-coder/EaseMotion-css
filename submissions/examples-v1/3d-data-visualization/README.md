# Pure CSS 3D Data Visualization Engine

A high-performance, interactive 3D data visualization chart engineered natively in the browser—completely bypassing the need for Canvas, WebGL, or JavaScript charting libraries like D3.js.

## 🚀 How it works

This architecture utilizes CSS Custom Properties (Variables) as a reactive state mechanism. 

1. When users toggle "Data Filters" (via hidden radio inputs), sibling combinators dynamically override the global metric variables (e.g., `--val-a`, `--val-b`, `--color-a`). 
2. The DOM-based 3D Geometry—constructed using advanced `transform-style: preserve-3d` and geometric origin math—dynamically inherits these variables via the `calc()` function. 
3. This triggers a fluid, hardware-accelerated volumetric morphing of the 3D data bars, rendering real-time data state changes natively in the CSSOM without thrashing the DOM layout.

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`. The 3D scene uses an isometric perspective that works seamlessly in modern browsers.

## ✨ Why it fits EaseMotion CSS

Data visualization is one of the heaviest payloads on modern web applications due to massive JavaScript dependencies. EaseMotion CSS proves that complex, interactive visual states can be handled natively. This submission is an architectural masterclass demonstrating how to build complex 3D objects using 6-face cubic geometry and how to use CSS Variables as a reactive data-binding layer.
