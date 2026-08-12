# CSS Glass Effect: Solar Flare

A hardware-accelerated, JavaScript-free glassmorphism UI element. Features an intense, rotating radial gradient background mimicking a solar flare, beautifully refracted through frosted glass.

## Features
- Pure CSS and HTML implementation. No JavaScript, Canvas, or external imagery required.
- **Component Architecture**: 
  - **The Solar Background**: The `.solar-flare-container` sits behind the UI and is composed of two main elements:
    1. **The Core**: A `.solar-core` element utilizing a multi-stop `radial-gradient` (White -> Orange -> Deep Red -> Transparent). This element pulses constantly in size and opacity via `@keyframes` to simulate burning energy.
    2. **The Rays**: A `.solar-rays` element utilizing a `repeating-conic-gradient` to create sharp, angular beams of light. A CSS `-webkit-mask-image` (using a radial gradient) is applied to hide the center of the rays, so they only emit from the *edges* of the core. These rays are blurred and set to spin infinitely.
  - **Glassmorphism Refraction**: The foreground `.glass-card-solar` element is where the magic happens. While the solar background is intense and sharp, the glass panel utilizes a heavy `backdrop-filter: blur(30px)`. As the intense, sharp solar rays spin behind the panel, the heavy blur physically refracts them, melting the harsh lines into a beautiful, smooth, shifting ambient glow.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The glass panel background adjusts its opacity automatically to remain legible on both light and dark systems while preserving the solar flare behind it.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the continuous spinning of the rays and the pulsing of the solar core are completely disabled, presenting a static but beautiful glowing star.

## Usage
Open `demo.html` in your browser. Observe how the intense, sharp background rays are beautifully softened and refracted as they pass behind the heavy `backdrop-filter` of the glass panel.

## Files
- `demo.html`: The HTML structure defining the ambient solar flare container (core + rays) and the foreground glassmorphism UI.
- `style.css`: The styling, the complex `radial-gradient` and `repeating-conic-gradient` configurations, the `-webkit-mask-image` logic, and the heavy `backdrop-filter` properties required for the glass refraction.
