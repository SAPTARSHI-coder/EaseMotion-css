# Minimalist Responsive Sidebar

A pure CSS, ultra-clean, minimalist responsive sidebar layout ideal for dashboards and web applications. It uses a monochromatic black-and-white color palette with subtle grays for a timeless, professional aesthetic.

## Features

- **Pure CSS State Management**: Utilizes the "Checkbox Hack" (`<input type="checkbox">` + `<label>`) to handle mobile menu toggling entirely without JavaScript.
- **Fluid Responsiveness**:
  - **Desktop (`> 768px`)**: The sidebar is fixed to the left edge, and the main content gracefully offsets itself via `margin-left`.
  - **Mobile (`<= 768px`)**: The sidebar slides off-screen via `transform: translateX(-100%)`. A mobile menu button appears. When clicked, the sidebar smoothly slides back in, and a darkened semi-transparent overlay covers the main content.
- **Clean Aesthetic**: Stripped of unnecessary borders and heavy shadows. Relies on negative space (`padding`, `gap`), clean typography (system fonts), and highly subtle hover states (`#f3f4f6`) to guide the user's eye.
- **Semantic Structure**: Uses standard HTML5 landmarks (`<aside>`, `<nav>`, `<main>`, `<header>`) for excellent base accessibility.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `<input type="checkbox" id="sidebar-toggle">` sits exactly where it is (as an early sibling) so the general sibling combinator (`~`) can successfully target the `.layout-wrapper` children when checked.
