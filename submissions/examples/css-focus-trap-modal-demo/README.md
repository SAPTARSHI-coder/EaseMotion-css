# CSS Focus Trap Modal Demo

An advanced, high-performance accessibility modal component built completely with pure CSS, tailored specifically for keyboard accessibility showcases, accessible design patterns, and modern web applications. Features a focus trap mechanism triggered entirely via native CSS `:target`.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS target states (`:target`), focus rings, and backdrop overlays without any external JS dependencies.
- **Keyboard & Screen Reader Accessible:** Engineered with proper ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`) and interactive focusable children.
- **SaaS Glassmorphism:** Styled with modern frosted glass containers (`backdrop-filter: blur(20px)`), subtle borders, and glowing indigo accents.
- **Accessible & Responsive:** Fully responsive across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts transitions for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. 

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Button & highlight color */
    --em-speed: 0.3s;                 /* Transition duration */
}
