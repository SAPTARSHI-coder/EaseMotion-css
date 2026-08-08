# CSS Slide-Right Tabs (Interactive Interface)

A highly engaging, pure CSS tabbed component designed for modern, interactive application interfaces (like settings panels or user dashboards). It couples a lively slide-right keyframe transition with soft, pill-shaped UI elements.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via hidden radio inputs, ensuring fast, native browser performance.
- **Interactive UI Design:** Features floating pill-shaped tab headers, deeply rounded content panels (`20px` radius), and mock interactive elements like CSS-only toggle switches to demonstrate real-world utility.
- **Bouncy Slide-Right:** Employs a custom `@keyframes` sequence utilizing a slight overshoot cubic-bezier (`cubic-bezier(0.34, 1.56, 0.64, 1)`) to give the slide-in a satisfying, bouncy tactile feel.
- **Responsive & Accessible:** Fluidly stacks tab headers on mobile devices. Full keyboard navigation support via `tabindex="0"` and completely respects `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Copy the HTML from `demo.html` and link the styles from `style.css`. 

### CSS Custom Properties
Tweak the main interactive brand colors and the transition timing via the `:root` pseudo-class:

```css
:root {
    --em-int-primary: #6366f1;        /* Vibrant indigo accent */
    --em-slide-offset: -40px;         /* Distance of the slide reveal */
    --em-transition-speed: 0.4s;      /* Timing of the slide right */
}
