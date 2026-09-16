# Parallax Progress Bar with Cyberpunk Styling

A high-tech, futuristic progress bar component featuring a moving parallax stripe effect inside an angled, clipped-corner container. Built entirely with HTML and CSS.

## Features
- Classic Cyberpunk aesthetics including `clip-path` corners and `skewX` transformations
- Animated internal parallax stripes using `repeating-linear-gradient` and `@keyframes`
- Authentic CRT scanline overlay and 3D perspective grid background
- High-contrast neon color palette (Cyan, Yellow, Red) with `text-shadow` glows
- Blinking status text utilizing `steps(2)` for a rigid, terminal-like feel
- Fully responsive layout that adapts to smaller screens

## Usage
Include `demo.html` and `style.css` in your project. The progress percentage is controlled by modifying the `width` property on the `.progress-fill` element (currently set to `75%`). The internal parallax stripes (`.parallax-stripes`) will automatically pan seamlessly regardless of the current fill width. Ensure you load the `Share Tech Mono` font for the terminal text aesthetic.
