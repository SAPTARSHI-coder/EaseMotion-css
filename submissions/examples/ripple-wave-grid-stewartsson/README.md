# CSS Ripple-Wave Feature Grid

A sleek, lightweight feature grid that triggers a continuous ripple-wave animation behind the icon upon hovering. Built purely with CSS and HTML for modern, responsive dashboard layouts.

## 🚀 Features

- **Pure CSS Keyframes:** Utilizes `::before` and `::after` pseudo-elements to create a layered ripple effect without JavaScript.
- **Responsive Grid System:** Powered by CSS Grid (`auto-fit`, `minmax`) to seamlessly adapt across all devices.
- **Accessible Design:** Implements `@media (prefers-reduced-motion: reduce)` to replace the continuous wave animation with a subtle, static highlight for users with motion sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. The ripple effect is bound to the `.em-card-icon-wrapper` inside the `.em-ripple-card`.

### CSS Custom Properties
You can easily change the aesthetic (like the ripple color) by updating the CSS variables in the `:root`:

```css
:root {
    --em-bg-primary: #0f172a;
    --em-bg-card: #1e293b;
    --em-accent: #8b5cf6; /* Change this for a different ripple color */
}
