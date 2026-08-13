# CSS Radial Progress Indicator

An advanced, high-performance progress indicator component built completely with pure CSS, tailored specifically for dashboards, analytics, and modern tech showcases. Features multiple concentric radial rings displaying distinct metrics.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS conic gradients (`conic-gradient`) and custom CSS properties (`--progress`).
- **Concentric Multi-Ring Layout:** Displays multiple nested metric tracks scaling dynamically with independent color coding and glowing accents.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(16px)`), a dark inner core readout, and a metric legend.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard navigation. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts reveal animations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Adjust the `--progress` degree values on each ring element to update metric fill levels.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent-outer: #6366f1;       /* Outer ring metric color */
    --em-accent-middle: #38bdf8;      /* Middle ring metric color */
    --em-accent-inner: #10b981;       /* Inner ring metric color */
}
