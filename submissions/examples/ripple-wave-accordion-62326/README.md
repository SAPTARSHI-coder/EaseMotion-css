# CSS Ripple-Wave Accordion for Product Catalog Layouts

A modern, lightweight, and purely CSS/HTML accordion component featuring smooth transitions and a dynamic ripple-wave effect on interaction. Ideal for product catalogs and grouped content.

## Features
- **Pure CSS/HTML:** No JavaScript required. Uses the checkbox hack for state management.
- **Ripple Effect:** CSS-only ripple effect on active state using pseudo-elements.
- **Smooth Animations:** High-performance CSS transitions for opening and closing panels.
- **Accessible:** Includes `prefers-reduced-motion` support to disable animations for users who prefer it.
- **Responsive:** Scales beautifully across desktop, tablet, and mobile devices.

## Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`. The accordion uses `<input type="checkbox">` elements to toggle the visibility of the content panels.

## Customization
You can easily customize the theme by modifying the CSS variables located in the `:root` pseudo-class in `style.css`.

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --background: #f8fafc;
    --surface: #ffffff;
    --text-main: #1e293b;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --ripple-color: rgba(99, 102, 241, 0.3);
}
```
