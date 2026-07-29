# Interactive Motion Layer Visualizer

An educational visualization tool demonstrating how different CSS animation properties affect the browser rendering pipeline.

## Features

- Compare GPU-friendly animations with layout-triggering animations.
- Interactive property selector.
- Duration control.
- Easing selector.
- Replay and pause controls.
- Live rendering pipeline visualization.
- Performance recommendations.
- Explanation panel.
- Responsive layout.
- Keyboard-friendly controls.
- No external libraries.

## Browser Rendering Pipeline

The visualizer highlights the browser stages involved in rendering animations:

- Style
- Layout
- Paint
- Composite

Animations using **transform** and **opacity** primarily affect the **Composite** stage, making them more efficient.

Animations using **width**, **height**, **top**, or **left** trigger additional rendering work including Style, Layout, Paint, and Composite.

## Technologies

- HTML5
- CSS3
- CSS Variables
- JavaScript (Vanilla)

## Folder Structure
