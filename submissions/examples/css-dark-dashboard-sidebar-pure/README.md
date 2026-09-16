# CSS Dark Dashboard Sidebar

A sleek, modern dark-themed navigation sidebar featuring hover micro-interactions, active state styling, and a bottom-anchored user profile. Built purely with CSS and HTML, requiring zero JavaScript for layout or styling states.

## Features
- Pure CSS and HTML.
- **Component Architecture (Documented in Code)**: 
  - **The Sticky Layout**: Uses `position: sticky; top: 0; height: 100vh;` to ensure the sidebar remains fixed on the screen while the adjacent main content area is allowed to scroll independently.
  - **Flexbox Spacing**: The internal layout of the sidebar uses `display: flex; flex-direction: column;`. By setting `flex: 1` on the navigation menu container, the user profile section is automatically pushed to the absolute bottom of the sidebar, regardless of screen height.
  - **Active State Indicator**: When a navigation link has the `.active` class, a subtle left border is rendered. To prevent layout shifts (which happen when adding physical borders on hover/active states), this indicator is built using a absolutely positioned `::before` pseudo-element.
  - **Notification Badge**: Includes a standalone notification badge component with a purely CSS-driven pulse animation (`box-shadow` expansion) to draw the user's eye to unread items.
- **Theming**: Configured via CSS Custom Properties, making it trivial to update the dark slate colors to match any specific brand identity.
- Fully accessible semantic structure. The sidebar uses `<aside>`, `<nav>`, and `<ul role="list">` to ensure screen readers understand the page architecture. Current page context is provided via `aria-current="page"` on the active link. SVG icons are inline and use `currentColor` to perfectly sync with the text color states. Honors the `prefers-reduced-motion` accessibility standard by disabling the notification badge pulse animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the sidebar layout anchored to the left side of the screen.

## Files
- `demo.html`: The semantic HTML structure containing the navigation list, inline SVGs, and profile footer.
- `style.css`: The styling, flexbox layout logic, custom scrollbar definitions, and hover/active states.
