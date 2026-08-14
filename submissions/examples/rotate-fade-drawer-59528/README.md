# CSS Rotate-Fade Drawer for SaaS Showcase Layouts

A modern, lightweight, pure CSS showcase example demonstrating a 3D rotate-fade animation for a side drawer menu, perfect for SaaS applications.

## 🚀 Features

- **Pure CSS/HTML**: No JavaScript required, utilizing the advanced "checkbox hack" for state management.
- **Rotate-Fade Animation**: The drawer slides in from the right while simultaneously rotating in 3D space (`rotateY`) and fading in (`opacity`). 
- **Smooth Easing**: Employs a custom `cubic-bezier` easing function for a delightful "bounce-back" effect on entrance.
- **Fully Responsive**: Adapts seamlessly to desktop, tablet, and mobile screens.
- **Accessible & Inclusive**: Full support for `@media (prefers-reduced-motion: reduce)`, stripping out 3D transforms and complex timings for users who prefer minimal movement.
- **Modern Aesthetic**: Features a clean SaaS dashboard layout, complete with an overlay and soft shadows for a premium feel.

## 📁 File Structure

- `demo.html`: Clean HTML5 markup, demonstrating a standard dashboard layout with the drawer integrated.
- `style.css`: The pure CSS stylesheet containing all the styling, CSS variables, and animation logic.
- `README.md`: This documentation file.

## 🎨 CSS Custom Properties (Variables)

The styling is heavily driven by CSS variables for easy customization. You can override these in the `:root` pseudo-class:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-color` | `#f4f7f6` | The main background color of the page. |
| `--text-color` | `#333` | The primary text color for the main content. |
| `--primary-color` | `#4a90e2` | Accent color used for the logo and active state indicators. |
| `--drawer-bg` | `#2c3e50` | The background color of the side drawer. |
| `--drawer-text` | `#ecf0f1` | The text color for links and headings inside the drawer. |
| `--drawer-width` | `320px` | The width of the side drawer. Adjusts automatically on mobile screens. |
| `--transition-speed` | `0.5s` | The base duration for the rotate-fade animations and overlay transitions. |
| `--overlay-bg` | `rgba(0, 0, 0, 0.5)` | The color and opacity of the background overlay when the drawer is active. |

## 💡 How It Works (The Magic)

1. **The Checkbox Hack**: An invisible `<input type="checkbox">` is linked to `<label>` elements (the hamburger menu icon, the overlay, and the close button). Clicking any of these labels toggles the checkbox's state.
2. **Perspective**: The `.saas-layout` container is given a `perspective: 1200px` to give depth to the 3D transforms happening within it.
3. **The Animation**: By default, the `.saas-drawer` is styled with `transform: translateX(100%) rotateY(-30deg);`, `opacity: 0`, and `visibility: hidden`.
4. **Triggering**: When the checkbox is checked (`.drawer-toggle-input:checked ~ .saas-drawer`), the transform is reset to `transform: translateX(0) rotateY(0deg);`, along with opacity and visibility changes, creating a beautiful 3D rotating and sliding entrance.

## ♿ Accessibility

This implementation respects the user's system preferences. If "Reduced Motion" is enabled in their OS settings, the CSS uses the `prefers-reduced-motion: reduce` media query to disable the `rotateY` 3D transform and the bounce easing, falling back to a simpler, faster slide or immediate toggle.

Enjoy this lightweight, performant, and modern CSS drawer!
