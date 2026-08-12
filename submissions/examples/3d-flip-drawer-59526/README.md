# 3D-Flip Drawer for SaaS Showcase Layouts

A modern, lightweight, pure CSS/HTML 3D-flip drawer designed for SaaS dashboards and showcase layouts. This component uses CSS 3D transforms (`rotateY`, `perspective`) to create an engaging spatial effect when navigating the dashboard.

## Features

- **Pure CSS/HTML:** No external JavaScript libraries or frameworks required (only standard HTML DOM manipulation for toggling classes).
- **3D Transitions:** Smooth `rotateY` and `scale` transformations for a premium depth effect.
- **Fully Responsive:** Adapts to desktop, tablet, and mobile views.
- **Accessible:** Includes `prefers-reduced-motion` support to disable animations for users who require it.
- **Customizable:** Built with CSS custom properties (variables) for easy theming.

## File Structure

- `demo.html` - The showcase layout structure containing the dashboard and drawer.
- `style.css` - The pure CSS stylesheet handling layout and 3D animations.
- `README.md` - Component documentation.

## Usage

1. Copy the HTML structure from `demo.html` into your project.
2. Include the `style.css` in your document `<head>`.
3. The drawer toggle mechanism requires toggling the `active` class on `.em-drawer` and `drawer-open` on `.em-content`. A simple inline script is provided in the demo:

```javascript
function toggleDrawer() {
    document.getElementById('drawer').classList.toggle('active');
    document.getElementById('mainContent').classList.toggle('drawer-open');
}
```

## Customization (CSS Variables)

You can easily customize the drawer by overriding the variables in the `:root` pseudo-class:

```css
:root {
    --primary: #4f46e5;          /* Main brand color */
    --primary-hover: #4338ca;    /* Button hover state */
    --bg-main: #f9fafb;          /* Main dashboard background */
    --bg-drawer: #1f2937;        /* Drawer background color */
    --text-main: #111827;        /* Main text color */
    --text-drawer: #f9fafb;      /* Text color inside the drawer */
    --drawer-width: 320px;       /* Drawer width */
    --transition-timing: 0.6s cubic-bezier(0.16, 1, 0.3, 1); /* Animation speed & easing */
}
```
