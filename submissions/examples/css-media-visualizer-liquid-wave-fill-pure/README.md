# CSS Media Visualizer: Liquid Wave Fill

A hardware-accelerated, JavaScript-free audio and media UI element. Features a fluid, physically simulated liquid wave animation that sloshes inside the album art container.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the liquid physics simulation or the play/pause state logic.
- **Component Architecture**: 
  - **The Masking Container**: The `.album-art-mask` container acts as the physical boundary for the liquid. It uses `border-radius: 50%` and crucially, `overflow: hidden` to clip anything that extends outside of it.
  - **The Liquid Slosh Physics (The Squircle Trick)**: Creating fluid, sloshing liquid in pure CSS relies on a clever geometric trick:
    1. We create `.liquid-wave` `div`s that are significantly *larger* than the circular mask container.
    2. Instead of a perfect circle, we give them an irregular, "squircle" border radius (e.g., `border-radius: 40%`).
    3. We position them so they only cover the bottom half of the circular mask.
    4. We apply a linear `@keyframes` rotation animation to them.
    5. **Result**: As the irregular "squircle" shape rotates within the perfect circular clipping mask, the corners rise and fall, perfectly mimicking the physics of sloshing, rippling liquid.
  - **Parallax Depth**: We use two liquid layers (`.wave-back` and `.wave-front`). They are given different opacities, slightly different border radii, and different rotation speeds. This desynchronization creates a convincing 3D parallax effect, adding depth to the fluid simulation.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.media-player-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the liquid waves. Additionally, we animate the `top` property to physically drain the liquid level down when paused, and fill it back up when playing resumes.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the liquid rotation is disabled and the border radius is flattened, presenting a static, accessible player UI.

## Usage
Open `demo.html` in your browser. Watch the simulated liquid slosh fluidly within the album art container. Click the Play/Pause button to see the liquid level physically drain out of the container when "paused", and refill when playing, driven entirely by CSS state transitions.

## Files
- `demo.html`: The HTML structure defining the circular mask, the oversized liquid wave elements, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the `border-radius: 40%` liquid physics trick, the parallax animation speeds, and the `:has()` selector state interactions for draining/filling the liquid.
