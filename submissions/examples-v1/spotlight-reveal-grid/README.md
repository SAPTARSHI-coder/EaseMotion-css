# Cursor-Tracking Spotlight Reveal Grid

### 1. What does this do?
This component creates a "spotlight" or "flashlight" effect that follows the user's cursor across a dark-mode grid of cards. It uses a CSS `radial-gradient` that updates its origin point (`--mouse-x` and `--mouse-y`) based on JavaScript cursor tracking.

### 2. How is it used?
Include the structural HTML and load both `theme-vars.css` and `style.css`. Load `script.js` before the closing body tag. The JavaScript automatically generates the grid elements and binds the mouse movement coordinates directly to CSS custom properties.

### 3. Why is it useful?
It provides a highly requested, modern "gaming UI" or "bento box UI" hover effect without relying on WebGL or heavy canvas implementations. This creates an immersive experience that significantly elevates portfolio and pricing layouts.
