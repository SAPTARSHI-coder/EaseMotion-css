# CSS Slide-Up Tabs for E-Commerce Checkout

A lightweight, pure CSS/HTML slide-up tab system tailored for e-commerce multi-step checkout procedures. No JavaScript is required.

## Features
- **Pure CSS Navigation:** Built using hidden radio buttons and the CSS sibling selector (`~`).
- **Smooth Slide-Up Animation:** Utilizes `transform: translateY()` and CSS transitions with a custom cubic bezier for natural motion.
- **Fully Responsive:** Adapts cleanly across mobile, tablet, and desktop viewports.
- **Accessible Design:** Features explicit label linking and includes `prefers-reduced-motion` media queries for reduced motion accessibility.

## CSS Custom Properties
Customize the theme seamlessly using these variables in `style.css`:

```css
:root {
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --success-color: #16a34a;
  --bg-dark: #0f172a;
  --card-bg: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --border-color: #334155;
  --transition-speed: 0.4s;
}