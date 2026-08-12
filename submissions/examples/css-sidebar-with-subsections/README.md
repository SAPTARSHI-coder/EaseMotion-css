# CSS Sidebar with Subsections

A smooth, high-performance, and accessible pure CSS collapsible sidebar component featuring grouped subsections and smooth expand transitions, built completely with vanilla CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS checkbox state controllers (`:checked`), CSS Grid template rows trick (`0fr` to `1fr`), and hardware-accelerated transitions.
- **Collapsible Subsections Effect:** Smooth accordion subsection expansion with rotating chevron indicators and opacity fade-ins.
- **Dark Mode Compatible & Responsive:** Optimized dark theme styling that scales seamlessly across all viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Accent indigo color */
    --em-speed: 0.35s;                /* Transition speed */
}
