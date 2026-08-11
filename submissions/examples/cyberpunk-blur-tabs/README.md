# CSS Cyberpunk Blur-Entrance Tabs

A highly stylized, pure CSS tabbed interface designed for Cyberpunk and Sci-Fi neon layouts. It features striking neon glows, dynamic border color switching based on the active tab, and a high-tech blur-entrance animation.

## 🚀 Features

- **Pure CSS State Management:** Utilizes hidden `<input type="radio">` tags and CSS sibling combinators (`~`) to handle tab routing and dynamic panel styling entirely without JavaScript.
- **Cyberpunk Aesthetic:** Features a stark dark theme, monospace typography, sharp borders, and glowing neon accents (Cyan, Magenta, Yellow) that dynamically update based on the user's selection.
- **Digital Blur Animation:** When a tab is selected, the panel enters with a custom `@keyframes` animation that combines `filter: blur()`, `brightness`, and scaling to simulate a digital screen initializing.
- **Accessible & Responsive:** Adapts to mobile screens by stacking tabs vertically. Fully keyboard navigable using `tabindex="0"` with dashed focus rings, and honors `@media (prefers-reduced-motion: reduce)` by bypassing the animation.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the styles from `style.css`. 

### CSS Custom Properties
Tweak the neon colors and animation timings in the `:root` pseudo-class to match your specific cyberpunk theme:

```css
:root {
    --em-neon-cyan: #00f0ff;
    --em-neon-magenta: #ff003c;
    --em-neon-yellow: #fcee0a;
    --em-blur-amount: 15px;         /* Intensity of the digital blur */
    --em-transition-timing: 0.4s;   /* Animation speed */
}
