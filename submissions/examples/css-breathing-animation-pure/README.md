# CSS Breathing Animation

A pure CSS slow, rhythmic pulsing animation using smooth transform scaling and opacity easing to simulate a calm breathing effect for ambient UI elements. Built entirely without JavaScript.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark mode UI where the breathing aura is slightly more pronounced for better visibility against dark backgrounds.
- **Component Architecture (Documented in Code)**: 
  - **Separation of Concerns (Aura vs Content)**: A common mistake when animating scaling is to apply the `transform: scale()` directly to a container holding text. This causes the text to constantly redraw, resulting in blurry rendering during the animation. To solve this, we separate the animated background (`.breathing-aura`) from the static foreground content (`.breathing-content`). They are absolutely positioned over one another.
  - **The Breathing Rhythm**: The animation keyframes (`ambientBreathe`) are designed to mimic human resting respiration. The duration is set to `6s` (approximately 10 breaths per minute). We use `ease-in-out` to ensure the transition between the inhaled peak and the exhaled trough is smooth and organic, rather than mechanical.
  - **Multi-property Animation**: The breathing effect is achieved by simultaneously animating three properties in the keyframes:
    1. `transform: scale(...)` for physical expansion.
    2. `opacity` for fading intensity.
    3. `box-shadow` to expand the outer glow.
- Accessible structure. The animated aura is hidden from screen readers (`aria-hidden="true"`). Honors the `prefers-reduced-motion` accessibility standard by disabling the scaling animation entirely for motion-sensitive users, replacing it with a static, medium-intensity glow fallback.

## Usage
Open `demo.html` in your browser to view the ambient pulsing animation. 

## Files
- `demo.html`: The HTML structure demonstrating the separation of the aura and content layers.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented keyframe animation timing logic.
