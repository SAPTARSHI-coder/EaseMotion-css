# CSS Ripple-Wave Carousel (Cyberpunk Layout)

An advanced, high-performance carousel/slideshow component built completely with pure CSS, tailored for Cyberpunk and futuristic Sci-Fi interfaces. Features continuous ripple-wave pulse animations on active slides and smooth sliding transitions.

## 🚀 Features

- **Zero JavaScript:** Utilizes the CSS hidden radio input pattern (`input type="radio"`) paired with sibling selectors (`:checked ~`) to control exclusive slide switching natively.
- **Ripple-Wave Animation:** Active slides trigger an ongoing `@keyframes cp-ripple-wave` expansion effect, sending glowing neon rings outward across the background of the card.
- **Cyberpunk Geometry:** Uses `clip-path: polygon()` instead of standard rounded corners to create sharp chamfered edges across the carousel track and navigation indicators.
- **Accessible & Responsive:** Fully keyboard navigable (`tabindex="0"`, `:focus-visible`). Adapts fluidly to mobile screens. Fully supports `@media (prefers-reduced-motion: reduce)` by disabling translation shifts and wave animations for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Make sure the `id` of each radio input matches the `for` attribute of its corresponding navigation dot label.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-neon-cyan: #00f0ff;          /* Active dot & wave highlight color */
    --cp-neon-pink: #ff0055;          /* Track border accent color */
    --cp-speed: 0.6s;                 /* Slide transition duration */
}
