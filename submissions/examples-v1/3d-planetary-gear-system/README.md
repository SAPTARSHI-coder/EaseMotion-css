# Pure CSS 3D Planetary Gear System

A massively complex, scientifically accurate 3D mechanical engineering visualization built entirely without Canvas, WebGL, or JavaScript.

## 🚀 How it works

This component serves as an extreme architectural masterclass in DOM-based 3D geometric construction and kinematic animation. It natively renders a true Planetary Gear system in 3D space. The architecture mathematically calculates the extrusion matrices for 5 independent 3D gears: 1 Sun Gear, 3 Planet Gears, and 1 outer Ring Gear. Every single gear tooth (108 faces in total) is explicitly mapped in a perfect circle using `rotateY` and `translateZ` trigonometry.

Furthermore, it functions as a highly accurate kinematic simulator. The CSS `@keyframes` engine calculates the precise interlocking rotational ratios, allowing the Planet gears to physically orbit the Sun gear while independently rotating on their own axes, seamlessly meshing with the teeth of the outer Ring Gear in a hardware-accelerated infinite loop.

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`.

## ✨ Why it fits EaseMotion CSS

Complex volumetric mechanical meshing and kinematic rotational physics are traditionally handled exclusively by JavaScript frameworks like Three.js. This submission pushes the extreme limits of CSS as a 3D rendering and physics engine. It provides the EaseMotion community with an elite `level:advanced` blueprint on how to construct complex multi-faced 3D gears natively, how to calculate interlocking animation ratios using purely CSS timing functions, and how to handle complex Z-index depth sorting for intersecting volumetric mechanical parts natively in the browser.