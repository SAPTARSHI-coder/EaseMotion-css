# CSS Blur-Entrance Tabs

A clean, professional tabbed interface designed for E-Commerce checkout flows. It features a sophisticated blur-entrance transition for content panels, managed entirely by pure CSS and HTML.

## 🚀 Features

- **Pure CSS State Management:** Utilizes hidden `<input type="radio">` elements paired with the general sibling combinator (`~`) to toggle content without any JavaScript.
- **Blur-Entrance Animation:** Features a smooth `@keyframes` animation that combines `filter: blur()`, `opacity`, and a subtle `transform: scale()` to bring content cleanly into focus.
- **Checkout Theming:** Styled explicitly for multi-step forms (like shipping, payment, review) with prominent step indicators and a trustworthy, clean color palette.
- **Accessible Design:** Fully supports keyboard navigation (`tabindex="0"` on labels with clear `:focus-visible` rings) and honors `@media (prefers-reduced-motion: reduce)` by disabling the blur and scale transitions for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the styles from `style.css`. The active states are intrinsically linked using the `id` attributes of the hidden radio inputs and their corresponding `for` attributes on the labels.

### CSS Custom Properties
Tweak the animation parameters and colors in the `:root` pseudo-class to match your branding:

```css
:root {
    --em-accent-color: #2563eb;      /* Brand / Active color */
    --em-blur-amount: 12px;          /* Intensity of initial blur */
    --em-transition-timing: 0.6s;    /* Animation duration */
    --em-scale-start: 0.98;          /* Initial scale for entrance */
}
