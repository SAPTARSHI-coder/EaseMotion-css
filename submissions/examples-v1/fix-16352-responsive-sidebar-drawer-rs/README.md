# Responsive Sidebar/Drawer Component

This submission adds a production-ready, fully responsive sidebar drawer component.

## Bug / Feature Description
Almost all modern web dashboards require a sidebar. The challenge is making it behave as a hidden sliding drawer (off-canvas) on mobile devices, and as a fixed, permanent column on desktop devices.

## Fix / Implementation Details
- Added `.ease-drawer` for the sliding sidebar core.
- Added `.ease-drawer-overlay` for the blurred backdrop that appears on mobile when the drawer is open.
- Built `.ease-drawer-responsive` logic which uses media queries (`@media (min-width: 1024px)`) to automatically convert the sliding drawer into a permanent, sticky layout column, while simultaneously hiding the overlay.
- Added `.ease-drawer-left` and `.ease-drawer-right` modifiers for positioning.
- Included a lightweight vanilla JS snippet in the demo to toggle the `.is-open` classes.

## How to Test
1. Open `demo.html` in your browser.
2. If your browser window is wide (desktop size), you should see the sidebar permanently attached to the left.
3. Resize your browser window to a narrow mobile size. Notice the sidebar disappears and a hamburger menu icon appears.
4. Click the hamburger icon to see the sidebar smoothly slide in over the content, accompanied by a blurred backdrop.
