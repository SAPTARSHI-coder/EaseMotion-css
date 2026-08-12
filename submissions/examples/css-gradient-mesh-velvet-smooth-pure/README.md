# CSS Mesh Gradient: Velvet Smooth

A collection of hardware-accelerated, JavaScript-free CSS gradients and mesh networks featuring deep, rich velvet textures and smooth blending.

## Features
- Pure CSS and HTML implementation. No WebGL, Canvas, or complex SVG mesh layers required.
- **Component Architecture**: 
  - **Full Screen Velvet Mesh**: A background effect achieved by placing several large, absolute-positioned `div` elements (orbs) across the viewport. By applying a heavy `filter: blur(100px)` to these elements and giving them a `mix-blend-mode: screen`, they blend together into a seamless fluid mesh. The `@keyframes` animation slowly translates and scales these orbs to create a constantly shifting, organic background.
  - **Interactive Mesh Card**: A self-contained mesh gradient. It uses a single element (`.card-mesh-bg`) with multiple overlapping `radial-gradient` backgrounds anchored to the four corners. The container applies a `blur(20px)` and an infinite `rotate` animation. On `:hover`, the animation accelerates and the blur is reduced, creating an intense, focused interaction without JavaScript.
  - **Velvet Button & Text**: Simpler applications of the velvet aesthetic. Both the button background and the text clipping (`-webkit-background-clip: text`) utilize a `linear-gradient` that is wider than the element (`background-size: 300% 100%`). A continuous `@keyframes` animation shifts the `background-position`, simulating light flowing over a velvet fabric.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on deep jewel tones (`#1c002c`, `#880e4f`, `#311b92`) to achieve the heavy, luxurious look of velvet.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all background position shifting, orb floating, and mesh rotation animations for users who prefer less motion, defaulting to a static, beautiful gradient.

## Usage
Open `demo.html` in your browser to view the gallery of velvet gradients. Observe the continuous fluid background, hover over the Mesh Card to interact with the internal gradient physics, and observe the flowing light on the Velvet Button and Text.

## Files
- `demo.html`: The HTML structure defining the layout and the markup for the background orbs and UI components.
- `style.css`: The styling, the heavy `filter: blur()` logic, the `mix-blend-mode` setup, and the multiple `radial-gradient` definitions.
