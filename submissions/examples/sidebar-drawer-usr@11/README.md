# Animated Sidebar/Drawer Submission

## 1. What does this do?
It provides a modern, animated sidebar/drawer component with multiple positions (left, right, top, bottom), smooth slide animations, overlay with backdrop blur, and different drawer types (navigation, shopping cart, notifications, settings).

## 2. How is it used?
Add the drawer HTML with appropriate position class (`.drawer-left`, `.drawer-right`, `.drawer-top`, `.drawer-bottom`) and overlay. Use JavaScript to toggle the `.active` class. Drawers can be closed by clicking the close button, clicking the overlay, or pressing Escape.

## 3. Why is it useful?
- Essential component for mobile menus, settings panels, notification drawers, and shopping carts
- 4 different drawer positions (left, right, top, bottom)
- Smooth slide-in/slide-out animations with EaseMotion utilities
- Overlay with backdrop blur effect
- Different drawer types showcased (navigation, cart, notifications, settings)
- Keyboard accessible (Escape to close)
- Click outside to close functionality
- Fully responsive (full-width on mobile)
- Includes `prefers-reduced-motion` support for accessibility
- Easy to customize content and styling
- Maintainer can easily standardize this as `.ease-drawer-[YOUR_INITIALS]` in the core library.