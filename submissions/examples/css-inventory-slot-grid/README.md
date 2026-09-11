# CSS Inventory Slot Grid

An advanced, high-performance game inventory UI component built completely with pure CSS, tailored specifically for RPG interfaces, game menus, and item showcases. Features interactive item slots, item stack counts, hover tooltips, and active focus states.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS flexbox/grid layouts, transitions, and pseudo-elements.
- **Interactive Slots & Tooltips:** Slots dynamically elevate and glow on hover or keyboard focus (`:hover`, `:focus-visible`), revealing rich item description tooltips.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(20px)`), glowing indigo accents, and item badge counters.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA grid attributes and keyboard navigation. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts movement for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Slot border & tooltip highlight color */
    --em-speed: 0.25s;                /* Hover transition duration */
}
