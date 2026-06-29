# Morphing Liquid Physics Engine 💧

A premium, pure-CSS animation artwork demonstrating a living liquid simulation. This showcase proves that complex fluid dynamics, surface tension, and metaball merging can be achieved without WebGL, Canvas, or JavaScript.

## 🌟 What does this showcase?
This project demonstrates an organic, constantly morphing liquid core that stretches, splits, and merges naturally. It uses a combination of advanced CSS `@keyframes`, SVG filtering (`feColorMatrix`), and glassmorphism to create a stunning "liquid energy" aesthetic.

## 🚀 How is it used?
Open `demo.html` in any modern web browser to view the living liquid simulation. 
**Interaction**: Hover your cursor directly over the liquid core to agitate the fluid—accelerating waves, speeding up droplets, intensifying the glow, and expanding the liquid's surface tension.

## 💡 Why is it useful?
It pushes the boundaries of CSS physics and organic motion, specifically showcasing:
- **Metaballs via SVG Filter**: Using `#goo` filter to make DOM elements merge seamlessly.
- **Organic Morphing**: Utilizing complex `border-radius` animations to simulate living shapes.
- **Pseudo-element Shimmer**: Creating convincing wet-surface reflections using animated gradients.
- **Hover Acceleration**: Overriding `animation-duration` and `filter` dynamically on hover to create physical reactions.

## ✨ Features
- **100% Pure CSS & HTML**: No JavaScript, no frameworks, no external libraries.
- **Living Fluid Dynamics**: Constant, non-repetitive blob morphing and rotating.
- **Surface Tension**: Droplets visually stretch (`scaleX` / `scaleY`) as they pull away or merge with the main core.
- **Glassmorphism Panel**: A beautifully frosted, floating information HUD.
- **18 Custom `@keyframes`**: Controlling everything from background mist to micro-bubbles.

## 🎬 Animation Breakdown
1. **LIQUID MORPHING**: The main blobs rotate and independently morph their border-radii.
2. **SURFACE WAVES**: Semi-transparent linear gradients sweep across the liquid surface.
3. **RIPPLE PROPAGATION**: Expanding circular borders simulating physical impact waves.
4. **BLOB MERGING**: External droplets fly inward, stretching out before being absorbed.
5. **BLOB SPLITTING**: Droplets break away from the core, stretching elastically.
6. **SURFACE TENSION**: Achieved through additive scaling transformations during movement.
7. **FLOATING BUBBLES**: 7 distinct background bubbles rising at different speeds and delays.
8. **ENERGY PULSE**: An inner glowing `box-shadow` that breathes every few seconds.
9. **REFLECTION SHIMMER**: A glossy highlight pseudo-element sliding across the surface.
10. **HOVER REACTION**: The entire ecosystem accelerates and brightens when hovered.

## 📁 File Structure
```
morphing-liquid-physics-engine-kk/
├── demo.html    # The HTML structure and inline SVG goo filter
├── style.css    # 18 custom keyframes and fluid dynamics styling
└── README.md    # Documentation
```

## 🌐 Browser Support
- Optimized for Chromium-based browsers (Chrome, Edge).
- Safari and Firefox supported (minor variations in SVG filter blending).

## 🏃 How to Run
No build steps required. Simply open `demo.html` in your web browser.

## 🎨 Design Inspiration
Inspired by futuristic UI concepts, liquid metal (mercury), sci-fi energy cores, and advanced CSS art.
