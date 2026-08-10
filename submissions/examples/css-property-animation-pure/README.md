# CSS @property Animation

A demonstration of utilizing the modern CSS `@property` API to type-cast CSS variables, allowing for smooth mathematical interpolation of properties that were previously impossible to animate natively, such as gradient angles.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The `@property` API**: Traditionally, CSS custom variables (e.g. `--gradient-angle`) are treated as opaque strings by the browser. If you try to animate them in a `@keyframes` block, they snap abruptly from the start state to the end state. By using the `@property` rule to define `--gradient-angle` with `syntax: '<angle>'`, we instruct the browser's rendering engine that this variable represents a mathematical degree.
  - **The Conic Gradient Animation**: The `.animated-card` utilizes a pseudo-element (`::before`) filled with a `conic-gradient()`. The gradient's starting rotation is bound to `var(--gradient-angle)`. A simple `@keyframes` block animates this variable from `0deg` to `360deg`. Because of the `@property` definition, CSS smoothly interpolates all the intermediate frames, creating a seamless, spinning gradient border effect without physically rotating any DOM elements.
  - **The Inner Mask**: The solid `.card-content` layer sits precisely 4 pixels inside the container (`inset: 4px`). It masks out the center of the underlying spinning gradient, revealing only the 4-pixel perimeter, which creates the glowing border effect.
  - **Graceful Fallbacks**: Includes a `@supports` query block to detect legacy browsers. If the modern `@property` or `conic-gradient` interpolation is unsupported, the component seamlessly degrades to a physically rotating square using `transform: rotate()`, hidden behind an `overflow: hidden` mask.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: light/dark`).
- Fully accessible semantic structure. The spinning gradients are purely decorative visual effects. Honors the `prefers-reduced-motion` accessibility standard by disabling the continuous rotation animations for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Hover over the card to interact with the animation speed. 
*Note: Best viewed in modern versions of Chrome, Edge, Safari (16.4+), or Firefox (128+).*

## Files
- `demo.html`: The HTML structure defining the card masking layers.
- `style.css`: The styling, the critical `@property` declaration, and the gradient interpolation `@keyframes`.
