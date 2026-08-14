# Floating Minimalist Sidebar Pro

A highly polished, modern sidebar component featuring a "floating" aesthetic and robust pure CSS mobile drawer functionality.

## Features
- **Floating Design**: Unlike traditional sidebars that consume the full height of the viewport flush against the edge, this design maintains uniform padding (`20px`) on all sides, creating a sleek, app-like floating card appearance.
- **Pure CSS State Management**: Utilizes the `<input type="checkbox">` hack to handle mobile menu toggling without Javascript.
- **Smooth Drawer Mechanics**: On mobile viewports (`max-width: 900px`), the sidebar transitions into a fixed off-canvas drawer that slides in from the left, complete with an animated background blur overlay (`backdrop-filter`).
- **Premium Aesthetics**: Features a meticulously tuned minimalist color palette, soft layered box-shadows, rounded borders (`20px`), and `Inter` typography.
- **Interactive States**: Clean `:hover` and `.active` states for navigational items, including custom styling for destructive actions (e.g., Logout).

## Usage
Include `demo.html` and `style.css` in your project. The layout utilizes CSS Flexbox (`.app-layout`) to position the sidebar next to the main content area. Make sure to keep the hidden `#sidebar-toggle` checkbox at the very top of the DOM structure so that its state (`:checked`) can control sibling elements via the `~` selector.
