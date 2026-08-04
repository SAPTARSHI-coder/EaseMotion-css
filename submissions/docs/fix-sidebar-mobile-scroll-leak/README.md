# Fix: Mobile Sidebar Scroll Leak

Resolves scroll events leaking from active navigation sidebars to the background document body on mobile viewports.

## What does this do?
- **Overlay Scroll Locking:** Toggle overflow status rules on the body element when the sidebar is active.