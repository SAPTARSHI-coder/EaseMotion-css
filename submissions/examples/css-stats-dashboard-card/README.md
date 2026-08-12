# CSS Stats Dashboard Card

An advanced, high-performance statistics card component built completely with pure CSS, tailored specifically for analytics dashboards, financial panels, and modern web applications. Features a metric header, trending badge with an arrow, and an inline SVG sparkline graph.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS flexbox layouts, glassmorphic filters, and scalable vector sparklines.
- **Analytics Layout:** Combines a metric title, bold readout value, positive percentage trend arrow, and an inline sparkline curve (`<svg>`) for instant visual performance tracking.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(20px)`), subtle borders, and glowing emerald accents.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA attributes and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts hover elevation for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #10b981;            /* Icon box, trend badge & sparkline color */
    --em-speed: 0.3s;                 /* Hover elevation duration */
}
