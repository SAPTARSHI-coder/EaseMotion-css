# CSS Adaptive Sidebar Layout

A standard, purely CSS-driven responsive layout macro-pattern. On desktop, the navigation acts as a fixed vertical sidebar. On mobile screens, it seamlessly transforms into a sticky bottom navigation bar, heavily utilized in modern Progressive Web Apps (PWAs).

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Desktop Layout**: By default (Desktop-first approach), the `.adaptive-nav` is positioned `fixed` to the left edge with a set width (`260px`) and `height: 100vh`. The `.main-content` area uses `margin-left: 260px` to offset itself so it doesn't render underneath the fixed sidebar.
  - **The Mobile Transformation**: A CSS Media Query (`@media (max-width: 768px)`) handles the entire transition. 
    1. The `.main-content` margin is reset to `0`, and `padding-bottom` is added to prevent content from hiding behind the new bottom bar.
    2. The `.adaptive-nav` is detached from the left edge and pinned to the `bottom: 0` with `width: 100%`.
    3. The `.nav-brand` logo section is hidden via `display: none` to save critical horizontal real estate.
    4. The `.nav-menu` list transforms from a vertical `flex-direction: column` into a horizontal `flex-direction: row` with `justify-content: space-around`.
    5. The individual `.nav-link` items change to stack their icon and text vertically.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a sleek dark slate navigation UI. Includes a subtle CSS glassmorphism effect (`backdrop-filter: blur(10px)`) applied specifically to the mobile bottom bar.
- Fully accessible semantic structure. Uses `<nav>`, `<ul>`, and `<main>` tags. Includes `aria-label="Main Navigation"` on the nav container and `aria-current="page"` on the active link for screen reader context.

## Usage
Open `demo.html` in your browser. Resize your browser window horizontally to watch the layout break gracefully from a desktop sidebar into a mobile bottom-bar.

## Files
- `demo.html`: The HTML structure defining the `<nav>` and `<main>` macro-layout.
- `style.css`: The styling, flexbox rules, and the critical `@media (max-width: 768px)` layout transformations.
