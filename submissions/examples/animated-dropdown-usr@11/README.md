# Animated Dropdown Menu Submission

## 1. What does this do?
It provides a modern, accessible dropdown menu component with multiple style variants (navigation, user profile, action menu, filter) and smooth entrance/exit animations.

## 2. How is it used?
Wrap your trigger button in `.dropdown-wrapper` and add the dropdown menu with `.dropdown-menu` class. Use animation classes like `ease-fade-in`, `ease-scale-in`, or `ease-slide-down`. JavaScript handles toggle functionality and keyboard navigation.

## 3. Why is it useful?
- Essential component for navigation, user menus, and action menus
- 4 different style variants for different use cases
- Smooth animations with EaseMotion utilities
- Fully accessible with keyboard navigation (Escape to close)
- Click outside to close functionality
- Rich content support (icons, descriptions, avatars, checkboxes)
- Includes `prefers-reduced-motion` support for accessibility
- Mobile-responsive design
- Easy to customize and extend
- Maintainer can easily standardize this as `.ease-dropdown-[YOUR_INITIALS]` in the core library.