# CSS TV Static Noise

An advanced, high-performance background animation component built completely with pure CSS, tailored specifically for retro art displays, vintage UI themes, and modern landing pages. Features animated television static and CRT scanline overlays.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS repeating radial gradients, step-timing animations, and linear scanline overlays.
- **Analog TV Distortion:** Features multi-step translational keyframes (`@keyframes em-noise-shift`) paired with crisp horizontal scanlines to simulate a classic cathode-ray tube screen.
- **SaaS Glassmorphic Content Card:** Centered foreground card styled with frosted glass effects (`backdrop-filter: blur(16px)`), subtle borders, and cyan glowing accents.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA region landmarks and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts static movement for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #38bdf8;            /* Badge & highlight color */
    --em-speed: 0.25s;                /* Noise frame rate duration */
}
