# CSS Hover Card Lift Shadow

A pure CSS interaction showcasing smooth, performant card elevation using hardware-accelerated transforms and dynamic, multi-layered box-shadows, built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI. Importantly, the dark mode redefines the `--shadow-lifted` variable to be darker and more spread out, as shadows are inherently harder to see on dark backgrounds.
- **Component Architecture (Documented in Code)**: 
  - **Hardware Acceleration**: The lifting animation utilizes `transform: translateY(-8px)`. Transforms are hardware-accelerated by the GPU, ensuring smooth 60fps animations without triggering expensive layout repaints that animating margins or positioning would cause.
  - **Multi-layered Shadows**: The depth effect is achieved not with a single harsh shadow, but by stacking multiple shadows within the `box-shadow` property (e.g., a tight ambient shadow plus a larger, softer directional shadow). This closely mimics real-world diffuse lighting.
  - **Custom Easing**: The transition uses a custom cubic-bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for the transform, creating a slight "spring" effect that feels weighty and deliberate, rather than a linear robotic snap.
- Fully accessible semantic structure. The cards are built as standard `<a>` anchor tags for robust keyboard navigability and screen reader support. Honors the `prefers-reduced-motion` accessibility standard by explicitly disabling the physical `translateY` movement for motion-sensitive users, while retaining the shadow change as a gentle visual feedback cue.

## Usage
Open `demo.html` in your browser. Hover over the cards (or use keyboard `Tab` navigation) to experience the smooth elevation and deeper shadow reveal.

## Files
- `demo.html`: The HTML structure demonstrating the card grid and content layout.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented transform and shadow transition logic.
