# CSS PR Review Status

An advanced, high-performance pull request review status component featuring approval badges, overlapping reviewer avatars, and clean typography, built completely with pure CSS.

## 🚀 Features

- **Zero JavaScript Required:** Built entirely using native CSS flexbox stacking, overlapping negative margins (`margin-left: -10px`), and hover scaling.
- **Reviewer Avatar Grouping:** Clean circular avatar initials with high-contrast borders simulating developer team approvals.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA list roles and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via `:root` variables:

```css
:root {
    --em-accent: #10b981;            /* Accent status and button color */
    --em-speed: 0.4s;                 /* Transition speed */
}
