# CSS Blur-Entrance Drawer

A modern, lightweight, pure CSS and HTML showcase example for EaseMotion CSS. This component implements a sleek drawer menu with a visually appealing blur-entrance effect, ideal for SaaS applications and admin dashboards.

## 🚀 Features

- **Pure CSS/HTML**: No JavaScript required for state management (uses the "checkbox hack").
- **Blur Entrance Animation**: The drawer transitions in smoothly with a combination of `transform`, `opacity`, and `filter: blur()`.
- **Responsive**: Adapts fluidly to mobile, tablet, and desktop viewports.
- **Accessible**: Includes `aria-hidden`, `aria-label`, and `tabindex` attributes, and supports keyboard navigation.
- **Motion Safe**: Implements `prefers-reduced-motion` to disable animations for users who request reduced motion.

## 📁 File Structure

- `demo.html` - The HTML structure demonstrating the drawer within a simulated SaaS layout.
- `style.css` - The pure CSS stylesheet containing all visual styles, variables, and animation logic.
- `README.md` - This documentation file.

## 🛠️ Usage

To integrate this component into your own project:

1. Copy the HTML structure from `demo.html` focusing on:
   - The hidden checkbox (`.em-drawer-checkbox`)
   - The trigger label (`.em-drawer-btn`)
   - The overlay label (`.em-drawer-overlay`)
   - The drawer container (`.em-drawer`)

2. Include the CSS from `style.css`. The animation relies heavily on CSS variables for easy customization:

```css
:root {
    /* Animation Tokens */
    --em-transition-duration: 0.5s;
    --em-transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
    
    /* Drawer Dimensions */
    --em-drawer-width: 320px;
}
```

## 🎨 How it works

The core animation works by transitioning three properties simultaneously on the drawer state change:

1. `transform: translateX(-100%) scale(0.95)` to `transform: translateX(0) scale(1)`
2. `opacity: 0` to `opacity: 1`
3. `filter: blur(10px)` to `filter: blur(0)`

The state is controlled by a hidden checkbox. When the checkbox is checked (triggered by clicking the hamburger icon or the overlay), the `~` general sibling combinator is used to apply styles to the `.em-drawer` and `.em-drawer-overlay`.

```css
.em-drawer-checkbox:checked ~ .em-drawer {
    transform: translateX(0) scale(1);
    opacity: 1;
    filter: blur(0);
    visibility: visible;
}
```
