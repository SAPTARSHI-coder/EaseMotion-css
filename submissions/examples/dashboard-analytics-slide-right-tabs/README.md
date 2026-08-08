# CSS Slide-Right Tabs (Dashboard Analytics)

A crisp, high-performance CSS tabbed interface designed specifically for data-heavy Dashboard Analytics layouts. It utilizes a sharp slide-right animation to introduce key performance indicator (KPI) panels.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via hidden radio inputs.
- **Analytics Styling:** Features a clean, grid-based layout for KPI cards, utilizing a professional color palette designed for high legibility of data and metrics.
- **Slide-Right Transition:** A smooth horizontal translation combined with a fade-in effect to guide the user's eye across data points.
- **Responsive & Accessible:** Fluid grid adapts to smaller screens, tabs stack cleanly on mobile, and full keyboard/reduced-motion accessibility is baked in.

## 🛠️ Usage

Copy the HTML from `demo.html` and the corresponding styles from `style.css`. Note that the HTML utilizes a grid structure for `.kpi-card` elements to demonstrate data presentation.

### CSS Custom Properties
Configure colors and animation specs in the `:root` pseudo-class:

```css
:root {
    --em-accent: #6366f1;          /* Primary dashboard color */
    --em-slide-offset: -40px;      /* Distance of the slide animation */
    --em-transition-timing: 0.4s;  /* Animation duration */
}
