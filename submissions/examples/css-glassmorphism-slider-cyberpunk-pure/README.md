# Glassmorphism Slider: Cyberpunk

A highly stylized, JavaScript-free range slider component featuring a unique blend of Glassmorphism mechanics and aggressive Cyberpunk neon aesthetics.

## Features
- Pure CSS and HTML implementation. Customizes the native `<input type="range">` element.
- **Component Architecture & Styling Mechanics**: 
  - **Cyberpunk Aesthetics**: Features a dark theme with vibrant neon pink (`#f72585`) and cyan (`#4cc9f0`) colors. Includes a CSS-only animated glitch text effect using `::before` and `::after` pseudo-elements with `clip` and `text-shadow`. A rotating perspective grid background completes the environment.
  - **Glassmorphism Container**: The slider is housed within a `.glass-panel` that utilizes `backdrop-filter: blur(12px)` over a dark, translucent background (`rgba(20, 20, 25, 0.4)`). This creates a smoked glass effect that blurs the moving neon background elements beneath it. Sharp, glowing corner accents (created with pseudo-elements) replace traditional rounded corners to fit the sci-fi theme.
  - **Custom Range Input**: The native browser slider is entirely visually overhauled:
    - `-webkit-appearance: none;` is used to strip native styles.
    - The **track** (`::-webkit-slider-runnable-track`) is styled as a hollow, glowing wireframe bar with an inset cyan shadow.
    - The **thumb** (`::-webkit-slider-thumb`) is transformed into a vertical, glowing pink rectangular handle. On `:active` (click/drag), the thumb scales up and intensifies its glow, providing tactile feedback.
- fully accessible semantic structure. Uses the native `<input type="range">` allowing for standard keyboard navigation (arrows to slide). Includes a highly visible dashed yellow outline on `:focus-visible`. Honors the `prefers-reduced-motion` accessibility standard by disabling the background grid movement and glitch text animations if requested by the OS.

## Usage
Open `demo.html` in your browser. You will see an animated, perspective neon grid background with floating glowing orbs. In the center, a smoked glass panel blurs the background behind it. Use your mouse to drag (or keyboard to slide) the glowing pink slider thumb along the cyan track.

## Files
- `demo.html`: The HTML structure defining the background matrix environment, glitch text, and the custom range input.
- `style.css`: The styling, the custom `::-webkit-slider-thumb` / `::-webkit-slider-runnable-track` cross-browser configurations, the `backdrop-filter` glass properties, and the `@keyframes` logic for the glitch text and moving grid.
