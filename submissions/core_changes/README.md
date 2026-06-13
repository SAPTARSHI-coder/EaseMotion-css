# Sidebar Navigation

1. What does this do? Provides a responsive sidebar navigation component with collapsible icon-only mode on desktop and an off-canvas slide-in panel on mobile, including active states, badges, section labels, and user info footer.

2. How is it used? Structure your layout with `<aside class="sidebar">` containing nav links and `.nav-item.active` for the current page. Add `.collapsed` for icon-only mode. On mobile, the sidebar slides in from the left with an overlay backdrop toggled by a hamburger button.

3. Why is it useful? Sidebar navigation is a standard pattern for dashboards and admin panels. This component provides a complete responsive implementation across desktop (collapsible) and mobile (off-canvas) without any framework dependency.
