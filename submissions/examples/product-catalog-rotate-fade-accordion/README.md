# CSS Rotate-Fade Accordion (Product Catalog)

A modern, highly-optimized accordion component built entirely with pure CSS. Designed specifically for e-commerce and product catalog layouts where space is at a premium (e.g., specifications, shipping info).

## 🚀 Features

- **Zero JavaScript:** Built using the CSS hidden-checkbox hack, allowing users to toggle multiple panels independently without any JS overhead.
- **Modern Grid Animation:** Utilizes `display: grid` and `grid-template-rows: 0fr` to `1fr` to smoothly animate the height of the accordion content. This is the modern, performant standard for height transitions in CSS.
- **Rotate-Fade Entrance:** The inner `.em-accordion-content` utilizes a 3D `rotateX` transform paired with a subtle `translateY` and opacity fade to create a fluid, unfolding effect when opened.
- **Dynamic Iconography:** Features a custom CSS-drawn `+` icon that rotates `135deg` into an `x` utilizing hardware-accelerated transforms.
- **Accessible & Responsive:** Fully keyboard navigable via `tabindex="0"` on the labels, complete with `:focus-visible` outlines. Includes a built-in media query for single-column mobile reflow, and fully respects `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Because it uses `input type="checkbox"`, multiple accordion panels can be open simultaneously. 

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #09090b;             /* Brand color for buttons/focus */
    --em-transition-speed: 0.4s;      /* Speed of the accordion open/close */
    --em-easing: cubic-bezier(...);   /* Easing curve for the animations */
}
