# CSS Slide-Right Tabs (Creative Portfolio)

A sleek, high-contrast tabbed component explicitly tailored for dark-mode Creative Portfolio layouts. It utilizes a bold aesthetic, neon accents, and a dynamic slide-right content reveal animation.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via hidden radio inputs, ensuring perfect performance for creative showcases.
- **Creative Aesthetics:** Features a deep dark-mode background (`#121212`), high-contrast neon accents, and a dynamic underline indicator that animates based on active states.
- **Slide-Right Transition:** Employs a custom `@keyframes` sequence that smoothly translates content from a wide `-60px` offset to create an impactful, editorial reveal effect.
- **Responsive & Accessible:** Converts the horizontal tab header into a vertical, touch-friendly list on mobile devices. Full keyboard/reduced-motion accessibility is natively integrated.

## 🛠️ Usage

Copy the HTML from `demo.html` and link the styles from `style.css`. 

### CSS Custom Properties
Configure brand colors and animation specs in the `:root` block to match your portfolio's vibe:

```css
:root {
    --em-creative-bg: #121212;     /* Deep background */
    --em-accent: #d4ff00;          /* High-contrast neon accent */
    --em-slide-offset: -60px;      /* Reveal distance */
}
