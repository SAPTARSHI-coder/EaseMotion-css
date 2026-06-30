# 3D Rotating Cube Loader

## Description

A sleek, hardware-accelerated 3D rotating cube loading animation. It uses pure CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, and `translateZ/rotateX/rotateY`) to construct and spin a six-faced cube. It provides a modern, cyberpunk-inspired alternative to standard 2D loading spinners and requires zero JavaScript.

## Files

- `demo.html`: Contains the HTML structure for the 3D scene and the 6 cube faces.
- `style.css`: Contains the 3D perspective setup, face positioning, neon styling, and rotation keyframes.

## How to use

1. Open `demo.html` in your browser to see the 3D spinning effect.
2. Copy the HTML and CSS into your project.
3. Wrap the 6 face `div`s inside a `.cube-qn` container, and wrap that inside a `.scene-qn` container.
4. **Customization:**
   - **Size:** To change the size of the cube, update the `width` and `height` in `.scene-qn` and `.face-qn`. _Crucial:_ You must also update the `translateZ()` values on the faces to be exactly half of the new width/height.
   - **Color:** Change the neon theme by modifying the `border`, `background`, and `box-shadow` colors in `.face-qn`.
   - **Speed:** Adjust the `4s` duration in the `animation` property of `.cube-qn` to make it spin faster or slower.
