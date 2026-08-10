# CSS Aurora Borealis Background

A serene, drifting Northern Lights background effect powered entirely by CSS gradients, heavy blur filters, and hardware-accelerated transform animations.

## Features
- Pure CSS and HTML (Zero JavaScript required for generating the effect or managing the animation loop).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: light/dark`). The Dark mode defaults to a deep space theme with vibrant neon lights, while the Light mode adapts to a soft, pastel sunset aesthetic.
- **Heavy Blur Architecture (Documented in Code)**: 
- The core of the aurora effect relies on placing several large DOM elements (`.aurora-blob`) behind the main content.
- These blobs are given vibrant background colors and a massive `filter: blur(80px)`.
- As these blurred shapes overlap, the browser mathematically mixes their colors, creating smooth, ethereal, liquid-like transitions that mimic atmospheric lights.
- **High Performance Transform Keyframes**: 
- Animating CSS filters or properties like `top` and `left` directly causes severe layout thrashing, destroying performance on complex blurs.
- This component strictly animates only the `transform` property (`translate`, `scale`, `rotate`). 
- Because transforms are processed directly by the GPU, the massive 80px blur remains buttery smooth even on mobile devices.
- **Complimentary Glassmorphism**: The demo includes a modern content card utilizing `backdrop-filter: blur(16px)` to create a frosted glass effect that pairs perfectly with the drifting lights behind it.
- Fully accessible with `prefers-reduced-motion` support. The drifting animation is completely disabled for motion-sensitive users, freezing the blobs into a beautiful static gradient mesh.

## Usage
Open `demo.html` in your browser. You will see a modern glassmorphism content card floating over a deep space background with vibrant cyan, green, and purple aurora lights drifting behind it. Toggle your operating system's Light mode to see the theme cleanly transition into a bright pastel aesthetic.

## Files
- `demo.html`: The HTML structure detailing the absolute positioning of the aurora container and the glassmorphism card.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the GPU-accelerated drift keyframes and the heavy blur technique.
