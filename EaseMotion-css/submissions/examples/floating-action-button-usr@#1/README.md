# Floating Action Button (FAB) Submission

## 1. What does this do?
It provides a modern, animated Floating Action Button (FAB) with an expandable speed-dial menu, inspired by Material Design. Perfect for mobile apps, note-taking tools, and action-heavy interfaces.

## 2. How is it used?
Wrap your menu items in `.fab-menu` and the main button in `.fab-main` inside a `.fab-container`. JavaScript handles the toggle functionality with staggered animations for each menu item.

## 3. Why is it useful?
- Essential component for action-heavy interfaces (Gmail, Twitter, Notion style)
- Smooth expand/collapse animation with staggered menu item entrance
- Icon rotation (plus → ×) on toggle
- Tooltip labels appear on hover for each action
- Backdrop overlay with blur effect
- Pulse ring animation to draw attention
- Ripple effect on click
- Fully accessible with ARIA labels and keyboard support (Escape to close)
- Includes `prefers-reduced-motion` support for accessibility
- Mobile-responsive design
- Easy to customize colors and actions
- Maintainer can easily standardize this as `.ease-fab-[YOUR_INITIALS]` in the core library.