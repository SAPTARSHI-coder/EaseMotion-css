# CSS Tilt Perspective Section

An advanced, high-performance 3D perspective section component built completely with pure CSS, tailored specifically for immersive landing pages, hero displays, and modern web applications.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, `rotateX`, `rotateY`, `translateZ`).
- **Depth Layering:** Content elements float outward along the z-axis creating a true parallax 3D effect on hover.
- **SaaS Glassmorphism:** Styled with frosted glass backdrops (`backdrop-filter: blur(20px)`), subtle borders, and glowing indigo shadows.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the section via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button & glow highlight color */
    --em-speed: 0.5s;                 /* Tilt transition duration */
}
