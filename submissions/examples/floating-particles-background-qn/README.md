# Animated Floating Particles Background

## Description
A stunning, dynamic background effect featuring multiple floating particles that rise from the bottom of the screen at different speeds and positions. This creates a living, breathing atmosphere perfect for creative portfolios, landing pages, and hero sections. Each particle has customizable size, position, animation delay, and duration using CSS custom properties. Built entirely with pure CSS using `@keyframes` and positioned elements, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains 20 particle elements with CSS custom properties for customization, plus a content overlay.
- `style.css`: Contains the particle styling, float-up animation, and content overlay styling.

## How to use
1. Open `demo.html` in your browser to see the floating particles effect.
2. Copy the HTML and CSS into your project.
3. Add the `.particles-container-qn` div as the first child of your `<body>`.
4. Add multiple `<span class="particle-qn">` elements with custom CSS properties.
5. **Customization:**
   - **Number of Particles:** Add or remove `<span class="particle-qn">` elements (20 is a good starting point).
   - **Particle Size:** Change the `--size` custom property (e.g., `--size: 5px`).
   - **Horizontal Position:** Adjust the `--left` custom property (e.g., `--left: 30%`).
   - **Animation Delay:** Modify the `--delay` custom property to stagger the start times (e.g., `--delay: 2s`).
   - **Animation Duration:** Change the `--duration` custom property to control speed (e.g., `--duration: 15s`).
   - **Particle Color:** Modify the `background` and `box-shadow` in `.particle-qn`.
   - **Movement Pattern:** Change the `translateX()` value in the `@keyframes` to alter horizontal drift.

## Features
- **Dynamic Movement:** Particles float upward with slight horizontal drift
- **Customizable Properties:** Each particle can have unique size, position, delay, and duration
- **Smooth Animation:** Hardware-accelerated transforms for performance
- **Glowing Effect:** Subtle box-shadow creates a soft glow around particles
- **Fade In/Out:** Particles smoothly fade in at the bottom and out at the top
- **Content Overlay:** Includes a glassmorphism-style button with backdrop blur
- **Fully Responsive:** Adapts to all screen sizes
- **Accessibility:** Respects `prefers-reduced-motion` user preference

## CSS Custom Properties Explained
Each particle uses these custom properties for easy customization:
- `--size`: Width and height of the particle (e.g., `4px`, `6px`)
- `--left`: Horizontal position from the left (e.g., `10%`, `50%`)
- `--delay`: Animation start delay (e.g., `0s`, `2s`)
- `--duration`: Total animation duration (e.g., `15s`, `20s`)

Example:
```html
<span class="particle-qn" style="--size: 5px; --left: 25%; --delay: 1s; --duration: 18s;"></span>