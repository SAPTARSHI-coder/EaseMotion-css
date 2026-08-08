# CSS Skew-Active Carousel (Cyberpunk Layout)

An advanced, high-performance carousel component built completely with pure CSS, tailored for Cyberpunk and futuristic Sci-Fi interfaces. Features aggressive geometric skewing mechanics and prominent active states.

## 🚀 Features

- **Zero JavaScript:** Utilizes the CSS hidden radio input pattern (`input type="radio"`) paired with sibling selectors (`:checked ~`) to control exclusive slide switching natively.
- **Skew-Active Mechanics:** Employs `transform: skewX(-10deg)` on internal slide cards and `skewX(-12deg)` on navigation buttons. Text content is countered with an opposite unskew (`skewX(10deg)` / `skewX(12deg)`) to keep readable typography while retaining aggressive angular aesthetics.
- **Cyberpunk Geometry:** Uses `clip-path: polygon()` instead of standard rounded corners to create sharp chamfered edges across the carousel track housing.
- **Accessible & Responsive:** Fully keyboard navigable (`tabindex="0"`, `:focus-visible`). Automatically flattens skew transforms on mobile viewports below `600px` for optimal screen real estate. Fully supports `@media (prefers-reduced-motion: reduce)` by disabling translation shifts and transition delays for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Make sure the `id` of each radio input matches the `for` attribute of its corresponding navigation button label.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-neon-yellow: #fcee0a;        /* Active button & accent highlight color */
    --cp-neon-cyan: #00f0ff;          /* Housing border accent color */
    --cp-speed: 0.5s;                 /* Slide transition duration */
}
