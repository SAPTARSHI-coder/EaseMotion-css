# CSS Scroll-Spy Navigation

An advanced, high-performance scroll-spy navigation component built completely with pure CSS, tailored specifically for documentation portals, long-form landing pages, and modern web applications. Features dynamic link activation based on active section targets.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS `:target` pseudo-classes, relational `:has()` selectors, and smooth scrolling containers (`scroll-behavior: smooth`).
- **Dynamic Link Highlighting:** Sidebar navigation links automatically highlight and accentuate when their corresponding section IDs are targeted in view.
- **SaaS Glassmorphism:** Styled with modern frosted glass panels (`backdrop-filter: blur(20px)`), custom scrollbars, and glowing indigo accents.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA landmarks and keyboard navigation. Includes a strict `@media (prefers-reduced-motion: reduce)` override that disables smooth scrolling for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Active link highlight & glow color */
    --em-speed: 0.3s;                 /* Transition duration */
}
