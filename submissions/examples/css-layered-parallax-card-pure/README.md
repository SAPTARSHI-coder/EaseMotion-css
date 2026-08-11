# CSS Layered Parallax Card

A pure CSS card component that simulates interactive 3D mouse tracking to create a layered depth parallax effect, built entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript mouse coordinate math required).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-bg`, `--content-bg`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **3D Mouse Tracking Architecture (Documented in Code)**: 
- To simulate JS mouse tracking (`mousemove`) purely in CSS, we use a 3x3 tracking grid.
- We overlay 9 invisible `<div class="tracker">` squares precisely over the card's surface. 
- Using the CSS general sibling selector (`~`), we map the `:hover` state of each specific tracking cell to a unique `transform: rotateX() rotateY()` coordinate on the underlying `.parallax-card`.
- **True 3D Layers**: The main wrapper uses `perspective: 1000px;` and the card uses `transform-style: preserve-3d;`. The inner elements (background, graphic, and text content box) are absolute positioned with varying `translateZ()` values (e.g., `translateZ(80px)`). When the card tilts, these layers actually pop out of the screen, creating true 3D parallax depth.
- Fully accessible with `prefers-reduced-motion` support. The hover rotations and 3D transforms are completely disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Move your mouse across the surface of the card to watch it dynamically tilt and reveal the true 3D depth between the background, the icon, and the glassmorphism content box.

## Files
- `demo.html`: The HTML structure containing the 9 tracking cells and the 3 distinct depth layers.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the sibling-selector hover mapping trick.
