# CSS Rotate-Fade Feature Grid

A modern, lightweight, pure CSS and HTML feature grid designed for responsive dashboard layouts. It features a smooth rotational transform paired with an opacity fade to create a sleek, interactive hover state.

## 🚀 Features

- **Pure CSS/HTML:** No JavaScript or external libraries required.
- **Responsive Design:** Utilizes CSS Grid (`auto-fit`, `minmax`) to seamlessly adapt to desktop, tablet, and mobile viewports without complex media queries.
- **Smooth Animations:** Uses custom cubic-bezier transitions for a natural, performant feel.
- **Accessible:** Includes `@media (prefers-reduced-motion: reduce)` to disable animations for users with motion sensitivity.

## 🛠️ Usage

Simply copy the HTML structure from `demo.html` and the styles from `style.css` into your project. The grid container `em-feature-grid` will automatically format any `.em-rotate-fade-card` children into a responsive layout.

### CSS Custom Properties
You can easily customize the look and feel by modifying the following CSS variables in the `:root` pseudo-class:

```css
:root {
    --em-bg-primary: #0f172a;      /* Page background */
    --em-bg-card: #1e293b;         /* Card background */
    --em-text-main: #f8fafc;       /* Primary text */
    --em-text-muted: #94a3b8;      /* Secondary text */
    --em-transition-speed: 0.5s;   /* Animation duration */
}
