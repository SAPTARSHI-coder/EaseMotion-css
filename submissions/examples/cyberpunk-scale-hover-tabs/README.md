# CSS Scale-Hover Tabs (Cyberpunk Layout)

An advanced, high-performance tab switching component built completely with pure CSS, tailored for Cyberpunk and futuristic Sci-Fi interfaces. Features dynamic scale-up hover mechanics and prominent active states.

## 🚀 Features

- **Zero JavaScript:** Utilizes the CSS hidden radio input pattern (`input type="radio"`) paired with sibling selectors (`:checked ~`) to control exclusive tab panel switching natively.
- **Scale-Hover Dynamics:** Tab navigation buttons leverage smooth `transform: scale(1.05) translateY(-4px)` mechanics on hover, expanding dynamically with neon border highlights and soft drop shadows. Active tabs scale even further (`scale(1.08)`) to maintain distinct visual hierarchy.
- **Cyberpunk Geometry:** Uses `clip-path: polygon()` instead of standard rounded corners to create sharp chamfered edges across all tab triggers and the main content box.
- **Accessible & Responsive:** Fully keyboard navigable (`tabindex="0"`, `:focus-visible`). Automatically stacks horizontal tab buttons into a vertical column on screens below `600px`. Fully supports `@media (prefers-reduced-motion: reduce)` by disabling all hover scale transformations and transition effects for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Make sure the `id` of each radio input matches the `for` attribute of its corresponding tab label.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --cp-neon-yellow: #fcee0a;        /* Active tab & highlight color */
    --cp-neon-purple: #b000ff;      /* Panel border accent color */
    --cp-speed: 0.4s;                 /* Pane transition duration */
}
