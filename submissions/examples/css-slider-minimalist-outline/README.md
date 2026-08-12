# CSS Slider: Minimalist Outline

A smooth, high-performance, and accessible pure CSS slider and carousel component featuring clean minimalist outline border styling and dark mode compatibility, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS scroll-snap (`scroll-snap-type`), smooth horizontal tracks, and anchor pagination.
- **Minimalist Outline Effect:** Clean structured borders and stark typography focus delivering a refined aesthetic.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #f8fafc;            /* Accent outline color */
    --em-speed: 0.4s;                 /* Transition speed */
}
