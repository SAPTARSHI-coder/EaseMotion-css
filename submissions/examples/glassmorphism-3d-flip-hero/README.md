# CSS 3D-Flip Hero Section (Glassmorphism UI)

A stunning, pure CSS interactive hero section designed for Glassmorphism UI Layouts. It features animated background orbs and a complex 3D-flipping mockup panel, controlled entirely without JavaScript.

## Features
- Pure CSS and HTML (No JavaScript required).
- **Glassmorphism Aesthetic**: Deep backgrounds contrasted with floating `.bg-orb` elements. The orbs are blurred using `filter: blur(80px)` and animated using a slow `float` keyframe to create a dynamic, underwater-like depth.
- **The 3D-Flip Effect**: The core visual is a `.flip-scene` container with `perspective: 1500px`. Inside, a `.flip-card` holds two faces (`.front-face` and `.back-face`). 
- State is managed via the hidden checkbox hack (`<input type="checkbox">` + `<label>`). When the checkbox is toggled by clicking the "View Backend" button, the entire scene rotates smoothly via `transform: rotateY(180deg)`.
- `backface-visibility: hidden` ensures that when a face is rotated away from the camera, it disappears, revealing the other side.
- Both faces of the mockup utilize `backdrop-filter: blur(16px)` to create a premium frosted-glass effect over the animated background orbs.
- Clean, modern typography using the `Outfit` font for marketing copy, and `JetBrains Mono` for the terminal/backend UI mockup.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the background orbs are frozen, and the complex 3D rotation is entirely disabled. The CSS gracefully replaces the physical flip with a safe, simple opacity crossfade between the front and back faces.

## Usage
Open `demo.html` in your browser. You will see a modern landing page hero section. On the right side, a glassmorphic dashboard mockup is displayed. Click the "View Backend" button inside the mockup. Watch as the entire panel performs a physical 3D rotation to reveal a dark-themed server console on the back side. Click "Back to Frontend" to reverse the flip.

## Files
- `demo.html`: The HTML structure, detailing the complex nesting required for 3D CSS transforms (scene > card > faces), and the checkbox state management.
- `style.css`: The styling, background orb animations, frosted-glass filters, and the `perspective` / `rotateY` logic driving the 3D flip mechanics.
