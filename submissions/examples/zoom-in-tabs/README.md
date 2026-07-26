# CSS Zoom-In Tabs

A modern, highly interactive tabbed interface featuring a smooth zoom-in animation for panel entry. Designed specifically for complex dashboard interfaces, it utilizes the pure CSS radio-button technique, ensuring zero JavaScript overhead.

## 🚀 Features

- **Pure CSS State Management:** Uses hidden `<input type="radio">` elements and the general sibling combinator (`~`) to control active states entirely through CSS.
- **Dynamic Zoom Animation:** Implements a custom `@keyframes` animation that scales and fades the content panel into view, utilizing exposed CSS custom properties for easy customization.
- **Keyboard Accessible:** Radio inputs are kept focusable (but visually hidden) allowing users to Tab through the interface. Focus states (`:focus-visible`) are correctly mapped to their respective labels to ensure clear focus rings.
- **Accessible Design:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling the zoom-in scaling transforms and tab hover shifts for users with motion sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. The labels are intrinsically linked to the hidden radio inputs via the `for` and `id` attributes.

### CSS Custom Properties
You can easily tweak the timing, easing curve, and scale intensity in the `:root` selector:

```css
:root {
    --em-zoom-scale-start: 0.94; /* How small the panel starts */
    --em-zoom-scale-end: 1;      /* Final scale */
    --em-transition-timing: 0.45s; 
    --em-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Spring curve */
}
