# CSS Morph-Glow Pricing Table (Creative Portfolio Layouts)

An ultra-modern, pure CSS pricing table designed specifically for creative portfolios, agencies, and independent creators. It features fluid, organic organic fluid glowing shapes that continuously morph in the background and intensify upon user interaction.

## 🚀 Features

- **Fluid Morphing Animation:** Combines CSS `@keyframes`, `border-radius` morphing calculations, and continuous rotation to render organic gradient blobs beneath glassmorphism cards.
- **Glassmorphism Aesthetic:** Utilizes backdrop filters, subtle translucent borders, and high-contrast typography designed for dark-mode portfolio themes.
- **Interactive Hover States:** Cards respond to hover/focus by elevating upward (`translateY`), brightening their background glow, and scaling button controls.
- **Pure CSS Construction:** Zero JavaScript overhead.
- **Responsive & Accessible:** Built with CSS Grid for layout adaptability across mobile and desktop. Fully compliant with keyboard navigation (`tabindex="0"`, `:focus-visible`) and `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Copy the HTML from `demo.html` and the CSS from `style.css`.

### CSS Custom Properties
Tweak glow gradients and morph shapes directly via `:root` variables:

```css
:root {
    --em-glow-1: #ff007f; /* Neon Pink */
    --em-glow-2: #7928ca; /* Deep Purple */
    --em-glow-3: #00dfd8; /* Cyan Accent */
}
