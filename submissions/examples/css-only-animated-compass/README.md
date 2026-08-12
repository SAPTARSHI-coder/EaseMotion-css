# CSS-Only Animated Compass

A beautifully designed, animated compass component built purely with HTML and CSS. It simulates a dynamic needle searching for magnetic North.

## Features
- ✨ **100% CSS-only**: Driven entirely by CSS animations without any JavaScript dependencies.
- 🧭 **Dynamic Needle Animation**: Uses complex `@keyframes` with `transform: rotate()` to simulate a compass needle spinning erratically before finally settling perfectly on North.
- 🎨 **Neumorphic Design**: Styled with soft, extruded inset and outset shadows (`box-shadow`) to give the compass chassis a realistic 3D appearance.
- 📐 **Clean Geometry**: The compass needle is rendered using the powerful `clip-path: polygon()` CSS property, eliminating the need for SVG or image assets.

## Files
- `demo.html`: The HTML structure forming the compass body, directional letters, and the needle container.
- `style.css`: The stylesheet providing the neumorphic aesthetics and the `find-north` keyframe animation logic.

## Usage
Add the HTML to your page and link the CSS. The animation loops indefinitely, mimicking a device trying to calibrate its internal magnetometer.
