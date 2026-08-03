# CSS Skew-Active Tabs

A modern, highly accessible tabbed interface featuring a stylish slanted (skewed) design. Built 100% with CSS and HTML, it utilizes the invisible radio-button hack for robust state management without requiring a single line of JavaScript.

## 🚀 Features

- **Pure CSS State Management:** Uses hidden `<input type="radio">` tags paired with the general sibling combinator (`~`) to toggle active tabs and display the corresponding panels.
- **Skew Geometry:** Employs `transform: skewX()` on the tabs to create a sharp, modern aesthetic, while applying an inverted skew to the child text element to maintain readability.
- **Responsive Degradation:** On mobile viewports (`< 600px`), the skew is removed, and tabs stack vertically to ensure large, accessible touch targets.
- **Accessible & Performant:** Includes smooth keyframe entry animations for the panels and respects `@media (prefers-reduced-motion: reduce)` by bypassing animations for users with motion sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. 

To add more tabs, simply add a new hidden radio input with a unique `id`, a new label targeting that `id` in the `.em-tabs-header`, and a new `.em-tab-panel` in the content section. Then, update the CSS routing logic block at the bottom of the stylesheet to include your new IDs.

### CSS Custom Properties
Easily modify the visual theme in the `:root` selector:

```css
:root {
    --em-bg-card: #1e293b;    /* Active tab and panel background */
    --em-tab-inactive: #334155; /* Inactive tab color */
    --em-tab-active: #3b82f6;   /* Active text/accent color */
    --em-skew-angle: -15deg;  /* Intensity of the slant */
}
