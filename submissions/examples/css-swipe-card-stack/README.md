# CSS Swipe Card Stack

An advanced, high-performance card stack component built completely with pure CSS, tailored specifically for Tinder-style swiping feeds, dating apps, and modern feature carousels. Features layered card positioning and interactive dismissal states.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS transforms, layering, transitions, and active state interactions.
- **Tinder-Style Stack Dynamics:** Multi-layered card depth (`em-card-back-two`, `em-card-back-one`, `em-card-top`) with smooth hover rotation and click-to-swipe dismissal animations.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(20px)`), subtle borders, and glowing indigo shadows.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard navigation. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts card transitions for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Tag background & glow color */
    --em-speed: 0.4s;                 /* Swipe transition duration */
}
