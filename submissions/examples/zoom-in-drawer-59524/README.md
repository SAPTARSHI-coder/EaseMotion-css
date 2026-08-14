# CSS Zoom-In Drawer for SaaS Showcase

A pure CSS Zoom-In Drawer designed for modern SaaS showcase layouts, demonstrating smooth scaling and 3D depth transitions.

## Features
- **Pure CSS**: No JavaScript required for interactions
- **Responsive**: Adapts gracefully across desktop, tablet, and mobile breakpoints
- **Accessible**: Keyboard navigable using `label` and `checkbox` mechanism, includes `aria-hidden` attributes
- **Motion Safe**: Fully respects `prefers-reduced-motion` settings for users who prefer minimal animations
- **Modern UI/UX**: Creates a 3D zoom-out depth effect on main content when the drawer slides in

## Usage
Add the `demo.html` structure to your project. Link `style.css` in your `head` tag. The drawer relies on a hidden checkbox state (`#em-drawer-toggle`) being controlled by standard `label` tags (`.em-menu-btn` and `.em-close-btn`).

## Custom Properties
The layout can be easily customized using CSS variables defined in `:root`:

- `--em-primary-color`: Primary highlight color
- `--em-bg-color`: Background color of the main content area
- `--em-card-bg`: Background color of content cards
- `--em-drawer-bg`: Drawer background color
- `--em-transition-speed`: Global transition speed (default: 0.5s)
- `--em-zoom-scale`: Content scaling amount on open (default: 0.92)
- `--em-drawer-width`: Desktop drawer width (default: 320px)

## Implementation Details
The zoom effect leverages CSS 3D Transforms on a shared container. The `.em-app-container` gives a 3D perspective (`perspective: 1200px`), and the `input:checked` pseudo-class applies `transform: scale(...) translateX(...)` to the main content layout alongside border-radius rounding, while independently shifting and scaling the `.em-drawer` container into view.
