# Floating Sidebar with SaaS Modern Styling

A premium, highly-polished floating sidebar component designed for modern SaaS (Software as a Service) dashboards. It utilizes pure HTML and CSS, featuring a responsive layout and a CSS-only mobile drawer toggle.

## Features
- **SaaS Modern Aesthetic**: Clean lines, subtle soft shadows, high-contrast typography (`Inter` font), and distinct border radii.
- **Floating Design**: Instead of running full height, the sidebar floats gracefully with margins, providing a lightweight, modern feel.
- **Pure CSS Mobile Toggle**: Utilizes the `<input type="checkbox">` hack to manage the open/close state of the sidebar on mobile devices without Javascript.
- **Backdrop Overlay**: Includes a blurred, semi-transparent overlay that appears behind the sidebar when opened on mobile devices.
- **Responsive Architecture**: Automatically adapts from a static side-docked layout on desktop to a hidden, slide-out drawer on mobile screens (<900px).
- **Interactive States**: Smooth hover transitions, SVG icon color matching, and notification badges.

## Usage
Include `demo.html` and `style.css` in your project. The structural layout heavily depends on the CSS Sibling Selectors (`~`) to control the mobile menu, so ensure the `.sidebar-toggle-input` remains at the root level of your `<body>` above the `.layout-container`.
