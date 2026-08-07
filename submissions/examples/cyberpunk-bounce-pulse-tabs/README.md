# CSS Bounce-Pulse Tabs (Cyberpunk Layout)

An advanced, high-performance tab switching component built completely with pure CSS, tailored for Cyberpunk and futuristic Sci-Fi interfaces. Features bouncy spring physics and continuous neon pulsing active states.

## 🚀 Features

- **Zero JavaScript:** Employs the CSS hidden radio input pattern (`input type="radio"`) coupled with sibling selectors (`:checked ~`) to control exclusive tab panel switching natively.
- **Spring-Bounce Transition:** Tab panels use a specialized `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function paired with a subtle scale and vertical offset, giving active panels an organic, bouncy spring entrance.
- **Continuous Pulse Glow:** Active tab headers engage an infinite keyframe glow pulse (`@keyframes cp-pulse-glow`), giving the active selection a breathing neon aesthetic.
- **Cyberpunk Geometry:** Uses `clip-path: polygon()` instead of traditional border-radius to create sharp cut corners on both the navigation tabs and the content container box.
- **Accessible & Responsive:** Fully keyboard navigable (`tabindex="0"`, `:focus-visible`). Gracefully stacks vertical tab buttons on mobile screens below `600px`. Fully supports `@media (prefers-reduced-motion: reduce)` by disabling spring bounces and pulsing keyframes for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Make sure the `id` of each radio input matches the `for` attribute of its corresponding tab label.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-neon-cyan: #00f0ff;          /* Active tab & highlight color */
    --cp-neon-pink: #ff0055;          /* Panel border accent color */
    --cp-speed: 0.5s;                 /* Transition duration */
}
