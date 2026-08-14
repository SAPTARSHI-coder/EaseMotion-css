# EaseMotion CSS - Slide-Up Drawer for E-Commerce

A modern, lightweight, pure CSS slide-up drawer designed for E-Commerce checkout layouts. It provides a smooth, performant animation to display order summaries and checkout actions from the bottom of the screen.

## 🚀 Features
- **Pure CSS/HTML:** No external JavaScript frameworks required (uses basic inline JS for toggling standard classes).
- **Smooth Animations:** Utilizes CSS `transform` and `opacity` with cubic-bezier easing for a buttery-smooth feel.
- **Accessible:** Includes ARIA attributes (`role="dialog"`, `aria-modal="true"`, etc.) and respects `prefers-reduced-motion`.
- **Responsive:** Adapts seamlessly to desktop, tablet, and mobile viewports.

## 📁 File Structure
- `demo.html` - The HTML structure demonstrating the checkout drawer.
- `style.css` - The CSS containing layout, styling, and animation logic.
- `README.md` - Documentation and details.

## 🎨 CSS Custom Properties
This component is highly customizable using CSS variables defined in the `:root` scope:

```css
:root {
  --ease-primary-color: #2563eb;
  --ease-primary-hover: #1d4ed8;
  --ease-bg-color: #f8fafc;
  --ease-text-color: #0f172a;
  --ease-text-muted: #64748b;
  --ease-border-color: #e2e8f0;
  --ease-drawer-bg: #ffffff;
  --ease-drawer-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  --ease-drawer-radius: 20px;
  
  /* Animation timings */
  --ease-transition-duration: 0.4s;
  --ease-transition-timing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## 💻 Usage
To use this component:
1. Copy the HTML structure from `demo.html`.
2. Include the CSS from `style.css` in your project.
3. The drawer uses a simple `.is-open` class on the `.ease-drawer` container to trigger the visibility and animations. This can be toggled using plain JavaScript or inline `onclick` events as demonstrated.
