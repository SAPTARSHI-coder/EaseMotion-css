# CSS Lava Lamp Text

An advanced typography component featuring fluid, organic lava lamp blob animations inside text, built entirely with native CSS gradients and background clipping.

## 🚀 Features

- **Zero JavaScript Required:** Built completely using CSS `@keyframes`, radial gradients, and `background-clip: text`.
- **Organic Fluid Animation:** Animate the `background-position` of multiple overlapping radial gradients over a `200% 200%` surface area to simulate moving lava blobs.
- **Accessible & Responsive:** Fluid typography scaling (`clamp()`) for responsiveness. Uses `.em-sr-only` screen reader text to maintain accessibility while the animated text acts decoratively. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-lava-1: #ff0a54;            /* Lava Blob 1 Color */
    --em-lava-2: #ff7096;            /* Lava Blob 2 Color */
    --em-lava-3: #ff97b7;            /* Lava Blob 3 Color */
    --em-lava-bg: #212529;           /* Text background fallback color */
}
