# CSS Jello-Hover Tabs (Interactive Interface)

A fun, playful tabbed interface component designed for modern, highly interactive web applications. It features a custom "Jello" scale-bouncing keyframe animation triggered entirely by CSS hover states.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via the hidden radio-button trick, ensuring smooth, native browser performance.
- **Jello-Hover Animation:** Utilizes a custom `em-jello` keyframe sequence that manipulates `scale3d` on the X and Y axes to create a squishy, bouncy feedback effect when users hover over unselected tabs.
- **Pill-UI Aesthetic:** Features deeply rounded corners (`border-radius: 99px`), soft drop shadows, and a floating container layout typical of modern app settings or profile dashboards.
- **Accessible & Responsive:** Adapts gracefully on mobile by stacking the pill-shaped tabs vertically. fully navigable via keyboard (`tabindex="0"`) and immediately disables bouncy animations if the user has `@media (prefers-reduced-motion: reduce)` enabled.

## 🛠️ Usage

Copy the HTML from `demo.html` and link the styles from `style.css`. The component separates the tab headers and content panels into distinct floating blocks for a modern app feel.

### CSS Custom Properties
Adjust the main brand color and the duration of the jello bounce via the `:root` pseudo-class:

```css
:root {
    --em-primary: #8b5cf6;        /* Purple interactive accent color */
    --em-jello-duration: 0.9s;    /* Timing of the squish/bounce animation */
}
