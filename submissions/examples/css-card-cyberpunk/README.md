# CSS-only Card: Cyberpunk

A high-performance, accessible pure CSS card component featuring futuristic clipped corner geometries, cyberpunk neon glow styling, and sharp dark aesthetic, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS `clip-path` polygon geometries, glowing box-shadows, and transitions.
- **Cyberpunk Aesthetic:** High-contrast neon borders paired with geometric chamfered corners for a sci-fi HUD appearance.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f43f5e;            /* Cyberpunk Neon Rose Accent */
    --em-speed: 0.3s;                 /* Transition speed */
}
