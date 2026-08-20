# CSS Slide-Right Tabs (Responsive Dashboard)

A robust, purely CSS-driven tabbed interface engineered specifically for responsive dashboards and admin panels. It features a clever flex-layout that transforms from a top horizontal tab bar on mobile directly into a left-hand sidebar navigation on desktop viewports.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via hidden radio inputs, ensuring perfect reliability for admin interfaces.
- **Dynamic Flexbox Layout:** On mobile, tabs sit horizontally above the content. At `640px` and wider, the flex direction pivots, creating a seamless sidebar navigation UI while preserving the slide-right animation context.
- **Slide-Right Transition:** Employs a crisp `em-slide-right` `@keyframes` sequence that smoothly translates content into view, giving the panels a native desktop app feel.
- **Accessible & Clean:** Styled with modern dashboard aesthetics (Slate grays, crisp borders, soft drop-shadows). Fully keyboard navigable via `tabindex="0"` and perfectly honors `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Copy the HTML from `demo.html` and link the styles from `style.css`. The internal content includes mock components like status bars and metric grids typical for dashboard data presentation.

### CSS Custom Properties
Adjust the primary branding and animation timing via the `:root` pseudo-class:

```css
:root {
    --em-brand: #0ea5e9;           /* Main dashboard action color */
    --em-slide-offset: -25px;      /* Starting offset for the slide animation */
    --em-transition-speed: 0.35s;  /* Speed of the slide-right reveal */
}
