# Magnetic Floating Dock Navigation Bar Component

A floating application navigation bar modeled after macOS dock scaling micro-interactions with spring physics.

## 1. What does this do?
Renders a translucent glassmorphic navigation bar fixed at the bottom of the viewport with interactive magnification scale hover effects.

## 2. How is it used?
1. Link `style.css` in your HTML header.
2. Structure navigation items inside `.magnetic-dock` using `.dock-list` and `.dock-link`.
3. Add `.active` class to `.dock-item` to display the active location glowing indicator dot.

## 3. Why is it useful?
- **macOS Visual Experience**: Provides high-end desktop/mobile app navigation feel using pure CSS transform scaling.
- **Micro-Interactions**: Features tooltips and spring physics transform curves on focus/hover.
- **Accessible & Responsive**: Fully supports screen reader keyboard navigation via `:focus-visible` styling.
