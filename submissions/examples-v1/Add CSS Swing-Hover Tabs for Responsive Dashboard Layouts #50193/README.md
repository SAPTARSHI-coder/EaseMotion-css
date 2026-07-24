# CSS Swing-Hover Tabs - Responsive Dashboard Aesthetic

An engaging, pure CSS tab navigation system featuring a delightful "Swing-Hover" micro-interaction, fully integrated into a modern Responsive Dashboard shell.

## Features

- **Swing-Hover Interaction**: Hovering over the sidebar tabs (or focusing them via keyboard) triggers a custom `@keyframes swingHover` animation on the tab's SVG icon. The icon behaves like a pendulum, swinging back and forth before settling, adding a highly tactile and playful micro-interaction to the dashboard.
- **Responsive Dashboard Morphing**:
  - **Desktop (`>768px`)**: The navigation acts as a classic vertical left-sidebar (`width: 260px`). When a tab becomes active, a soft-blue pill background smoothly scales in.
  - **Mobile (`<768px`)**: Using Flexbox `column-reverse`, the dashboard seamlessly morphs the sidebar into a fixed **Bottom Navigation Bar**, typical of modern mobile web apps. The swing interaction and active indicator seamlessly adapt to this layout.
- **Pure CSS State Management**: Relies entirely on the visually hidden radio button pattern. The tabs shift focus, apply active styles, and toggle panel visibility via the CSS `:checked ~` sibling selector, requiring zero JavaScript.
- **Smooth Panel Entrance**: When switching tabs, the associated dashboard content panels enter using a clean `@keyframes fadeSlideUp` transition.

## Custom Properties

Customize the timing of the pendulum swing or adjust the dashboard theme via the `:root` variables in `style.css`:

```css
:root {
  /* Swing-Hover Interaction */
  --swing-duration: 0.6s;
  
  /* Dashboard Theme */
  --bg-dashboard: #f3f4f6; /* Gray 100 */
  --surface-panel: #ffffff;
  
  --brand-primary: #0284c7; /* Sky 600 */
  --brand-primary-bg: #e0f2fe; /* Active background */
  
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Hover over the Home, Analytics, Wallet, or Settings tabs to trigger the playful pendulum swing animation on the icons! Don't forget to resize your browser window to watch the vertical sidebar morph into a mobile-friendly bottom navigation bar.
