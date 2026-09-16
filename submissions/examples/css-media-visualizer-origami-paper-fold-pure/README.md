# CSS Media Visualizer: Origami Paper Fold

A hardware-accelerated, JavaScript-free audio and media UI element. Features 3D CSS transforms and `clip-path` geometry to create a tactile, folding paper aesthetic.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, SVG manipulation, or JavaScript required for the folding geometry or the play/pause state logic.
- **Component Architecture**: 
  - **The 3D Stage**: The parent `.origami-media-card` is given a `perspective: 1200px` property. This creates a 3D stage for the child elements to rotate within, allowing for realistic depth when elements fold towards or away from the viewer. The containers inside use `transform-style: preserve-3d` to pass this perspective down.
  - **The Folding Art**: The `.origami-art-container` uses a base `.origami-base` element styled as a diamond using `clip-path: polygon()`. On top of it sit two flaps (`.fold-top` and `.fold-bottom`), which are halves of the diamond. These flaps use `@keyframes` to animate their `rotateX()` property, anchoring their `transform-origin` to their respective center edges. This simulates paper flaps opening and closing continuously.
  - **The Geometric Visualizer**: Instead of traditional rectangular bars that scale vertically, this visualizer uses `.origami-peak` elements shaped into sharp triangles via `clip-path`. They animate their audio frequencies by using `rotateX()` anchored at the `bottom`. As they fold downwards, their background color darkens, simulating a shadow falling on the folded paper.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.origami-media-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to all folding elements. We then apply `transform: rotateX(179deg)` to the art flaps and `rotateX(85deg)` to the visualizer triangles. This forces the entire UI to "fold flat" into its paused state, driven smoothly by a CSS `transition`.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, all 3D rotations are disabled, presenting a static, semi-folded accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the origami flaps open and close, and the geometric visualizer triangles fold up and down. Click the Play/Pause button to see the magic: the entire UI will smoothly fold itself completely flat into a resting state when "paused", driven entirely by CSS state transitions.

## Files
- `demo.html`: The HTML structure defining the 3D containers, the `clip-path` geometry elements, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the `perspective` setups, the `rotateX` keyframes, the `clip-path: polygon()` shapes, and the `:has()` selector state interactions for the flat-fold resting state.
