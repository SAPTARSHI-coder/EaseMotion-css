# CSS Calorie Macro Ring

An advanced, high-performance nutrition tracker component built completely with pure CSS, tailored specifically for health dashboards, fitness trackers, and modern web applications. Features three concentric rings displaying protein, carbohydrate, and fat macros.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS conic gradients (`conic-gradient`) and custom CSS properties (`--progress`).
- **Three-Ring Macro Layout:** Nested radial progress tracks corresponding to protein, carbs, and fats with independent color coding and glowing drop-shadows.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(20px)`), a dark inner core calorie readout, and a descriptive macro legend.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard navigation. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts reveal animations for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Adjust the `--progress` degree values on each ring element to update macro fill levels.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-protein: #f43f5e;           /* Protein ring color */
    --em-carbs: #38bdf8;             /* Carbohydrate ring color */
    --em-fat: #f59e0b;               /* Fat ring color */
}
