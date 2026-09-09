# Sidebar Menu Slide

## Overview
A sidebar navigation panel that slides in/out from the left side of the viewport. Uses CSS `translateX` transitions for smooth animation, `margin-left` push for main content offset, and a backdrop overlay for visual focus.

## Sandbox Configuration Files
- `demo.html` — Interactive demonstration with hamburger toggle, close button, and navigation menu items.
- `style.css` — Scoped styling utilizing CSS custom properties for duration, sizing, background, hover states, and overlay color.

## Key Interaction Mechanics
1. **Slide Transition:** The sidebar slides using `transform: translateX()` controlled by the `--sidebar-duration` custom property.
2. **Content Push:** Main content area uses a `margin-left` transition to create a fluid push when the sidebar opens.
3. **Backdrop Overlay:** A semi-transparent overlay with backdrop blur fades in behind the sidebar, with click-to-close behavior.
4. **Hover Effects:** Navigation items feature background color, text color, and padding shifts on hover for visual feedback.
