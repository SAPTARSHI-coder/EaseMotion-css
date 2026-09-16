# CSS Rotate-Fade Stepper (SaaS Showcase Layout)

An intermediate, high-performance product workflow stepper component built completely with pure CSS, tailored specifically for SaaS landing pages and onboarding flows. Features a sequential rotate-fade entrance animation sequence across steps.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and staggered `animation-delay` rules.
- **Rotate-Fade Entrance:** Stepper cards cascade into view sequentially using `@keyframes em-rotate-fade`, transitioning from a slight offset and rotation into crisp alignment.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), accent number containers, and subtle border highlights.
- **Accessible & Responsive:** Fluidly adapts across desktop, tablet, and mobile viewports with responsive column stacking on narrower screens. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts load animations and hover translations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Apply the `.em-step-item` class to each step card inside `.em-stepper-container` to trigger the rotation sequence.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Step badge & number color */
    --em-speed: 0.7s;                 /* Animation duration */
}
