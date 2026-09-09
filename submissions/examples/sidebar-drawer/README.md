# Sidebar Drawer

1. What does this do? Renders an off-canvas sidebar that slides in from the left with a dimmed backdrop, driven by a hidden checkbox and CSS sibling selectors (no JavaScript).
2. How is it used? Wrap an `.open-toggle__input` checkbox, an `.open-toggle__btn` label, a `.sidebar-backdrop`, and an `.sidebar-drawer` aside inside a `.open-toggle` label. Clicking the button or focusing + Space/Enter flips the drawer open. Use `.sidebar-drawer__nav` and `.sidebar-drawer__link` (add `--active`) for the menu, and `.sidebar-drawer__close` for a close affordance. Customize the drawer width and slide speed via `--sd-width` and `--sd-speed`.
3. Why is it useful? It is a dependency-free, accessible off-canvas menu with backdrop dimming, keyboard focus support, and `prefers-reduced-motion` handling.
