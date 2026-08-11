# CSS-Only Holographic ID Badge (`ease-holographic-badge`)

A highly premium, cyber-punk inspired ID badge featuring a pure CSS 3D tilt effect and an animated holographic foil overlay!

## 🚀 Features

- **Zero-JS Hologram**: Achieves a realistic shimmering foil effect using a complex `linear-gradient`, `mix-blend-mode: color-dodge`, and background-position `@keyframes` animation.
- **3D Hardware Acceleration**: Uses `perspective` and `transform: rotateX() rotateY()` on hover to simulate holding the physical card in a 3D space.
- **Accessible**: Features strict `prefers-reduced-motion` fallbacks to disable the shimmering background animation and 3D tilting for users with motion sensitivity.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

### How it works

The `.hologram-overlay` sits on top of the card content with `pointer-events: none`. It has an oversized `background-size: 300% 300%` and a gradient featuring cyan, magenta, and purple. When the user hovers over the card, the overlay's opacity fades in, and a CSS `@keyframes` animation sweeps the gradient across the surface diagonally, simulating light reflecting off holographic foil. 

The `mix-blend-mode: color-dodge` ensures the bright colors of the gradient interact with the greyscale content underneath, blowing out the whites and creating a glowing metallic aesthetic!

## 🔗 Related Issue
Resolves Issue #17651
